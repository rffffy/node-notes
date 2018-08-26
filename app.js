console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var res = notes.add(1,4);
console.log('Result: ', res);
// var user = os.userInfo();
//
// fs.appendFile('greetings.txt', `Hello ${user.username}!`, function (err) {
//     if (err) {
//         console.log('Unable to write to file.');
//     }
// });