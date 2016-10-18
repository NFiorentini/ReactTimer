/*
karma.conf.js specifies how we want to run our tests.
*/

const webpackConfig        = require('./webpack.config.js');

module.exports = function (config) {
  
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    files: [
      'node_modules/jquery/dist/jquery.min.js',
    'node_modules/foundation-sites/dist/foundation.min.js',
      'app/tests/**/*.test.jsx'
    ],
    preprocessors: {
      'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
    },
    reporters: ['mocha'],

    /*
    client allows us to send details down to the
    individual frameworks. Here, we tell mocha that
    we want to wait 5 second before test timeout.
    */
    client: {
      mocha: {
        timeout: '5000'
      }
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }
  });
};
