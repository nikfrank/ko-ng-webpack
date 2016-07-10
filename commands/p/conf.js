'use strict';

let utils = require('ko-gen');

module.exports = {
  name:'p',
  files:[
    'p.js.tpl',
    'p.spec.js.tpl',
    'p.html.tpl',
    'p.css.tpl',
    'name.js.tpl'
  ],
  vars:[
    'PLACE',
    'NAME',
    'PATH'
  ],
  varDefaults:[
    (args, cons)=>{
      let ret = args[1] || 'app';
      let Dpath = cons.p.defaultPath.split('/');
      return utils.lazyPrefix(ret, Dpath);
    },
    (args)=>(args[1].slice(1+args[1].lastIndexOf('/'))),
    (args, cons)=>{
      if(args[1].indexOf(cons.p.servedFrom) === 0)
        return args[1].slice(cons.p.servedFrom.length);
      else return args[1];
    }
  ]
};
