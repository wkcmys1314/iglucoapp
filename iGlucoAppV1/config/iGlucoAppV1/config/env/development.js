"use strict";

/**
 * Development environment settings
 * @description :: This section overrides all other config values ONLY in development environment
 */

module.exports = {
  port: 3014,
  log: {
    level: 'verbose'
  },
  models: {
    // connection: 'disk'
    connection: 'mysql_china_test'
  }
};
