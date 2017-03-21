"use strict";



const _ = require('lodash');

module.exports = function (data, config) {
  const response = _.assign({
    code: _.get(config, 'code', 'OK_OUTSIDE'),
    message: _.get(config, 'message', 'Operation is successfully executed'),
    data: data || {}
  }, _.get(config, 'root', {}));

  this.res.status(_.get(config, 'status', 200));
  this.res.jsonx(response);
};
