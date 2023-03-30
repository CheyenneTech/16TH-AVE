const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

const fetchWeather =async (searchtext) => {
    const url = `https://api.weatherstack.com/current?access_key=${process.env.WEATHER_API_KEY}`;
   try { 
    const weatherStream =await fetch(url);
    const weatherJson = await weatherStream.json();
    return weatherJson;

} catch (err) {
    return { Error: err.stack };
}
}

router.get("/weather", (req, res) => {
    res.json({ success: "Hello Weather!"});
});

module.exports = router;

