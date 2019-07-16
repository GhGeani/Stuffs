const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/configs');
const router = require('../routes/item');
const connectToDb = require('./connect');
const cors = require('cors');
const path = require('path');

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
    this.app.use(router);
    this.app.get('/app',  (req, res) => {
      res.sendFile(path.join(__dirname, '../../../client/index.html'));
    });
    // serves files from node_modules.
    this.app.use(express.static(path.join(__dirname, '../../../../node_modules'), {
      maxAge: 24 * 60 * 60 * 1000
    }));

    // serve static files from client.
    this.app.use(express.static(path.join(__dirname, '../../../client/'), {
      maxAge: 24 * 60 * 60 * 1000
    }));
  }

  start() {
    this.app.listen(config.server.port, () => {
      console.log(`Server on, port: ${config.server.port}`);
    })
  }
}

module.exports = Server