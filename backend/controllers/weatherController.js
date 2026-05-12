const axios = require("axios");

const getWeather = async (req, res, next) => {
    try {
        const city = req.params.city;
        
        if (!city) {
            return res.status(400).json({ error: "City parameter is required" });
        }

        const apikey = process.env.API_KEY;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

        const response = await axios.get(url);
        const data = response.data;

        const weather = {
            city: data.name,
            country: data.sys?.country || "",
            coordinates: data.coord,
            weather: data.weather?.[0]
                ? {
                      main: data.weather[0].main,
                      description: data.weather[0].description,
                      iconCode: data.weather[0].icon,
                      iconUrl: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
                  }
                : null,
            temperature: {
                current: data.main?.temp,
                feelsLike: data.main?.feels_like,
                min: data.main?.temp_min,
                max: data.main?.temp_max,
                pressure: data.main?.pressure,
                humidity: data.main?.humidity,
            },
            wind: {
                speed: data.wind?.speed,
                deg: data.wind?.deg,
                gust: data.wind?.gust,
            },
            clouds: data.clouds?.all,
            sunrise: data.sys?.sunrise,
            sunset: data.sys?.sunset,
            timezone: data.timezone,
        };

        res.json(weather);
    } catch (error) {
        if (error.response) {
            return res.status(error.response.status).json({ error: error.response.data?.message || error.message });
        }
        next(error);
    }
};

module.exports = {
    getWeather
};
