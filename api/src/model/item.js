const mongoose = require('mongoose');
/* const fs = require('fs'),
  readline = require('readline'); */
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  UsageClass: String,
  CheckoutType: String,
  MaterialType: String,
  CheckoutYear: String,
  CheckoutMonth: String,
  Checkouts: String,
  Title: String,
  Creator: String,
  Subjects: String,
  Publisher: String,
  PublicationYear: String,
});

module.exports = mongoose.model('item', ItemSchema);


/* (function getSchema() {
  let count = 0;
  let schema = {};
  let lineReader = readline.createInterface({
    input: fs.createReadStream('../../../../checkouts-by-title.csv', 'UTF8')
  });
  lineReader.on('line', function (data) {
    let aux = data.replace(/(['"])/g, "");
    let words = aux.split(',');
    if (count == 0) {
      count++;
      for(let word in words) {
        let type = mongoose.
        console.log(type);
        // schema[words[word]] = 
      }
      console.log(schema);
      return schema;
    } else {
      return lineReader.close();
    }
  })
})() */