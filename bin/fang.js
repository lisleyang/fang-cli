#!/usr/bin/env node

/**
 * fang init -t typescript -b gulp myproject
 * ie-old ： gulp + requirejs + typescript
 * solution2 ： webpack + typescript
 */

 /**
  * console.log(process.argv)
  * fang  => [ '/usr/local/bin/node', '/usr/local/bin/fang' ]
  * fang -x a   =>  [ '/usr/local/bin/node', '/usr/local/bin/fang', '-x', 'a' ]
  */
 
const download = require('download-git-repo')


let argv = require('minimist')(process.argv.slice(2));

console.log(argv)

if(argv.t === 'typescript'){
    download('github:lisleyang/fangcli_ts','test/tmp',err=>{
        console.log(err?'Error':'Success');
    })
}
