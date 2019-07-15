const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/configs');
const router = require('../routes/item');
const connectToDb = require('./connect');
const cors = require('cors');

class Server {
  constructor() {
    this.app = express();
    
    this.app.use(cors());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());
    connectToDb(mongoose, config);
    this.routes();
  }

  routes() {
    this.app.use('/', router);
  }

  start() {
    this.app.listen(config.server.port, () => {
      console.log(`Server on, port: ${config.server.port}`);
    })
  }
}

module.exports = Server