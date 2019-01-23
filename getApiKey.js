const colors = require('colors');

module.exports = () => {
    console.log(' ');
    console.log('Bro, get yourself a public api key and');
    console.log('save it on an ' + colors.underline('.env') + ' file with the var API_KEY.')
    console.log('Get an api\'s at https://openweathermap.org ');
    console.log('because seriously, I won\'t give you mine.')
    console.log(' ');
}