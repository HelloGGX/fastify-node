const build = require('../../src/app');

let app;

describe('Root route', () => {
  beforeEach(() => {
    app = build();
  });

  afterEach(() => {
    app.close();
  });
});
