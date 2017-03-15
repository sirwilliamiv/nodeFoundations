const db = require('./bagloot.js')

let item;
let name;
let nameId;
const addThis = (item,name)=> {
    item = item;
    name = name;
// children
//if get returns null
db.run(`INSERT INTO children VALUES (null, "${name}", 0)`)
db.get(`SELECT nameId FROM children WHERE name = "${name}"`,(err,result)=> {
  if (err) {throw err}

   nameId = result
 console.log("nameid", nameId)
db.run(`INSERT INTO item VALUES (null, "${nameId.nameID}","${item}")`)
})
}

module.exports =  addThis



// console.log(`added ${item} to ${name}'s bag`)
//
// module.exports.functionName = ()=> things
