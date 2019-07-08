class Server {
  constructor() {
    this.requires();
    this.app = this.express();
    this.app.use(this.bodyParser.urlencoded({ extended: false }));
    this.app.use(this.bodyParser.json());
    this.connectToDb();
    this.routes();
  }

  requires() {
    this.express = require('express');
    this.bodyParser = require('body-parser');
    this.configs = require('./config/configs');
    this.router = require('../routes/item');
    this.connectToDb = require('./connect');
  }

  routes() {
    this.app.use('/', this.router);
  }

  start() {
    this.app.listen(this.configs.server.port, () => {
      console.log(`Server on, port: ${this.configs.server.port}`);
    })
  }
}

module.exports = Server