'use strict';
const qiniuUpload = require('../config/config.default');
const {getRandomNum} = require('../utils');
const qiniu = require('qiniu');
const mac = new qiniu.auth.digest.Mac(qiniuUpload.ak, qiniuUpload.sk);
const options = {
  // scope: `${qiniuUpload.bucket}:${keyToOverwrite}`,
  scope: `${qiniuUpload.bucket}`,
  expires: 24 * 60 * 60,
};
const putPolicy = new qiniu.rs.PutPolicy(options);
const uploadToken = putPolicy.uploadToken(mac);
const config = new qiniu.conf.Config();
config.zone = qiniu.zone[qiniuUpload.zone];
const formUploader = new qiniu.form_up.FormUploader(config);
const putExtra = new qiniu.form_up.PutExtra();
const bucketManager = new qiniu.rs.BucketManager(mac, config);
class Qiniu {
  async upload(path = '', realname = '') {
    // TODO: Config the https domain
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
        url: qiniuUpload.baseUrl + encodeURI(res.key),
        key: res.key,
      };
    });
  }
  async info(key) {
    return new Promise((resolved, reject) => {
      bucketManager.stat(qiniuUpload.bucket, key, function(err, respBody, respInfo) {
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
