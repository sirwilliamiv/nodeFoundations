const { argv: [,, ...commands] } = process;
const comObj = require('./parse-args')(commands);
const  action = require('./action.js')

console.log(action(comObj))

// [name, address, zipcode, phonenumber] =  result
// module.exports=
