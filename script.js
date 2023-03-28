require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.json({ success: "hello world"}));

app.listen(port, () => console.log(`App listening on port ${port}`));


let menu = document.getElementById('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};

const sr = ScrollReveal ({
	distance: '65px',
	duration: 2600,
	delay: 450,
	reset: true
});

sr.reveal('.hero-text',{delay:200, origin:'top'});
sr.reveal('.hero-img',{delay:450, origin:'top'});
sr.reveal('.icons',{delay:500, origin:'left'});
sr.reveal('.scroll-down',{delay:500, origin:'right'});

// --- weather app

const apiKey = "";
const apiUrl = "https://api.weatherstack.com/current";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

async function checkWeather(cityName) {
  const response = await fetch(`${apiUrl}?access_key=${apiKey}&query=${cityName}`);
  const data = await response.json();
  console.log(data);

  // Update HTML with weather data
  weatherIcon.src = data.current.weather_icons[0];
  city.textContent = data.location.name;
  temp.textContent = data.current.temperature + "°C";
  humidity.textContent = data.current.humidity + "%";
  wind.textContent = data.current.wind_speed + " mph";
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

// --- countdown timer

let countDownDate = new Date("June 21, 2023 00:00:00").getTime()

let x = setInterval(function(){
    let now = new Date().getTime()
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24))
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((distance % (1000 * 60)) / 1000)

    document.getElementById("days").innerHTML = days
    document.getElementById("hours").innerHTML = hours
    document.getElementById("minutes").innerHTML = minutes
    document.getElementById("seconds").innerHTML = seconds

},1000)

// contact form

function sendEmail(){
  Email.send({
    Host : "smtp.gmail.com",
    Username : "cheybabyrio@gmail.com",
    Password : "password",
    To : 'cheybabyrio@gmail.com',
    From : document.getElementById("email").value,
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert("Message Sent")
 
);
}
 


// word count for message box
const textField = document.getElementById("txt");
const wordCount = document.getElementById("wordCount");
const clearBtn = document.getElementById("clearBtn");

function countWord(){
  let text = textField.value;
  text=text.trim();
  let words = text.split(" ");
  wordCount.innerText = words.length;
    }
