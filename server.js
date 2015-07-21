var request = require('request');
var expect = require('chai').expect;
var express = require ("express");
var app = express();
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
// var story = require();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect(
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/mycrazyex' 
);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/views/index.html');
});


// LINES#CREATE
// app.post('/api/lines', function(req, res) {
// 	console.log(Line);
//   // SAVE LINE TO DB
//   var line = new Line({
//     text: req.body.text
//   });

//   line.save(function(err, line) {
//     res.json(line);
//   });
// });




app.listen(process.env.PORT || 3000, function() {
  console.log('server started on locahost:3000');
});


// app.listen(3000, function () {
  // console.log('server started on locahost:3000');
// });