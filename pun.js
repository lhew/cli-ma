var emoji = require('node-emoji');

module.exports = data => {
    
    var skyText;
    var tempText;

    var weatherID = data.weather[0].id;
    var temperature = data.main.temp;
    
    if (weatherID === 800)
        skyText = 'It\'s gonna be sunny bro ' + emoji.get('sunny');
    else if (weatherID >= 801 && weatherID <= 804)
        skyText = 'Some clouds will pop out bro ' + emoji.get('mostly_sunny');
    else if (weatherID >= 600 && weatherID <= 611)
        skyText = 'Let it go, let it go, bro ' + emoji.get('snowflake') + emoji.get('snowman') + emoji.get('snowflake');
    else if (weatherID >= 612 && weatherID <= 620)
        skyText = 'Annoying snow + rain bro.  ' + emoji.get('snowflake') + emoji.get('snowman') + emoji.get('snowflake');
    else if (weatherID >= 612 && weatherID <= 622)
        skyText = 'DUDE, shit is gonna be huge. get yourself a shelter ' + emoji.get('snowflake') + emoji.get('snowman') + emoji.get('snowflake');
    


    if(temperature <= -5 ) 
        tempText = '  increased risk of becoming a popsicle. take care';
    else if (temperature > -5 && temperature <= 0)
        tempText = '  ah, it\'s gonna be cold AF';
    else if (temperature >= 1 && temperature <= 7)
        tempText = '  ah, it\'s gonna annoyingly cold';
    else if (temperature >= 8 && temperature <= 12)
        tempText = '  but hey, don\'t forget layering';
    else if (temperature >= 13 && temperature <= 18)
        tempText = '  depending on your body fat you\'ll need a light jacket or layers';
    else if (temperature >= 19 && temperature <= 24)
        tempText = '  you will be fine. Somebody is jealous of you on this weather now.';
    else if (temperature >= 25 && temperature <= 30)
        tempText = '  beach time, bitch! ';
    else if (temperature >= 31 && temperature <= 35)
        tempText = '  don\'t forget drinking water, alright?';
    else if (temperature >= 36)
        tempText = '  probably you can cook an egg on the sidewalk.';

    var preCelsius = [
        'Good luck with these ',
        'Wish you luck with ',
        'Take care of yourself on ',
        'I hope you be fine with ',
        'Right not it\'s ',
        'Temperature now is ',
        'I hope you don\'t get bothered with ',
        'Enjoy the current '
    ];

    var sortedPreCelsiusIndex =  Math.floor(Math.random() * preCelsius.length);

    return skyText + tempText+preCelsius[sortedPreCelsiusIndex] + temperature + 'ºC';
}