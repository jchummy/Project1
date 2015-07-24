// require mongoose
var mongoose = require('mongoose'),
   Schema = mongoose.Schema;


// define thoguhts schema
var StorySchema = new Schema({
 storyText: String,
 storyLevel: String,
 storyLocation: String

});


// create and export Thoughts model
var Story = mongoose.model('Story', StorySchema); 
module.exports = Story;