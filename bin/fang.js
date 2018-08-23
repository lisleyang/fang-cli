#!/usr/bin/env node

//这个文件作用是在用户命令行输入fang的时候给出提示，让用户调用其他命令（fang init） 其他什么都不干

//commander会根据`.command`方法在--help中生成command的list，根据.usage方法生成usage，根据.options生成Options
//方法里第二个参数是这些方法的说明，--help里会用到
// Usage: fang <command> [options]

//   Options:

//     -V, --version    output the version number
//     -r, --recursive  Remove recursively
//     -h, --help       output usage information

//   Commands:

//     init             generate a new project from a template
//     list             list available official templates
//     build            prototype a new project
//     help [cmd]       display help for [cmd]
require('commander')
  .version(require('../package').version)
  .usage('<command> [options]') 
  .command('init', 'generate a new project from a template')
  .command('list', 'list available official templates')
  .command('build', 'prototype a new project')
  .parse(process.argv)