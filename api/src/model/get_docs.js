const fs = require('fs');
const csv = require('csv-parser');
const Item = require('./item');
const connectToDb = require('../core/connect');


// Connecting to database
connectToDb();

// Variables
const chunk = 25000;
const limit = 100000;
let curr = 0;
let results = [];

let stream = fs.createReadStream('../../../../seattle-checkouts-by-title/checkouts-by-title.csv')
        .pipe(csv())
        .on('data', (data) => {
          if (curr >= limit) {
            console.log('end');
            stream.end();
            return
          }

          // trim extra characters
          data['CheckoutYear'] = data['CheckoutYear'].replace(/\D/g, '');
          data['PublicationYear'] = data['PublicationYear'].replace(/\D/g, '');

          results.push(data)
          curr++;

          if (curr % chunk === 0) {
            if (results) {
              Item.insertMany([...results], (err, res) => {
                if (err) console.error(err);
              });
            }
            results = [];
          }
          
        })
        .on('end', () => {
          if (results)
            Item.insertMany(results, (err, res) => {
              if (err) {
                console.error(err);
              }
            });
        });
