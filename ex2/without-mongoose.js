 // Imports
 const mongodb = require('mongodb').MongoClient,
   fs = require('fs'),
   readline = require('readline');

 // Code

 let path = '../../checkouts-by-title.csv';
 let count = 0; // count lines
 let firstLane = []; // save first lane here
 let buffer = [];
 let bufferLimit = 25000;
 let limit = 31000000; // number of docs

 // Connect to the local db
 const url = 'mongodb://localhost:27017/';
 const config = require('./config');
 mongodb.connect(url, {
   useNewUrlParser: true
 }, function (err, conn) {
   if (err) return err;
   let db = conn.db(config.db);
   db.collection(config.collection, (err, collection) => {
     if (err) {
       conn.close();
       return console.log(err);
     }
     let input = fs.createReadStream(path, 'UTF8');
     let lineReader = readline.createInterface({
       input
     });

     lineReader.on('line', (data) => {
       let aux = data.replace(/(['"])/g, "");
       let words = aux.split(',');

       if (count <= limit) {
         // Extract first lane
         if (count === 0) {
           firstLane = words;
           count++;
         } else {
           let item = {};

           for (let i = 0; i < firstLane.length; i++) {
             item[firstLane[i]] = words[i];
           }
           // console.log(item);

           buffer.push(item);
           if (buffer.length === bufferLimit) {
             lineReader.pause();
           }
           count++;
         }
       } else {
         return lineReader.close();
       }
     })

     lineReader.on('pause', () => {
       console.log('Line paused.')
       console.log('Sending to Database...')
       if (buffer.length === 0) {
         console.log('Empty buffer received');
         return;
       }
       collection.insertMany(Object.assign([], buffer), function (err, res) {
         if (err) {
           return console.error(err);
         }
         console.log(bufferLimit + ' documents inserted.');
       });
       console.log('Buffer cleaned');
       buffer = [];
       lineReader.resume();
     })

     lineReader.on('close', () => {
       if (buffer.length > 0) {
         collection.insertMany(buffer, function (err, res) {
           if (err) return console.error(err);
           console.log(bufferLimit + ' documents inserted.');
           buffer = [];
           console.log('Buffer cleaned');
           console.log('Closing database');
           conn.close();
         })
       } else {
         conn.close();
       }
       return console.log('Stream closed.')
     })

   })
 });