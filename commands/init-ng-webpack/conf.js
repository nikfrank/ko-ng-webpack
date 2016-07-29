'use strict';

let utils = require('ko-gen');

module.exports = {
  name:'init-ng-webpack',
  dirs:[
    'src/public/img'
  ],
  files:[
    '.babelrc.tpl',
    'karma.conf.js.tpl',
    '.ko-rc.json.tpl',
    'protractor.conf.js.tpl',
    'package.json.tpl',
    'webpack.config.js.tpl',
    'src/name.js.tpl',
    'src/p.e2e.js.tpl',
    'src/p.js.tpl',
    'src/tests.webpack.js.tpl',
    'src/public/index.html.tpl',
    'src/public/img/favicon.ico.tpl'
  ],
  vars:[
    'PLACE',
    'NAME'
  ],
  argRewrites:[
    (args)=> {
      args[2] = args[1] || 'appsipoo';
      return '';
    }
  ],
  fileRewrites:[],
  postScript:'ko p app &&'+
             'sed -i \'2s/.*/  ko-ng-webpack is finished his handiwork/\' ./src/app/p.html'
}
