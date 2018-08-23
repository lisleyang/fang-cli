#!/usr/bin/env node

//项目初始化

/**
 * fang init -t typescript -b gulp myproject
 * ie-old ： gulp + requirejs + typescript + jquery
 * modern ： webpack + typescript +jquery/vue/react
 */
const download = require('download-git-repo')
const program = require('commander');   //parse command-line interfaces
const version = require('../package.json').version;
const chalk = require('chalk');     //color text in cli
const ora = require('ora'); //下载过程中的等待框

program.version(version,'-v, --version') //fang --version/-v
.usage('<template-name> [project-name]')   //show when `fang --help`
.option('-c, --clone','this is clone')

//写在帮助信息的最后面
program.on('--help',function(){ //fang --help
    console.log('  Examples:')
    console.log()
    console.log(chalk.gray('    # create a new project with an official template'))
    console.log('    $ vue init ie my-project')
    console.log('    $ vue init modern my-project')
    console.log()
})
program.parse(process.argv);    //把process.argv的参数放到program.args上,不过program.args捕捉不到`-c`这种参数 但是process.argv能拿到
// console.log(process.argv);
// console.log(program.args)
// console.log(program.c)   //program.c是undifined
// console.log(program.clone) //program.c是true

if(!program.args.length){   //no params => show help
    program.help()
    return;
}

let templateName = program.args[0];
let projName = program.args[1];

if(templateName == 'ie'){
    const spinner = ora('installing templates').start();
    download('github:lisleyang/fangcli_ts',projName,err=>{
        if(err) spinner.fail('download fail')
        spinner.succeed('succeed')
    })
}else if(templateName == 'modern'){

}else{
    console.log('template name error')
}
