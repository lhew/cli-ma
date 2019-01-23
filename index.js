const Request = require('request');
const parseArgs = require('minimist');
const env = require('node-env-file');
const colors = require('colors');
const pun = require('./pun');

env(__dirname + '/.env');

try{
    const token = process.env.API_KEY;
    const args = parseArgs(process.argv.slice(2));

    if(typeof args.city === 'string'){

        const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + args.city + '&units=metric&APPID=' + token;

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


/*
    -- args
    -- fetch
    -- npm
    -- levenshtein - string prediction
    -- colors
    -- emojis
    -- fun
*/