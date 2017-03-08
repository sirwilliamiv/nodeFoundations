#!/usr/bin/env node

const { readFile } = require('fs')
const file = process.argv[2]


if (file) {
  readFile(file, (err, data) => {
    // if (err) return console.error(err)
    if(err) throw err  //most commonly used in docs / throw stops js execution
    process.stdout.write(data)
  })
} else {
  process.exit()
}
