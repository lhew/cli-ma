const showApiKeyError = require('./showApiKeyError');
const colors = require('colors');
const Request = require('request');
const env = require('node-env-file');
const pun = require ('./pun');
env(__dirname + '/.env');

module.exports = city => {
    try{
        const token = process.env.API_KEY;

        if(!token){
            showApiKeyError();
            return;
        }

        if(city && city.toString().toLowerCase().match(/[a-z]/) === null || !isNaN(city)){
            console.log('Cities starts with ' + colors.underline('LETTERS'.red) + ' sweetheart. please.');
        }else {
            const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&APPID=' + token;
            Request.get(url, (error, response, body) => {
                if(error) {
                    return console.dir(error);
                }
                const weather = JSON.parse(body);
                console.log(pun(weather));
            });
        }

    }catch(e){
        console.log('whoops, something went wrong, dude.');
    }
}