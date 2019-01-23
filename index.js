const parseArgs = require('minimist');
const pun = require('./pun');
const registerKey = require('./registerKey');
const getWeather = require('./getWeather');
const help = require('./help');

module.exports = () => {
    try{
        const args = parseArgs(process.argv.slice(2));

        if(args.key)
            registerKey(args.key);
        else if(args.city)
            getWeather(args.city);
        else if(args.help)
            help();
        else
            help();
        

    }catch(e){
        console.log('wooow bro shit happened');
    }
}