require("dotenv").config();

const mysql = require("mysql");
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB,
});

connection.connect();

connection.query("SELECT * FROM Users", (errors, rows, fields) => {
  if (errors) throw errors;
  console.log("User info is: ", rows);
});

connection.end();
