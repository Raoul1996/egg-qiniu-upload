'use strict';
const Qiniu = require('./lib/upload');
module.exports = app => {
  const qiniu = new Qiniu(app.config.qiniu);
  app.qiniu = {
    async upload(path, realname) {
      return await qiniu.upload(path, realname);
    },
    async info(key) {
      return await qiniu.info(key);
    },
  };
};
