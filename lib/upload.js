'use strict';
const option = require('../config/config.default');
const { getRandomNum } = require('../utils');
const qiniu = require('qiniu');
class Qiniu {
  constructor(option) {
    this.option = option;
    this.mac = new qiniu.auth.digest.Mac(option.ak, option.sk);
    this.config = new qiniu.conf.Config();
    this.config.zone = qiniu.zone[option.zone];
  }
  async upload(path = '', realname = '') {
    // TODO: Config the https domain
    const options = {
      // scope: `${option.bucket}:${keyToOverwrite}`,
      scope: `${this.option.bucket}`,
      expires: 24 * 60 * 60,
    };
    const putPolicy = new qiniu.rs.PutPolicy(options);
    const uploadToken = putPolicy.uploadToken(this.mac);
    const formUploader = new qiniu.form_up.FormUploader(this.config);
    const putExtra = new qiniu.form_up.PutExtra();
    const localFile = path;
    const extname = realname.split('.')[realname.split('.').length - 1];
    const key = getRandomNum(2, 18) + '.' + extname;
    return new Promise((resolved, reject) => {
      formUploader.putFile(uploadToken, key, localFile, putExtra,
        function(respErr, respBody, respInfo) {
          if (respErr) {
            reject(respErr);
          }
          if (respInfo.statusCode === 200) {
            resolved(respBody);
          } else {
            resolved(respBody);
          }
        });
      // 拼接出真实的访问链接并返回
    }).then(res => {
      return {
        url: this.option.baseUrl + encodeURI(res.key),
        key: res.key,
      };
    });
  }
  async info(key) {
    const bucketManager = new qiniu.rs.BucketManager(this.mac, this.config);
    return new Promise((resolved, reject) => {
      bucketManager.stat(this.option.bucket, key, function(err, respBody, respInfo) {
        if (err) {
          reject(err);
        } else {
          if (respInfo.statusCode === 200) {
            resolved(respBody);
          } else {
            // throw respInfo.statusCode
            resolved(respBody);
          }
        }
      });
    });
  }
}
module.exports = Qiniu;
