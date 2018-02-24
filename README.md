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
exports.qiniuUpload = {
  enable: true,
  package: 'egg-qiniu-upload',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.qiniuUpload = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
