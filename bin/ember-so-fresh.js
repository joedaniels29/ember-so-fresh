#!/usr/bin/env node
var program = require('commander');
var freshen = require('ember-so-fresh').freshen;

function merge_options(obj1, obj2) {
    var obj3 = {};
    for (var attrname in obj1) {
        obj3[attrname] = obj1[attrname];
    }
    for (var attrname in obj2) {
        obj3[attrname] = obj2[attrname];
    }
    return obj3;
}

program
    .command('freshen')
    // .arguments('<file>')
    // .option('-u, --username <username>', 'The user to authenticate as')
    // .option('-p, --password <password>', 'The user\'s password')
    .action()
    .parse(process.argv);
program.parse(process.argv);
