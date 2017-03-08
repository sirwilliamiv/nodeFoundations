#!/usr/bin/env node
const superb = require('superb')
// argv  returns array with 1. environment: node 2. the file we are running aka args-demo.js
// stdout - works with strings and buffers
// stderr
// stdin

let [,,...args] = process.argv
// const args = process.argv.slice(2)
// const args = process.argv.filter( (item, index) => index > 1)
// in terminal set permissions with chmod +x filenamehere
// console.log(args)
// //or
// process.stdout.write(`${args.toString()}\n`)
//   // console.log(process.stdout)
// require()


//everything is scoped to it's module
console.log("James is" , superb())
// event emitters
// creating your own events
// term may be used "userland"- all of the modules that are not part of the node core
2,3,4,5,6
