//serverside 
// require mongoose and other modules
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcrypt'),
    Story = require('./story');

// define user schema
var UserSchema = new Schema({
	firstName: String,
	lastName: String,
	avatar: String,
	email: String,
	passwordDigest: String,
	stories: [Story.schema]
});


// create a new user with email and password from signup form
//secure (hashed) password
UserSchema.statics.createSecure = function (userData, callback) {
  // `this` references our schema
  // store it in variable `that` because `this` 
  // changes context in nested callbacks
 var that = this;

  // hash password user enters at sign up
  bcrypt.genSalt(function (err, salt) {
    bcrypt.hash(userData.password, salt, function (err, hash) {
      console.log(hash);

      // create a new user with hashed password // save to database
        that.create({
        // firstName: userData.firstName,
        // lastName: userData.lastName,
        // avatar: userData.avatar,
        email: userData.email,
        passwordDigest: hash
      }, callback);
    });
  });
};

// authenticate user during login
UserSchema.statics.authenticate = function (email, password, callback) {
  // find user by email entered at log in
  this.findOne({email: email}, function (err, user) {
    console.log(user);

    // throw error if can't find user
    if (user === null) {
      throw new Error('Can\'t find user with email ' + email);

    // if found user, check if password is correct
    } else if (user.checkPassword(password)) {
      callback(null, user);
    }
  });
};

// compare password user enters with hashed password (`passwordDigest`)
UserSchema.methods.checkPassword = function (password) {
  // run hashing algorithm (with salt) on password user enters in order to compare with `passwordDigest`
  return bcrypt.compareSync(password, this.passwordDigest);
};

// create and export User model
var User = mongoose.model('User', UserSchema);
module.exports = User;