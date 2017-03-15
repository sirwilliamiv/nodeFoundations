const countArgs = (commands) => {
  let args = commands.length

  // how many parameters
  switch (args) {
    case 0:
      return console.log('please enter a  command')
    case 1:
      return { command: commands[0] }
    case 2:
      return { command: commands[0], name: commands[1] }
    case 3:
      return {
        command: commands[0],
        two: commands[1],
        three: commands[2]
      }
  }
};

module.exports = countArgs
