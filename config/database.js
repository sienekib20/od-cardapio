const { helpers } = require('../helpers');

module.exports = {
  development: {
    client: helpers.env('DB_CONNECTION'),
    connection: {
      host: helpers.env('DB_HOST'),
      database: helpers.env('DB_DATABASE'),
      user: helpers.env('DB_USERNAME'),
      password: helpers.env('DB_PASSWORD')
    },
    migrations: {
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeders"
    }
  },
  production: {
    client: helpers.env('DB_CONNECTION'),
    connection: {
      host: helpers.env('DB_HOST'),
      database: helpers.env('DB_DATABASE'),
      user: helpers.env('DB_USERNAME'),
      password: helpers.env('DB_PASSWORD')
    },
    migrations: {
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeders"
    }
  }
};