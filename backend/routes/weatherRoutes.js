const express = require("express");
const router = express.Router();

const {
    getWeather
} = require("../controllers/weatherController");

//to get weather data for the specific city
router.get("/:city", async (req, res, next) => {
    try {
        await getWeather(req, res, next);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
