
$(function() {
  // checking if im connected 
  console.log(' checking if connected! ')


////// template //// 1. first! test array for stories
var storiesController =  {

// var testStories = [{description: "test story"},{description: "test story"}];
////// grab all stories

template: _.template($("#storyTemplate").html()), //template
all: function() {
  $.get('/stories', function(data) {
    console.log(data);
    var allStories = data;
    _.each(allStories, function(story) {
      //apend the stories to appear on the page 
      var $storyHTML = $(storiesController.template(story));
      // console.log($storyHTML);
      $('#story-list').append($storyHTML);
      // console.log(allStories);
    }); 
    storiesController.addEventHandlers();
  });
},

////// iterate 
 
create: function(){
      var $story = _.template( $("#storyTemplate").html() );
        _.each(testStories, function(testStory) {
          console.log(testStory);

/////// append to page
      $('#story-list').append($story(testStory));
    });
  },

addEventHandlers: function() {
  $("#story-form").on("submit", function(){
    event.preventDefault()
    console.log( "submitting form" )
  });
}

 }

storiesController.all()


});



  // $.get('/api/stories', function(data) {
  //   var stories = data  

  //   _.each(stories, function(story) {
  //     console.log(story)
  //     $('#stories').append($story(story))
  //   })
  // })

  // $('#new-story').submit(function(e){
  //   e.preventDefault();
  //   console.log("im submitting a story")
  //   var story = {
  //     text: $('#story-text').val()
  //   }
  //   $.post('/api/stories', story, function(data) {
  //     console.log(data)
  //     $('#stories').prepend($story(data))
  //   })

  // })

//log in form 
  // $('login-form').on("submit", function(event) {
  //   var userData = {  
  //     email:$("#login-user-email").val(),
  //     password:("#login-user-password").val()
  //   };
  //  $.post('/login', function(response) {
  //     console.log(response);
  //  });
  // });

// when the page loads: check and chage login message
// $get.('/currentuser', function(response) {
//   // server responds with current user
//   if response ===n null){
//   //no one is logged in
//   $("#loggedInMessage").html("You're definitely not logged in as " + user )

//  }
// })
//   });
// });