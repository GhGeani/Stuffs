const fs = require('fs');
const mongoose = require('mongoose');
const readline = require('readline');
const Item = require('./schema.js');

// Connection
mongoose.connect('mongodb://localhost:27017/itemsFromCvs', { useNewUrlParser: true })

const stream = fs.createReadStream('../../seattle-checkouts-by-title/checkouts-by-title.csv');
stream.setEncoding('UTF8');
let count = 0;
let items = [];

const lineReader = readline.createInterface({
  input: stream
});

lineReader.on('line', (data) => {

  count++;

  let aux = data.replace(/(['"])/g, "");
  let words = aux.split(',');

  if (count % 20000 === 0) {
    console.log(count/10000);
    Item.insertMany(items, function(err, res) {
      if(err) return err; 
    })
    items = [];
    console.log(items);
  }

  if (count > 1000000) {
    return lineReader.close();
  }

  let item = {
    author: words[7],
    title: words[6],
    bookType: words[8],
    publishYear: words[3],
    format: words[0]
  }

  items.push(item);

});
