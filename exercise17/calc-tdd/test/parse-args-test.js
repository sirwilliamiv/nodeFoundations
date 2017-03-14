const { assert: {equal,isNumber,isAbove,oneOf} } = require('chai');
const calculator = require('../lib/parse-args.js')

describe('calculator', ()=> {
  it('should be an operator', ()=>{
    oneOf(calculator(1,"-",4),["*","/","+","-"])
  })


})
