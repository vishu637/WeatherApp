
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorMiddleware");

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const weatherRouter = require("./routes/weatherRoutes");
app.use("/api/weather", weatherRouter);

// Error Handling Middleware - MUST be last
app.use(errorHandler);

app.listen(port, ()=>{
    console.log(`server is running on the port ${port}`)
});


