console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    // notes.filter((note) => {
    //      return note.title ===title
    // });

    var duplicateNotes = notes.filter((note) =>  note.title === title);

    if (duplicateNotes.length == 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll1 = () => {
    return fetchNotes();
};

var getNote = (title) => {
    var notes = fetchNotes();
    var note = notes.filter((note) => note.title === title);
    return note[0];
};

var removeNote = (title) => {
    var notes = fetchNotes();
    var finalNotes = notes.filter((note) => note.title !== title);
    saveNotes(finalNotes);

    return notes.length !== finalNotes.length;
};

var logNote = (note) => {
    debugger
    console.log(`Here is your Note with title: ${note.title}`);
    console.log('---');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

module.exports = {
    addOneNote:addNote,
    getAllNotes:getAll1,
    getOneNote:getNote,
    removeOneNote:removeNote,
    logNote:logNote
};