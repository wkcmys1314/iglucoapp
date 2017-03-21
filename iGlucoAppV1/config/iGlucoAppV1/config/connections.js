"use strict";

/**
 * Connections API Configuration
 *
 * Connections are like "saved settings" for your adapters.
 * Each model must have a `connection` property (a string) which is references the name of one
 * of these connections.  If it doesn't, the default `connection` configured in `config/models.js`
 * will be applied.  Of course, a connection can (and usually is) shared by multiple models.
 *
 * NOTE: If you're using version control, you should put your passwords/api keys
 * in `config/local.js`, environment variables, or use another strategy.
 */

module.exports = {
  connections: {
    
    /*mongo: {
      adapter: 'sails-mongo',
      host: 'localhost',
      port: 27017,
      user: 'root',
      password: 'root',
      database: 'iGlucoSails'
    },*/

    /*redis: {
      adapter: 'sails-redis',
      port: 6379,
      host: 'localhost'
    }*/

    /*redis: {
      adapter: 'sails-redis',
      port: 6379,
      host: 'localhost',
      password: 'root',
      database: 'iGlucoSails',
      options: {
        parser: 'hiredis',
        return_buffers: false,
        detect_buffers: false,
        socket_nodelay: true,
        no_ready_check: false,
        enable_offline_queue: true
      }
    },*/

    /*postgresql: {
      adapter: 'sails-postgresql',
      database: 'iGlucoSails',
      host: 'localhost',
      user: 'root',
      password: 'root',
      port: 5432,
      pool: false,
      ssl: false
    },*/

    /*memory: {
      adapter: 'sails-memory'
    },*/

    /*disk: {
      adapter: 'sails-disk'
    }*/
  }
};
