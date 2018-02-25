'use strict';
const mount = require('./lib/upload');
module.exports = agent => {
  if (agent.config.qiniu.agent) mount(agent);
};
