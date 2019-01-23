const parseArgs = require('minimist');
const pun = require('./pun');
const registerKey = require('./registerKey');
const getWeather = require('./getWeather');
const help = require('./help');

try{
    const args = parseArgs(process.argv.slice(2));

    if(args.key){
        registerKey(args.key);
    }

    if(args.city){
        getWeather(args.city);
    }

    if(args.help){
        help();
    }

}catch(e){
    console.log('wooow bro shit happened');
}
