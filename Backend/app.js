require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5502;
const dbconnection = require("./db/config");

app.use(cors());
app.use("/images", express.static(path.join(__dirname, "images")));
app.use(express.json());

// Import Routes
const userRoutes = require("./routes/userRoute");
const questionRoute = require("./routes/questionRoute");
const answerRoute = require("./routes/answerRoute");
const imageRoute = require("./routes/imageRoute");

app.use("/api/users", userRoutes);
app.use("/api/questions", questionRoute);
app.use("/api/answers", answerRoute);
app.use("/api/images", imageRoute);

async function start() {
  try {
    console.log("Connecting to the database...");
    await dbconnection.execute("SELECT 'test'");
    console.log("Database connection established!");

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Error during startup:", error.message);
    console.error(error.stack); // Detailed stack trace for debugging
    process.exit(1);
  }
}
async function testDbConnection() {
  try {
    console.log("Testing database connection...");
    await dbconnection.execute("SELECT 1 + 1 AS solution");
    console.log("Database connection successful!");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    console.error(error.stack);
  }
}

testDbConnection();

start();
