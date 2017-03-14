const { assert: {equal,isNumber,isAbove} } = require('chai');
const add = require('../lib/add.js')

describe('add', ()=>{
  it('should return a number', ()=> {
    isNumber(add())
  });
  it('should not equal input values', ()=> {
    equal(2+3,add())

  });
  it('should be greater than each number', ()=> {
    isAbove(add(),2)
    isAbove(add(),3)
  });
  it('should not be a negative number', ()=> {
    isAbove(add(), 0);
  });
})
