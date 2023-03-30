const express = require("express");
const router = express.Router();
const fetch = import("node-fetch");

const fetchWeather = async (searchtext) => {
    const { default: fetch } = await import("node-fetch");
  
    const url = `https://api.weatherstack.com/current?access_key=${process.env.WEATHER_API_KEY}&query=${searchtext}`;
  
    try {
      const weatherStream = await fetch(url);
      const weatherJson = await weatherStream.json();
      return weatherJson;
    } catch (err) {
      return { Error: err.stack };
    }
  };

router.get("/", (req, res) => {
    res.json({ success: "Hello Weather!"});
});

router.get("/:searchtext", async (req, res) => {
    const searchtext = req.params.searchtext;
    const data = await fetchWeather(searchtext);
    res.json(data);
});

router.post("/", async (req, res) => {
    const searchtext = req.body.searchtext;
    const data = await fetchWeather(searchtext);
    res.json(data);
});

module.exports = router

