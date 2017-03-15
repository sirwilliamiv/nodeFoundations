const add = require('./add.js')
const remove = require('./remove.js')
const delivered = require('./delivered.js')
const list = require('./list.js')

const action = (comObj) => {
  console.log('comobj', comObj)
  const { command, name, two, three } = comObj;
//filter by command
  switch (command) {
    case `ls`:
      return list(name);
    case `delivered`:
      return delivered(name)
    case `add`:
      return add(two, three)
    case `remove`:
      return remove(two, three)
  }
}




// if add name = [2] parameter
// else name = [1]
module.exports = action
