#!/usr/bin/env node

const { readFileSync } = require('fs')
// console.log(readFileSync)

const file = process.argv[2]

if (file) {
  try {
    const data = readFileSync(file, "");
    // process.stdout.write(data.toString())
    console.log("data", data.toString())
  } catch(e){
    console.log('Error', e.stack)

  }
} else {
  process.exit()
}
