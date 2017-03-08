#!/usr/bin/env node

const chalk = require('chalk')

let star = chalk.white('*');
let space = ' ';
// let starRow = [2];
// let six = "*"]
// let flag = []
// flag.length = 13
// for(var i =0; i < 13; i++) {
//   for(var k = 0; k < 50; k++) {
//     if(k < 15){
//      let stars = star + space
//      starRow = chalk.bgBlue(`${stars}`)
//      console.log(starRow)
//     }

//   }

// }
// if spaces = 50 add /n

let starRow = Array(50).join(' ')
// .join
let [a] = starRow
let [,,,,,,restOfRow] = starRow
console.log("a",chalk.bgRed(a))
let bingo = chalk.bgBlue(restOfRow)
let redStripe = chalk.bgRed( chalk.bgBlue(`${a}${star}${a}${star}${a}${star}`) +`${restOfRow}`)
let whiteStripe = chalk.bgWhite( chalk.bgBlue(`${a}${star}${a}${star}${a}${star}`) +`${restOfRow}`)

console.log(bingo)
console.log(redStripe)
console.log(whiteStripe)

// console.log(redStripe)
// console.log(whiteStripe)
// console.log(six)

//50 characters wide
//13 rows
//
//7 rows
  //46 stars
  //7 (15 spaces) then  35 red spaces
  //6 (15 spaces) then 35 white spaces
// 6 rows 50 spaces each white/ red
