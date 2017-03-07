#!/usr/bin/env node
var angmodule = require('../lib/index'),
    program = require('commander');

program
    .description('Module nodejs to help create directories, controllers and views for applications Angular 1.x')
    .option('-n, --name <name>', 'Module name (separate words with "-")')
    .parse(process.argv);

angmodule(program.name);