require('dotenv').config()
console.log(process.env);

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

const apiKey = process.env.API_KEY;
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

 // import the SendGrid library
const sgMail = require('@sendgrid/mail');

// set your API key
sgMail.setApiKey('');

async function sendEmail() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  // create the email message
  const msg = {
    to: 'RECIPIENT_EMAIL_ADDRESS',
    from: 'SENDER_EMAIL_ADDRESS',
    subject: 'New Contact Form Inquiry',
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `,
  };

  // send the email
  try {
    await sgMail.send(msg);
    alert('Email sent successfully!');
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }

    alert('An error occurred while sending the email.');
  }
}


  