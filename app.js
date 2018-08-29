console.log('Starting app.js');

const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = process.argv[2];

console.log('Yargs', argv);

if (command === 'add') {
    notes.addOneNote(argv.title, argv.body);
} else if (command === 'list') {
    notes.getAllNotes();
} else if (command === 'read') {
    notes.getOneNote(argv.title);
} else if(command === 'remove') {
    notes.removeOneNote(argv.title);
} else {
    console.log('Command not recognized');
}
