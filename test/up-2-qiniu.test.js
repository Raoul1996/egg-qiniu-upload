'use strict';

const mock = require('egg-mock');

describe('test/qiniu-upload.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/qiniu-upload-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, qiniuUpload')
      .expect(200);
  });
});
