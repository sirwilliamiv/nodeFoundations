const { assert: {equal,oneOf,isNumber, isBelow} } = require('chai');
const subtract = require('../lib/subtract.js')

describe('subtract', ()=> {
  it('should return a number', ()=> {
    isNumber(subtract());
  });
  // it('should be less than the highest number',()=>{
  //   isBelow(subtract(),2)
  // });
  // it('should equal 1', ()=> {
  //   equal(2-1, subtract())
  // });
  // it('should return same number if one arg', ()=> {
  //   oneOf(add(),[2])
  // })
  //one argument
  //no arguments
  //break it
  //strings
  //more than two arguments
  //

});
