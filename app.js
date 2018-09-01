console.log('Starting app.js');

const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = process.argv[2];

console.log('Yargs', argv);

if (command === 'add') {
    var note = notes.addOneNote(argv.title, argv.body);
    if (typeof note !== 'undefined') {
        notes.logNote(note);
    } else {
        console.log('Note title is already used.');
    }
} else if (command === 'list') {
    var allNotes = notes.getAllNotes();
    console.log(`Printing ${allNotes.length} notes(s).`);
    allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
    var note = notes.getOneNote(argv.title);
    console.log(note);
    if (note) {
        notes.logNote(note);
    } else {
        console.log('Note not found');
    }
} else if(command === 'remove') {
    var isRemoved = notes.removeOneNote(argv.title);
    var message = isRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
} else {
    console.log('Command not recognized');
}
