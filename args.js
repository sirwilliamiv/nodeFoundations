#!/usr/bin/env node


let [, , ...num] = process.argv;


let addNumbers = (num) => {

  let newNum = num.map((x) => parseInt(x))

  if (!num.length) {
    console.log(0)
  }
  if (num.length > 1) {

    var sum = newNum.reduce((a, b) => a + b);

    console.log("sum", sum)

  }
};

addNumbers(num)
