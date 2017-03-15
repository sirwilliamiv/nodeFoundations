const { assert: {deepEqual,oneOf, isString,isFunction} } = require('chai');
const add = require('../lib/add.js')


describe('add',()=> {
 it('should be a function', ()=> {
  isFunction(add)
 })
})
