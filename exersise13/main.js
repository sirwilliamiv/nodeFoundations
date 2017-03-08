'use strict'

const sqlite3 = require('sqlite3').verbose(); // verbose helps track errors
const db = new sqlite3.Database('employees.sqlite', (err) => console.log('Connected')); //or .db extension
const dropEmployees = () => {
  db.run(`DROP TABLE employees`)
};
// dropEmployees();

db.run(`CREATE TABLE IF NOT EXISTS employees (id INT, first TEXT, last TEXT,address TEXT,title TEXT ,salary INT)`);



// Write a statement to query the database and console.log() all employee records.
const populateEmployees = () => {
    const { Employees } = require('./employees.json');
    // console.log(Employees)
    Employees.forEach(({ employeeCode, firstName, lastName, address, jobTitleName, salary }) => {
      db.run(`INSERT INTO employees VALUES(
      ${employeeCode},
      "${firstName}",
      "${lastName}",
      "${address}",
      "${jobTitleName}",
      ${salary}
      )`)
    })
  }
  // populateEmployees();
  // Write a statement to query the database and console.log() each employees jobTitle.
const jobTitle = () => {
  db.each(`SELECT * FROM employees`, (err, { title, first, last }) => {
    if(err) throw err
    // console.log(employees)
    console.log(`${first} ${last}: ${title}`)
  })
}
jobTitle()



// Write a statement to query the database and console.log() each employees firstName, lastName and address only.

// Bonus Features

// Instead of using an array in the .js file, create a JSON file of employees to require into the js file. Use this to populate the table.

// Your friend has decided that they want to add a salary column to the employees table. Make sure to add a salary key value pair to each of the employee objects. Then drop the existing employees table, update the schema to accept a salary column, and repopulate the table.

// Write a statement that returns all employees of a specified jobTitle.
