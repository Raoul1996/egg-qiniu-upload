# egg-qiniu-upload

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-qiniu-upload.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-qiniu-upload
[travis-image]: https://img.shields.io/travis/eggjs/egg-qiniu-upload.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-qiniu-upload
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-qiniu-upload.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-qiniu-upload?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-qiniu-upload.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-qiniu-upload
[snyk-image]: https://snyk.io/test/npm/egg-qiniu-upload/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-qiniu-upload
[download-image]: https://img.shields.io/npm/dm/egg-qiniu-upload.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-qiniu-upload

<!--
Description here.
-->

## Install

```bash
$ npm i egg-qiniu-upload --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.qiniu = {
  enable: true,
  package: 'egg-qiniu-upload',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.qiniu = {
  // I ussually set the key into `~/.zshrc`, and I can get the value via `process.env.key`, It's very safe~
  ak: 'your access key',
  sk: 'your secret key',
  bucket: 'yout bucket',
  baseUrl: 'your base url',
  zone: 'your zone',
};
```

see [config/config.default.js](config/config.default.js) for more detail, and more detail about qiniu please [see the document](https://developer.qiniu.com/kodo/sdk/1289/nodejs)

## Example

### upload file to qiniu and return the url and key

```js
// {app_root}/app/service/file.js
async upload2Qiniu(path,realname) {
  const {app} = this

  // do someting what you want to do........

  return await app.qiniu.upload(path, realname)
}
/* return a Objet:
{key:'your key',url:'your public url'}
*/
```
### get the file info by your file's key

```js
// {app_root}/app/servcie/file.js
async info(key) {
  // your should auth the user's passport.
  return await this.app.qiniu.info(key);
}
```
### more function ...

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
