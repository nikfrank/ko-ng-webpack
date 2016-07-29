'use strict';

let utils = require('ko-gen');

module.exports = {
  name:'init',
  files:[
    '.babelrc',
    'karma.conf.js',
    '.ko-rc.json.tpl',
    'protractor.conf.js',
    'webpack.config.js',
    'src/name.js.tpl',
    'src/p.e2e.js',
    'src/p.js.tpl',
    'src/tests.webpack.js',
    'src/public/index.html.tpl',
    'src/public/img/favicon.ico'
  ],
  vars:[
    'NAME'
  ],
  argRewrites:[],
  fileRewrites:[],
  postScript:'ko p app'
}
