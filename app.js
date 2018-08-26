console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

var filteredArray = _.uniq(['Raafay', 1, 'Raafay', 1, 2, 3, 4]);
console.log(filteredArray);