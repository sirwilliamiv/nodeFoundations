#!/usr/bin/env node


// $ node cheer.js
// Give me a J!
// Give me an O!
// Give me an H!
// Give me an N!
// Give me a D!
// Give me an O!
// Give me an E!
// What does that spell?
// JOHN DOE!
// Note: the 'a' vs. 'an'

// Bonus

// Delay each line by 1 second

const NAME = ["John", "Doe"]
let [first, last] = NAME
let [f] = first
let [l] = last
let [, ...restOfFirst] = first
let [, ...restOfLast] = last
let cheer = ["Give me a", "Give me an", "What does that spell?", "!"]
let[a,b,c,d] = cheer

const Cheer = () => {
console.log("Give me a", f)
for (let letter of restOfFirst) {

  console.log(a, letter )
}
console.log(a, l)

for (let letter of restOfLast) {

  console.log(b, letter )
}

console.log(c)
console.log(NAME + d)

}

Cheer()

// const Cheer = () => {
//     // console.log("Give me a", f)

//     for (let i = 0; i < NAME.length; i++) {
//       for (let [letter, index] of NAME[i]) {
//         if (index > 0) {

//        setTimeout(()=>{
//         console.log(b, letter)
//       }, 1000)

//         } else {
//           setTimeout(()=>{
//               console.log(a, letter)
//           },1000)

//         }

//       }

//     }
//       setTimeout(()=>{ console.log(c) },1000)
//       setTimeout(()=>{console.log(NAME + d)},1000)
// }

//     setTimeout(Cheer(), 1000)





// setTimeout(CALL THE FUNCTION, 1000)
