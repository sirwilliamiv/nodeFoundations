
// const something = require('./add.js');

const { argv: [,, ...args] } = process;
const argls = require('./parse-args')(args);
const  calculator = require('./calculator.js')

console.log(calculator(argls))
