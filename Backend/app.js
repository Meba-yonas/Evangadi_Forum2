require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const authenticationMiddleware = require("./middleware/authenticationMiddleware");
const dbconnection = require("./db/config");

const app = express();
const port = process.env.PORT || 5502;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "images")));

// Route Middleware
const userRoutes = require("./routes/userRoute");
app.use("/api/users", userRoutes);

const questionRoute = require("./routes/questionRoute");
app.use("/api/questions", authenticationMiddleware, questionRoute);

const answerRoute = require("./routes/answerRoute");
app.use("/api/answers", authenticationMiddleware, answerRoute);

const imageRoute = require("./routes/imageRoute");
app.use("/api/images", authenticationMiddleware, imageRoute);

async function start() {
  try {
    // Test the database connection
    await dbconnection.execute("select 'test' ");
    console.log("Database connection established!");

    // Start the server after successful database connection
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    // Log error details and exit the process
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

start();
