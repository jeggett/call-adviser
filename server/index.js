/* eslint consistent-return:0 */

const express = require('express');
const logger = require('./logger');
const ngrok = require('ngrok');

const morgan = require('morgan');

const frontend = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';

const apiVersion1 = require('./api1.js');

const app = express();

if (isDev) {
  app.use(morgan('combined'));
}

app.use('/apiv1', apiVersion1);

// Initialize frontend middleware that will serve your JS app
const webpackConfig = isDev
  ? require('../internals/webpack/webpack.dev.babel')
  : require('../internals/webpack/webpack.prod.babel');

app.use(frontend(webpackConfig));

const port = process.env.PORT || 3000;

// Start your app.
app.listen(port, (err) => {
  if (err) {
    return logger.error(err);
  }

  // Connect to ngrok in dev mode
  if (isDev) {
    ngrok.connect(port, (innerErr, url) => {
      if (innerErr) {
        return logger.error(innerErr);
      }

      logger.appStarted(port, url);
    });
  } else {
    logger.appStarted(port);
  }
});
