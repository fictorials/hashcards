var mongoose = require('mongoose')
  , db = mongoose.createConnection('localhost', 'test')
  , Schema = mongoose.Schema;

// DB code
db.on('error', console.error.bind(console, 'connection error'));

db.once('open', function() {
   console.log( 'Abhijeet rulesssss' );  
});

var Hashcard = new Schema({
    text: {
      front: { type: String }
    , back: { type: String }
    }
  , tags: Array

});
var User = new Schema({
    name: { type: String }
  , email: { type: String }
  , pw: { type: String }
});
var EnglishWord = db.model('English', Hashcard);
var apple = new EnglishWord();
apple.text = {
  front: 'apple'
, back: 'a fruit'
};
apple.tags = [ 1, 2, 5 ];
var orange = new EnglishWord();
orange.text = {
  front: 'orange'
, back: 'a fruit'
};
orange.tags = [ 1, 2, 5 ];

var user = db.model('user', User);
var newUser = new user();
newUser.name = 'Abhijeet';
var query = db.users.find({ name: 'Abhijeet' });
console.log( query);
