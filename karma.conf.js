var webpackConfig = require('./webpack.config.js')

var configuration = {
  browsers: ['Chrome'],
  singleRun: true,
  frameworks: ['mocha'],
  files: [
    'node_modules/jquery/dist/jquery.min.js',
    'src/tests/**/*.test.js'
  ],
  preprocessors: {
    'src/tests/**/*.test.js': ['webpack', 'sourcemap']
  },
  reporters: ['mocha'],
  client: {
    mocha: {
      timeout: '5000'
    }
  },
  webpack: webpackConfig,
  webpackServer: {
    noInfo: true
  }
}

if (process.env.TRAVIS) {
  configuration.browsers = ['Chrome_travis.ci']
}

module.exports = function (config) {
  config.set(configuration)
}
