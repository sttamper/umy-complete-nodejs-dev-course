const validator = require('validator')
const { name, add } = require('./utils.js');
const getNotes = require('./notes.js');

const sum = add(5, 10);
console.log(name);
console.log(sum);
console.log(getNotes());
console.log(validator.isEmail('test@example.com'));
