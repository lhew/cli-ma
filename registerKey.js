const fs = require('fs');
const package = require('./package.json')
const colors = require('colors');

module.exports = key => {
    fs.writeFile('.env', 'API_KEY=' + key, function (err) {
        if (err) 
            throw err;
        
        if(key == 'blank'){
            console.log('remember to get yourself a public key, right? type ', package.name.bold + ' --help'.bold, 'for instructions');
            console.log(' ');
        }else if(key && typeof key == 'string'){
            console.log('key inserted bro :)', key);
        }else{
            console.log('type the key, bro');
        }
    });
}