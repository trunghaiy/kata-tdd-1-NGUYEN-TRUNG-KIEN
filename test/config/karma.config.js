module.exports = function ( karma ) {
  karma.set({
    basePath: '../../',
    files: [
      'src/*.js',
      'test/unit/*.js'
    ],
    exclude: [
    ],
    frameworks: [ 'jasmine' ],
    plugins: [ 'karma-jasmine', 'karma-firefox-launcher' ],
    reporters: 'dots',
    port: 9018,
    runnerPort: 9100,
    urlRoot: '/',
    autoWatch: false,
    browsers: [
      'Firefox'
    ]
  });
};

