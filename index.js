const Request = require('request');
const parseArgs = require('minimist');
const env = require('node-env-file');

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

            const data = JSON.parse(body);
           console.log('The temperature in',data.name,'is',data.main.temp + 'ºC');
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