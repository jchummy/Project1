
$(function() {
  // checking if im connected 
  console.log(' checking if connected! ')


////// template //// 1. first! test array for stories
var storiesController =  {

// var testStories = [{description: "test story"},{description: "test story"}];
////// grab all stories

storyTemplate: _.template($("#storyTemplate").html()), //template

all: function() {
  $.get('/stories', function(data) {
    console.log(data);
    var allStories = data;
    _.each(allStories, function(story) {
      //apend the stories to appear on the page 
      var $storyHTML = $(storiesController.storyTemplate(story));
      // console.log($storyHTML);
      $('#story-list').append($storyHTML);
      // console.log(allStories);
    }); 
    // storiesController.addEventHandlers();
  });
},

////// iterate 
 
create: function (newStoryText, newStoryLevel, newStoryLocation) {
  var storyData = {storyText: newStoryText, storyLevel:newStoryLevel, storyLocation:newStoryLocation};
  console.log(storyData)
  $.post('/stories', storyData, function(data) {
    var $storyHTML = $(storiesController.storyTemplate(data));
    $('#story-list').append($storyHTML);
    });
  },

// addEventHandlers: function() {
//   $("#story-form").on("submit", function(){
//     event.preventDefault()
//     console.log( "submitting form" )
//   } );
// },


// taras code
setupView: function() {
   //existing thoughts onto the page 
   storiesController.all()

   $('#story-form').on('submit', function(event) {
     event.preventDefault();
     var storyText = $('#storyText').val();
     console.log(storyText);
     var storyLevel = $('#storyLevel').val();
     console.log(storyLevel);
     var storyLocation = $('#storyLocation').val();
     console.log(storyLocation);
     storiesController.create(storyText, storyLevel, storyLocation);

   });
 }




 }

storiesController.setupView()


});


