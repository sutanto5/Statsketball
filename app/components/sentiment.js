var Sentiment = require('sentiment');
var sentiment = new Sentiment();

function sentimentReturn(text) {
    var docx = sentiment.analyze(text);
    return docx

}

var stuff = sentimentReturn("I like poodlkes");
console.log(stuff.score);