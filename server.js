var request = require('request');
var expect = require('chai').expect;
var express = require ("express");
var app = express();
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var session = require('express-session');
var Story = require('./models/story');
var User = require('./models/user');

// connect to mongodb
mongoose.connect(
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/mycrazyex' 
);

// middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

// configure session
app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: 'SuperSecretCookie',
  cookie: { maxAge: 60000 }
}));

//  middleware (custom, to manage our sessions)
app.use('/', function (req, res, next) {
  // saves userId in session for logged-in user
  req.login = function (user) {
    req.session.userId = user._id;
  };

  // finds user currently logged in based on `session.userId`
  req.currentUser = function (callback) {
    User.findOne({_id: req.session.userId}, function (err, user) {
      req.user = user;
      callback(null, user);
    });
  };

 // destroy `session.userId` to log out user
  req.logout = function () {
    req.session.userId = null;
    req.user = null;
  };

  next();  // required for middleware
});


// routes

// homepage
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/views/index.html');
});
//////////

// OPEN THE API TO REQUESTS FROM ANY DOMAIN

// app.get('/', function(req, res) {
//   var index = __dirname + "/index.html";
//   res.sendFile(index);
// });

// LINES#QUERY GETTING ALL THE STORIES ONTO THE PAGE
app.get('/stories', function(req, res) {
  // console.log(Story);
  Story.find(function (err, stories) {
    res.json(stories);
  });
  // Story.find().sort('__id').exec(function(err, stories) {
});

// LINES#CREATE
app.post('/stories', function(req, res) {
  // SAVE LINE TO DB
  var newStory = new Story({
    storyText: req.body.storyText,
    storyLevel: req.body.storyLevel,
    storyLocation: req.body.storyLocation
  });

  newStory.save(function (err, savedStory) {
    res.json(savedStory);
  });
});





// require express-session for authentication (stores current user)
// var session = require('express-session');
// var newUser = req.body.user;




// AUTH routes:
  // once we know who the current user is, we can change the 
  //front end based on looking it up
  //add stuff / delete only if user is logged in

// 1. create user
app.post('/users', function(req, res) {
  console.log("server recieved sign up form data: ", req.body.user);
  var newUser = req.body.user;
  User.createSecure(newUser, function (err, user) {
    // log user in automatically when created
    req.login(user);
    res.json(user);
    // res.redirect('profile'); 
  });
});

// 2. authenticate / login for user session
app.post('/login', function (req, res) {
  // from client;
  // var userData
  console.log("server recieved login form data: ", req.body.user);
  // servers version of userdata
  var userData = req.body.user;
  
  User.authenticate(userData.email, userData.password, function (err, user) {
    if (user) {
      req.login(user);
      // res.redirect('/profile');
      console.log("logged in")
      res.json(user);
    } else {
      // find some way to handle 
      // whatever error came from the authentication code
      res.status(500).send(err);
    };
  });
});

// 3. log out user 
app.get('/logout', function (req, res) {
  req.logout();
  res.json(user);
  // res.redirect('/');
});

// see who the current user is
// app.get('/currentUser', function (req, res) {
//   console.log("sending current user");
//   //check for current logged in user
//   req.currentUser(funcion (err, user) {
//     console.log("current user is ", user)
//   // res.login(user);
//   res.json(user);
//   });
// });

// listen on port 3000
app.listen(process.env.PORT || 3000, function() {
  console.log('server started on locahost:3000');
});
