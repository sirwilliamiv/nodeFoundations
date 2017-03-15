
const { assert: {deepEqual,oneOf,isFunction} } = require('chai');
const parse = require('../lib/parse-args.js')

describe('parse-args', ()=> {
  describe('countArgs', ()=> {
    it('should be a function',()=>{
      isFunction(parse, 'should fail')
    })
    it('should return an object', ()=> {
      oneOf(parse(),[0,1,2,3])
    })
    it('should return an object', ()=> {
      deepEqual(parse(),{command: 1})
    })

  })
})
