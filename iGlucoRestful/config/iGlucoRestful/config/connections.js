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
    /**
     * MongoDB configuration
     * @type {Object}
     */
    /*mongo: {
      adapter: 'sails-mongo',
      host: 'localhost',
      port: 27017,
      user: 'root',
      password: 'root',
      database: 'iGlucoSails'
    },*/

    /**
     * Redis configuration
     * @type {Object}
     */
    /*redis: {
      adapter: 'sails-redis',
      port: 6379,
      host: 'localhost'
    },*/
    
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

    /**
     * PostgreSQL configuration
     * @type {Object}
     */
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

    /**
     * MySQL configuration
     * @type {Object}
     */
    /*mysql_local: {
      adapter: 'sails-mysql',
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: 'root',
      database: 'iGlucoSails',
      charset: 'utf8',
      collation: 'utf8_general_ci'
    },*/

    mysql_china_test: {
      adapter: 'sails-mysql',
      host: '101.251.102.37',
      port: 45728,
      user: 'root',
      password: 'ihealth@jiuan',
      database: 'AndonCloud_New',
      charset: 'utf8',
      collation: 'utf8_general_ci'
    },

    mysql_china_pro: {
      adapter: 'sails-mysql',
      host: '101.251.102.37',
      port: 45728,
      user: 'root',
      password: 'ihealth@jiuan',
      database: 'AndonCloud_New',
      charset: 'utf8',
      collation: 'utf8_general_ci'
    },

    /**
     * Microsoft SQL Server configuration
     * @type {Object}
     */
    sqlserver_us_pro: {
      adapter: 'sails-sqlserver',
      user: 'liuwen_reader',
      password: 'UcQ7QIwyE',
      host: '54.215.10.198',
      database: 'AndonCloud',
      options: {
        encrypt: false
      }
    }

    /**
     * OrientDB configuration
     * @type {Object}
     */
    /*orientdb: {
      adapter: 'sails-orientdb',
      host: 'localhost',
      port: 2424,
      user: 'root',
      password: 'root',
      database: 'iGlucoSails',
      options: {
        databaseType: 'graph',
        storage: 'plocal',
        transport: 'binary',
        decodeURIComponent: true,
        removeCircularReferences: false,
        unsafeDrop: false,
        parameterized: true,
        fetchPlanLevel: 1
      }
    },*/

    /**
     * DynamoDB configuration
     * @type {Object}
     */
    /*dynamodb: {
      adapter: 'sails-dynamodb',
      accessKeyId: '',
      secretAccessKey: '',
      region: 'us-west-1'
    },*/

    /**
     * FileMaker configuration
     * @type {Object}
     */
    /*filemaker: {
      adapter: 'sails-filemaker',
      host: 'localhost',
      database: 'iGlucoSails',
      userName: 'root',
      password: 'root'
    },*/

    /**
     * Memory configuration
     * ONLY FOR DEVELOPMENT
     * @type {Object}
     */
    /*memory: {
      adapter: 'sails-memory'
    },*/

    /**
     * Disk configuration
     * ONLY FOR DEVELOPMENT
     * @type {Object}
     */
    /*disk: {
      adapter: 'sails-disk'
    }*/
  }
};
