#!/usr/bin/env node
var angmodule = require('../lib/index'),
    program = require('commander');

program
    .description('Module nodejs to help create directories, controllers and views for applications Angular 1.x')
    .option('--folder <folder>', 'Module name (separate words with "-")')
    .option('--controller <controller>', 'Controller name')
    .option('--view <view>', 'View name')
    .parse(process.argv);

angmodule(program);