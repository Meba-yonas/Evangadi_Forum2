require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5500;

const authenticationMiddleware = require("./middleware/authenticationMiddleware");
const dbconnection = require("./db/config");

// Middleware

app.use(cors());

;
app.use("/images", express.static(path.join(__dirname, "images")));
app.use(express.json());

// Routes
const userRoutes = require("./routes/userRoute");
app.use("/api/users", userRoutes);

const questionRoute = require("./routes/questionRoute");
app.use("/api/questions", authenticationMiddleware, questionRoute);

const answerRoute = require("./routes/answerRoute");
app.use("/api/answers", authenticationMiddleware, answerRoute);

const imageRoute = require("./routes/imageRoute");
app.use("/api/images", authenticationMiddleware, imageRoute);

// Function to start server
async function start() {
    try {
        // Test the database connection
        await dbconnection.execute("select 'test'");
        console.log("Database connection established!");

        // Start the server
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.error("Database connection failed:", error.message);
        process.exit(1); // Exit the application if the database connection fails
    }
}

start();
