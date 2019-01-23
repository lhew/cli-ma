const colors = require('colors');
var package = require('./package.json');


module.exports = () => {
    console.log(' ');
    console.log('Bro, get yourself a public api key at https://openweathermap.org/api.');
    console.log('Once you get your key, type ' + colors.yellow(package.name + ' --key [your_key]') + ' and voila');
    console.log(' ');
}