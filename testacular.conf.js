


basePath = '';              // base path, that will be used to resolve files and exclude
files    = [                // list of files / patterns to load in the browser
  JASMINE,
  JASMINE_ADAPTER,

  // libraries
  'vendor/jquery.js',
  'vendor/angular.js',
  'vendor-dev/angular.mocks.js',

  // our app
  'app/scripts/app.js',

  // tests
  'test/*.js',
];
exclude    = [              // list of files to exclude

];
reporter   = 'dots';        // possible values: dots || progress
port       = 9876;
runnerPort = 9100;
colors     = true;
logLevel   = LOG_INFO;      // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
autoWatch  = true;          // enable / disable watching file and executing tests whenever any file changes



//  Start these browsers, currently available:
//  Chrome || ChromeCanary || Firefox || Opera || Safari || PhantomJS
//
browsers  = ['Chrome'];



//  Continuous Integration mode
//  if true, it captures browsers, run tests and exit
//
singleRun = false;
