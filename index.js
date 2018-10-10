const Twitter = require("twit");
const iQuotes = require("iquotes");
var quote, text, author, tweetBody;


var T = new Twitter({
    consumer_key: '7UNEnwV33qJ6Rs3c6CFYKtDkc',
    consumer_secret: 'PFIcTBBUUzYSJNobLIMVMjzjVMyBnaubrzJuFubbS2xc90Y6gF',
    access_token: '1049789916245356551-Lb6pd1jYENqNuzifQZnIkp8g33OKee',
    access_token_secret: 'A6IeSmLV9ump5bwrdVhfjaU4jJp0uLQP4fPPmtM1sT9VQ',
});

setInterval(function(){ 
    //code goes here that will be run every 5 seconds.  
    quote = (iQuotes.random());
    text = quote["quote"];
    author = quote["author"];
    tweetBody = text + "\nBy: " + author;
    T.post('statuses/update', {status: tweetBody}, function(error, data, response) {
        console.log(data)
    });  
}, 60000); // 60 seconds