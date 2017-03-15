'use strict'

const sqlite3 = require('sqlite3').verbose();  // verbose helps track errors
const thedb = new sqlite3.Database('lootbag.sqlite', (err) => console.log('Connected',err));


const createTables = () => {
  thedb.run(`CREATE TABLE IF NOT EXISTS children (nameID INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, delivered INT)`)
    .run(`CREATE TABLE IF NOT EXISTS item (itemID INTEGER PRIMARY KEY AUTOINCREMENT, childId INT, item_name TEXT, FOREIGN KEY(childId) REFERENCES children(nameID))`)

}

createTables()


module.exports = thedb
