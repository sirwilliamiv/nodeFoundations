// Create a JavaScript file to act as a Node.js program named streams.js.
// This program should read a file languages.json
// and output to a file languages_caps.json.
// Use the second command-line argument to declare the destination.
//
// You will not need to make your own
// Readable for this exercise. Simply use fs.createReadStream instead.
//
//   In between, all letters should be
// capitalized with your own Transform stream. Then the data should be passed to your own Writable stream.
//  The fs.appendFile will be helpful for this task.

// In addition, use some other method in the fs module make sure executing the program
// multiple times does not continue making a larger and larger 09.Caps.json file.




const { createReadStream, appendFile, writeFile } = require('fs')
const { Transform, Writable } = require ('stream');
console.log()


const readStream = createReadStream('languages.json')
const transformStream = Transform();
const writeStream = Writable();



transformStream._transform = (buffer, encoding, done) => {

 done(null, buffer.toString().toUpperCase())
// appendFile('languages_caps.json',file, (err) => {
//   if (err) throw err;
//   console.log('The "data to append" was appended to file!');
// });
}

// use writeFile here
// appendFile('languages_caps.json',(err) => {
//   if (err) throw err;
//   console.log('The "data to append" was appended to file!');
// });

writeStream._write = (buffer, encoding, done) => {
  writeFile('languages_caps.json',buffer, (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});
  // process.stdout.write(buffer)

}

readStream.pipe(transformStream).pipe(writeStream)
