const mysql2 = require("mysql2/promise");

const dbconnection = mysql2.createPool({
  user:"Evangadi_admin",
  database: "Evangadi_Forum",
  host: "localhost",
  password: "1234567",
  connectionLimit: 10,
});

module.exports = dbconnection;
