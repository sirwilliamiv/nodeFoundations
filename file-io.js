#!/usr/bin/env node

//blocking example
// const { readFileSync } = require('fs')

// console.log(readFileSync)

// const fileArg = process.argv[2]

// if (fileArg) {
//   try {
//     const data = readFileSync(fileArg, "");
//     // process.stdout.write(data)
//     console.log("data", data.toString())
//   } catch(e){
//     console.log('Error', e.stack)

//   }
// } else {
//   process.exit()
// }

// console.log("This is the synchronous version")

//non-blocking example *********************
const { readFile } = require('fs')
const fileArg = process.argv[2]


if (fileArg) {
  readFile(fileArg, (err, data) => {
    if (err) return console.error(err)
    process.stdout.write(data)
  })
} else {
  process.exit()
}

console.log("This is the async verion")
