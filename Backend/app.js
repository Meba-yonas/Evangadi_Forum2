require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5502;
const dbconnection = require("./db/config"); // Adjust the path if necessary


app.use(cors());

// Middleware for static images
app.use("/images", express.static(path.join(__dirname, "images")));

// Middleware for JSON
app.use(express.json());

// Routes
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
      await dbconnection.execute("SELECT 'test'"); // Test the connection
      app.listen(port, () => {
          console.log(`Server is running on port ${port}`);
      });
      console.log("Database connection established!");
  } catch (error) {
      console.error("Error during startup:", error.message);
      console.error(error.stack); // This provides a full stack trace
      process.exit(1);  // Exit the process with a failure code
  }
}

start();
