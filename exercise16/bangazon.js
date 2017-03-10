'use strict'

const sqlite3 = require('sqlite3').verbose();  // verbose helps track errors
const db = new sqlite3.Database('bangazon.sqlite', (err) => console.log("It's working")); //or .db extension

const dropDBase = () => {
  db.run(`DROP TABLE `)
  // DELETE FROM tablenamehere
  // DROP TABLE tablenamehere
};
// dropEmployees();

const errorHandler = (err) => {
 if (err) { // If there is an error obj, it will be console logged
   console.log(`Msg: ${err}`);
 };
};


const createTables = () => {
  db.run(`CREATE TABLE IF NOT EXISTS customer (ID INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, address INT, city TEXT, postal_code INT, phone INT)`)
    .run(`CREATE TABLE IF NOT EXISTS product (ID INTEGER PRIMARY KEY AUTOINCREMENT, product_name TEXT, product_price NUMERIC(8,2))`)
    .run(`CREATE TABLE IF NOT EXISTS payment_options (ID INTEGER PRIMARY KEY AUTOINCREMENT, payment_name TEXT, payment_account_number INT)`)
    .run(`CREATE TABLE IF NOT EXISTS orders (ID INTEGER PRIMARY KEY AUTOINCREMENT, customer_id INT, payment_optionId INT, FOREIGN KEY(customer_id) REFERENCES customer(ID), FOREIGN KEY(payment_optionId) REFERENCES payment_options(ID))`, errorHandler)
    .run(`CREATE TABLE IF NOT EXISTS order_line_items (ID INTEGER PRIMARY KEY AUTOINCREMENT, orderID INT, product_id INT, FOREIGN KEY(orderID) REFERENCES orders(orderID), FOREIGN KEY(product_id) REFERENCES product(product_id))`);
}

createTables()
