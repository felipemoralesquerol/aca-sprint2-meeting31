require('dotenv').config();
const getOpenWeather = require('./openweather');
const client = require('./../database/config');
const db = require('./../database/db');

exports.signin = function signin(req, res, next) {
    res.json({ status: 'signin' });
};

exports.signup = function signup(req, res, next) {
    res.json({ status: 'signup' });
};

exports.me = function me(req, res, next) {
    res.json({ status: 'me' });
};

exports.products = function products(req, res, next) {
    res.json({ status: 'productus' });
};

exports.authenticated = function authenticated(req, res, next) {
    next();
    //res.status(500).json({ status: 'not authenticated' });
};


exports.temperatura = async function temperatura(req, res, next) {
    client.get("temperatura", async (error, rep) => {
        if (error) {
            // hubo un error
            res.json(error);
        }
        if (rep) {
            res.json({ temperatura: rep })

        } else {
            const info = await getOpenWeather();
            const temperatura = info.main.temp;
            console.log('Consulta al servicio OpenWeatherMap:' + temperatura)
            client.set("temperatura", temperatura, 'EX', '60');

            res.json({ temperatura: temperatura })
        }
    });



};
