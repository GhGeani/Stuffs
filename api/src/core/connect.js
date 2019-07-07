const mongoose = require('mongoose');
const config = require('./config/configs');

module.exports = connect = () => {
   mongoose.connect(`mongodb://localhost:27017/${config.database.dbname}`, (err) => {
    if (err) console.log(err);
    console.log('Connection with database..Done.');
  });
}