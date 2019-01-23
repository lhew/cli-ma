var fs = require('fs');
module.exports = key => {
    fs.writeFile('.env', 'API_KEY=' + key, function (err) {
        if (err) 
            throw err;

        if(key && typeof key == 'string')
            console.log('key inserted bro :)', key);
        else
            console.log('type the key, bro');
    });
}