class Server {
  constructor() {
    this.requires();
    this.app = this.express();

    this.routes();
  }

  requires() {
    this.express = require('express');
    this.configs = require('./config/configs');
    this.router = require('../routes/item');
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