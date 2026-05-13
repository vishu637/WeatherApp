
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

const errorHandler = require("./middleware/errorMiddleware");

dotenv.config();


const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the frontend build directory
app.use(express.static(path.join(__dirname, "../frontend/build")));

// Routes
const weatherRouter = require("./routes/weatherRoutes");
app.use("/api/weather", weatherRouter);

// Serve index.html for any route not matched by API routes (SPA fallback)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

// Error Handling Middleware - MUST be last
app.use(errorHandler);

app.listen(port, ()=>{
    console.log(`server is running on the port ${port}`)
});


