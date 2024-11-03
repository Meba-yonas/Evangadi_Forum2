require('dotenv')
const mysql2 = require("mysql2/promise");

const dbconnection = mysql2.createPool({
  user: "Evangadi_admin",      // Replace with your actual username
  database: "Evangadi_Forum",   // Replace with your actual database name
  host: "localhost",            // Replace with your actual host (e.g., Render's host)
  password: "1234567",          // Replace with your actual password
  port: 3306,                   // Replace with your MySQL port, typically 3306
  connectionLimit: 10,
  waitForConnections: true,
  queueLimit: 0,
});

module.exports = dbconnection;




