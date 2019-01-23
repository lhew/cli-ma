const emoji = require('node-emoji');
const colors = require('colors');

module.exports = data => {

    if(!data || !data.weather[0])
        return 'Wow, i don\'t know this city bro! Try another one';
    
    let skyText;
    let tempText;

    let weatherID = data.weather[0].id;
    let temperature = data.main.temp;

  //  console.log(data);
  //  return;
    
    if (weatherID === 800)
        skyText = 'It\'s freakin sunny bro ' + emoji.get('sunny');
    else if (weatherID >= 801 && weatherID <= 804)
        skyText = 'Some clouds will pop out bro ' + emoji.get('mostly_sunny');
    else if (weatherID >= 700 && weatherID <= 762)
        skyText = 'Slow down dude, weather is crap ' + emoji.get('foggy') + '  '+  emoji.get('poop');
    else if (weatherID >= 700 && weatherID <= 762)
        skyText = 'PROTECT YOSELF IT\'S A F***ING TORNADO ' + emoji.get('tornado');
    else if (weatherID >= 600 && weatherID <= 611)
        skyText = 'Let it go, let it go, bro ' + emoji.get('snowflake') + emoji.get('snowman') + emoji.get('snowflake');
    else if (weatherID >= 612 && weatherID <= 620)
        skyText = 'Annoying snow + rain bro.  ' + emoji.get('snowflake') + '  ' + emoji.get('snowman') + '  ' + emoji.get('snowflake');
    else if (weatherID >= 612 && weatherID <= 622)
        skyText = 'DUDE, shit is not going well. get yourself a shelter ' + emoji.get('snowflake') + '  ' + emoji.get('snowman')+ '  ' + emoji.get('snowflake');
    else if (weatherID >= 500 && weatherID <= 531)
        skyText = 'I would recommend you an umbrella  ' + emoji.get('umbrella') + '  because it\'s raining bro. '  + emoji.get('rain_cloud') + '  ' + emoji.get('umbrella') + '  ' + emoji.get('rain_cloud');


    if(temperature <= -5 ) 
        tempText = '  increased risk of becoming a popsicle. take care. ';
    else if (temperature > -5 && temperature <= 0)
        tempText = '  ah, it\'s cold AF! ';
    else if (temperature > 0 && temperature <= 7)
        tempText = '  btw, it\'s annoyingly cold. ';
    else if (temperature >= 8 && temperature <= 12)
        tempText = '  but hey, don\'t forget layering. ';
    else if (temperature >= 13 && temperature <= 18)
        tempText = '  depending on your body fat you\'ll need a light jacket or layers. ';
    else if (temperature >= 19 && temperature <= 24)
        tempText = '  you will be fine. Somebody is jealous of you on this weather now. ';
    else if (temperature >= 25 && temperature <= 30)
        tempText = '  beach time, bitch!  ';
    else if (temperature >= 31 && temperature <= 35)
        tempText = '  don\'t forget drinking water, alright? ';
    else if (temperature >= 36)
        tempText = '  probably you can cook an egg on the sidewalk. ';

    let preCelsius = [
        'Good luck with these ',
        'Wish you luck with ',
        'Take care of yourself because it\'s ',
        'I hope you feel fine with these ',
        'Right not it\'s ',
        'Temperature now is ',
        'I hope you don\'t get bothered with ',
        'Enjoy the current '
    ];

    let sortedPreCelsiusIndex =  Math.floor(Math.random() * preCelsius.length);

    return skyText + tempText+preCelsius[sortedPreCelsiusIndex] + temperature + 'ºC in ' + data.name;
}