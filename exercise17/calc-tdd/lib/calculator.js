const add = require('./add.js')
const multiply = require('./multiply.js')
const subtract = require('./subtract.js')
const divide = require('./divide.js')
  //methods
  //

const pickOperator = (operator) => {
  switch (operator) {
    case `+`:
      return add;

    case `-`:
      return subtract;
    case `*`:
      return multiply;
    case `x`:
      return multiply;

    case `/`:
      return divide;
    default:
      console.log('Sorry, please enter a valid math operator')
  }
};
const calculator = ({ num1, num2, operator }) => {
  let actionOperator = pickOperator(operator)
    //based on operator
  return actionOperator(num1,num2)
    // "add"(num1,num2);
    //perform this returns method
}

module.exports =  calculator;
