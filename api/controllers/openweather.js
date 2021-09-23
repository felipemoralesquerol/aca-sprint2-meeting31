require('dotenv').config();

const fetch = require('node-fetch')
const urlAPI = 'http://api.openweathermap.org/data/2.5';
const APPID = '&APPID=' + process.env.OPENWEATHERMAP_APIKEY + '&units=metric';
const city = 'La Plata, AR';


async function getOpenWeather() {
    const url = urlAPI + '/weather?q=' + city + APPID;
    console.log('URL: ' + url);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
};

module.exports = getOpenWeather;