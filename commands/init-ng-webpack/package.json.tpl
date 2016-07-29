{
  "name": "NAME",
  "version": "0.0.1",
  "description": "ng 1.x es6 webpack app",
  "scripts": {
    "build": "rimraf dist && webpack --bail --progress --profile",
    "server": "webpack-dev-server --history-api-fallback --inline --progress",
    "test": "karma start",
    "test-watch": "karma start --auto-watch --no-single-run",
    "e2e": "protractor",
    "start": "npm run server"
  },
  "author": "Nik Frank (or whomever)",
  "license": "UNLICENSED",
  "dependencies": {
    "angular": "^1.5.5"
  },
  "devDependencies": {
    "angular-mocks": "^1.5.0",
    "autoprefixer": "^6.0.3",
    "babel-core": "^6.2.1",
    "babel-loader": "^6.2.0",
    "babel-preset-es2015": "^6.1.18",
    "copy-webpack-plugin": "^1.1.1",
    "css-loader": "^0.23.0",
    "extract-text-webpack-plugin": "^1.0.1",
    "file-loader": "^0.8.4",
    "html-webpack-plugin": "^2.7.1",
    "isparta-loader": "^1.0.0",
    "jasmine-core": "^2.3.4",
    "karma": "^0.13.14",
    "karma-chrome-launcher": "^1.0.1",
    "karma-coverage": "^0.5.3",
    "karma-jasmine": "^0.3.6",
    "karma-sourcemap-loader": "^0.3.7",
    "karma-spec-reporter": "0.0.26",
    "karma-webpack": "^1.7.0",
    "ko-ng-webpack": "latest",
    "node-libs-browser": "^1.0.0",
    "node-sass": "^3.8.0",
    "null-loader": "^0.1.1",
    "postcss-loader": "^0.8.0",
    "raw-loader": "^0.5.1",
    "rimraf": "^2.5.1",
    "sass-loader": "^4.0.0",
    "style-loader": "^0.13.0",
    "webpack": "^1.12.13",
    "webpack-dev-server": "^1.14.1"
  }
}