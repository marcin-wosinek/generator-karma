// Karma configuration

// base path, that will be used to resolve files and exclude
basePath = '';

// list of files / patterns to load in the browser
files = [
  <%= testFramework.toUpperCase() %>,
  <%= testFramework.toUpperCase() %>_ADAPTER,
  'app/bower_components/jasmine-matchers/dist/jasmine-matchers.js',
  'app/bower_components/angular/angular.js',
  'app/bower_components/angular-resource/angular-resource.js',
  'app/bower_components/angular-mocks/angular-mocks.js',
  'app/bower_components/underscore/underscore.js',
  'app/bower_components/jasmine-sinon/lib/sinon-1.4.2/sinon-1.4.2.js',
  'app/bower_components/jasmine-sinon/lib/jasmine-sinon.js',

  'app/scripts/*.<%= format %>',
  'app/scripts/**/*.<%= format %>',
  'test/mock/**/*.<%= format %>',
  'test/spec/**/*.<%= format %>'
];

//initiate istanbul code coverage report
preprocessors = {
  '**/scripts/**/*.js': 'coverage'
};

// list of files to exclude
exclude = [];

// test results reporter to use
// possible values: dots || progress || growl
reporters = ['progress','coverage'];

//coverage reporter type
coverageReporter = {
  type : 'html',
  dir : 'coverage/'
}

// web server port
port = 8080;

// cli runner port
runnerPort = 9100;

// enable / disable colors in the output (reporters and logs)
colors = true;

// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;

// enable / disable watching file and executing tests whenever any file changes
autoWatch = false;

// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['PhantomJS'];

// If browser does not capture in given timeout [ms], kill it
captureTimeout = 5000;

// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;
