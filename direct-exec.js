#!/usr/bin/env node

let [,,...printThis] = process.argv
process.stdout.write(`${printThis.toString()}\n`)
