require("dotenv").config();
const mysql2 = require("mysql2/promise");

const dbconnection = mysql2.createPool({
  user: process.env.DB_USER || "Evangadi_admin",
  database: process.env.DB_NAME || "Evangadi_Forum",
  host: process.env.DB_HOST || "localhost",
  password: process.env.DB_PASSWORD || "1234567",
  connectionLimit: 10,
  waitForConnections: true,
  queueLimit: 0
});

module.exports = dbconnection;

