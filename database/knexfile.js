// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const dev = process.env.NODE_ENV || 'development'
const config = require('../config/database')[dev];

module.exports = config;