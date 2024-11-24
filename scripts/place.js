document.querySelector("#year").textContent = new Date().getFullYear();

const today = new Date();

document.querySelector('#lastModified').textContent = today;


const temp = document.querySelector('#temp');
const conditions = document.querySelector('#conditions');
const wind = document.querySelector('#wind');
const windChill = document.querySelector('#wind-chill');

let temperature = 10;
let condition = 'Sunny';
let windSpeed = 5;

function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
        let windChillcal = 35.74 + (0.06215 * temperature) - (35.75 * (windSpeed ^ 0.16)) + (0.4275 * temperature * (windSpeed ^ 0.16));
        windChill.innerHTML = windChillcal;
    }
    else {
        windChill.innerHTML = 'N/A';
    }
}

temp.innerHTML = temperature;
conditions.innerHTML = condition;
wind.innerHTML = windSpeed;

calculateWindChill(temperature, windSpeed);

