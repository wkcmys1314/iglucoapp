"use strict";

/**
 * 403 (Forbidden) Response
 *
 * The request was a legal request, but the server is refusing to respond to it.
 * Unlike a 401 Unauthorized response, authenticating will make no difference.
 * Error code for user not authorized to perform the operation or the resource is unavailable for some reason.
 */

const _ = require('lodash');

module.exports = function (data, config) {
  const response = _.assign({
    code: _.get(config, 'code', 'E_Not_Acceptable'),
    message: _.get(config, 'message', '请求的格式不对'),
    data: data || {}
  }, _.get(config, 'root', {}));

  this.res.status(406);
  this.res.jsonx(response);
};
