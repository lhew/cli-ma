const colors = require('colors');
var package = require('./package.json');

module.exports = () => {
    console.log('  ');
    console.log(package.name.bold, '-', package.version.bold.green);
    console.log('  ');
    console.log('Need help bro? Here you have'.bold.blue);
    console.log('    --key'.bold + ' <your key>'.bold.yellow + ' adds a public api key from https://openweathermap.org/api.');
    console.log('    --city'.bold + ' <a city name>'.bold.yellow + ' shows the current weather of this given place');
    console.log('  ');
}