 // Imports
const mongodb = require('mongodb').MongoClient,
      fs = require('fs'),
      readline = require('readline');


// connect to the local db
const url = 'mongodb://localhost:27017/';
const config = require('./config');

mongodb.connect(url, function(err, conn) {
  if(err) return err;

  let db = conn.db(config.db);
  db.collection(config.collection, (err, collection) => {
    if(err) {
      conn.close();
      return console.log(err);
    }

    
  })
})

 // Code


 // Exports
