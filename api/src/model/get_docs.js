const fs = require('fs');
const csv = require('csv-parser');
const Item = require('./item');
const connectToDb = require('../core/connect');
const mongoose = require('mongoose');
const config = require('../core/config/configs');


// Connecting to database
connectToDb(mongoose, config);

// Variables
let buffer = [];
let bufferLimit = 30000;
let limit = 30000000; // number of docs
let count = 0;

let stream = fs.createReadStream('../seattle-checkouts-by-title/checkouts-by-title.csv')
  .pipe(csv())
  .on('data', (data) => {

    if (count <= limit) {
      count++;

      data['CheckoutYear'] = data['CheckoutYear'].replace(/\D/g, '');
      data['PublicationYear'] = data['PublicationYear'].replace(/\D/g, '');

      buffer.push(data);

      if (buffer.length == bufferLimit) {
        stream.pause();
      }
    } else {
      return stream.end();
    }
  })

  .on('pause', () => {
    console.log('Line paused.')
    console.log('Sending to Database...')
    if (buffer.length === 0) {
      console.log('Empty buffer received');
      return;
    }
    Item.insertMany(Object.assign([], buffer), function (err, res) {
      if (err) {
        return console.error(err);
      }
      console.log(bufferLimit + ' documents inserted.');
    });
    console.log('Buffer cleaned');
    buffer = [];
    stream.resume();
  })

  .on('end', () => {
    if (buffer.length > 0)
      Item.insertMany(buffer, (err, res) => {
        if (err) {
          console.error(err);
        } else {
           return console.log('Done.')
        }
      });
  });




/* 
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
 */