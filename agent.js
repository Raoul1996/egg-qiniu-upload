'use strict';
const Qiniu = require('./lib/upload');
module.exports = agent => {
  const qiniu = new Qiniu(agent.config.qiniu);
  agent.qiniu = {
    async upload(path, realname) {
      return await qiniu.upload(path, realname);
    },
    async info(key) {
      return await qiniu.info(key);
    },
  };
};
