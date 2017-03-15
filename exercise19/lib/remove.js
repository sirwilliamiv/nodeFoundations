const db = require('./bagloot.js')

let nameId;

const removeThis = (name,item)=> {
  db.get(`SELECT nameId FROM children WHERE name = "${name}"`,(err,result)=> {
  if (err) {throw err}

   nameId = result
 console.log("nameid", nameId)
db.run(`DELETE FROM item WHERE childId = ${nameId.nameID}`)
})

}
module.exports = removeThis
