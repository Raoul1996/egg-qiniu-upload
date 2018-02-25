'use strict';
const mount = require('./lib/upload');
module.exports = app => {
  if (app.config.qiniu.app) mount(app);
};
