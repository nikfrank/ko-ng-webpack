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
  ],

  seds:[
    // need here a filepath, a regex, and a replace fn
    // need to take args and cons only.
    (args, cons)=> ({
      filepath:'../p.js',
      match: /CHILDREN_IMPORT_HOOK[\n]/,
      replace: 'CHILDREN_IMPORT_HOOK\n'+'import '+args[2]+' from \'./'+args[2]+'/p\';\n'
    }),

    (args, cons)=> ({
      filepath:'../p.js',
      match: /CHILDREN_DEP_HOOK[\n]/,
      replace: 'CHILDREN_DEP_HOOK\n  '+args[2]+','
    })
  ]
};
