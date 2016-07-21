'use strict';

let utils = require('ko-gen');

module.exports = {
  name:'s',
  files:[
    'name.js.tpl',
    's.js.tpl',
    's.spec.js.tpl',
    's.mock.js.tpl'
  ],
  vars:[
    'PLACE',
    'NAME'
  ],
  varDefaults:[
    // if a name has anything other than \w or -, FUCK YOU!
    (args, cons)=> utils.lazyPrefix(args[1], cons.s.defaultPath.split('/'))
			.replace(/\/([\w\-]+)$/, m=>'/services'+m),
    
    args=> args[1].slice(1+args[1].lastIndexOf('/'))
  ]
}
