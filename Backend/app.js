// require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const port = 5502;
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
        console.log("Testing database connection...");
        const [rows] = await dbconnection.query("SELECT 1");
        console.log("Database connection successful:", rows);

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.error("Database connection failed:", error);  // Log full error object for more detail
        process.exit(1);
    }
}

start();
