// require mongoose
var mongoose = require('mongoose'),
   Schema = mongoose.Schema;


// define story schema
var StorySchema = new Schema({
 storyText: String,
 storyLevel: String,
 storyLocation: String

});


// create and export story model
var Story = mongoose.model('Story', StorySchema); 
module.exports = Story;