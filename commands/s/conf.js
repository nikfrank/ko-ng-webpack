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
  ],

  fileRewrites:[
    (args, cons)=> ({
      filepath:'../../p.js',
      match:/SERVICE_IMPORT_HOOK[\n]/,
      replace: 'SERVICE_IMPORT_HOOK\n'+
               'import '+utils.dash2camel(args[2])+' from \'./services/'+args[2]+'/s\';\n'
    }),

    (args, cons)=> ({
      filepath:'../../p.js',
      match:/SERVICE_DEP_HOOK[\n]/,
      replace:'SERVICE_DEP_HOOK\n  '+utils.dash2camel(args[2])+','
    }),

    (args, cons)=> ({
      filepath:'../../p.js',
      match:/[\s]constructor\(/,
      replace:' constructor('+utils.dash2camel(args[2])+', '
    }),

    (args, cons)=> ({
      filepath:'../../p.js',
      match:/SERVICE_EXPOSURE_HOOK[\n]/,
      replace:'SERVICE_EXPOSURE_HOOK\n'+
              '    this.'+utils.dash2camel(args[2])+' = '+utils.dash2camel(args[2])+';\n'
    }),
    
    (args, cons)=> ({
      filepath:'../../p.js',
      match:/, \)/,
      replace:')'
    }),

    (args, cons)=> ({
      filepath:'../../p.js',
      match:/Ctrl.\$inject = \[/,
      replace:'Ctrl.$inject = [\''+args[2]+'\', '
    })
  ]
}
