const Twitter = require("twit");
const iQuotes = require("iquotes");
var quote, text, author, tweetBody;

// Keys and Secrets have since been regenerated to prevent unwanted access to Bot Account.
var T = new Twitter({
    consumer_key: 'ouLMThyeQmqz0XYcQj21kkDwt',
    consumer_secret: 'Di64bHxRglEUKnARlos5BqwI0QTQneUUd9wzb269asftjuoJ72',
    access_token: '1049789916245356551-AYkXCkhq2z5kSyfxL2G1MJVGs3kZUx',
    access_token_secret: 'HKoIJ2EUqo9Zpqz0pGlETX52RTehPxI8ONR7EKYWEHsEn',
});

setInterval(function(){  
    quote = (iQuotes.random());
    text = quote["quote"];
    author = quote["author"];
    tweetBody = text + "\nBy: " + author;
    T.post('statuses/update', {status: tweetBody}, function(error, data, response) {
        console.log(data)
    });  
}, minutesToSeconds(480)); // 60 seconds

function minutesToSeconds(minutes) {
    return (minutes*60000);
}

function hoursToMinutes() {
    return (hoursToMinutes*60);
}
