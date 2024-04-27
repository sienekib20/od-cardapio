// Importando
const express = require('express');
const consign = require('consign');
const config = require('../config/database');
//

class Application {
  app;
  link;
  //

  constructor() {
    this.app = express();
    this.engine(this.app);
    this.link = require('knex')(config[process.env.NODE_ENV || 'development']);
  }

  // 
  dispatcher(app) {
    consign()
      .include('./routes')
      .then('./app/http/controllers')
      //.then('./app/http/models')
      .into(app);
  }

  //

  connection() {
    return this.link;
  }

  //

  engine(app) {
    app.set('view engine', 'ejs');
    app.set('views', './resources/views');
  }

  // Inicializa o app

  run(port) {
    this.dispatcher(this.app);
    return this.app.listen(port || 3000, function (req, res) {
      console.log('Startando app');
    });
  }
}

module.exports = Application;