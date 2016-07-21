'use strict';

let utils = require('ko-gen');

module.exports = {
  name:'p',
  files:[
    'p.js.tpl',
    'p.spec.js.tpl',
    'p.e2e.js.tpl',
    'p.html.tpl',
    'p.css.tpl',
    'name.js.tpl'
  ],
  
  vars:[
    'PLACE',
    'NAME'
  ],

  // argRewrites
  varDefaults:[  
    (args, cons)=> utils.lazyPrefix(args[1]|| 'app', cons.p.defaultPath.split('/')),
    
    args=> args[1].slice(1+args[1].lastIndexOf('/'))
  ]
};
