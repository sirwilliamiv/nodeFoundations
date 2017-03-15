const { assert: {deepEqual,oneOf, isString,isFunction} } = require('chai');
const action = require('../lib/action.js')

describe('action', ()=> {
  describe('action function', ()=> {
    it('should be a function',()=>{
      isFunction(action,'is a function')
    })
    // it('should return a string', ()=> {
    //   isString(action(),"hey")
    // })
  })
})
