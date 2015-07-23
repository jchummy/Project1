
$(function() {
  // checking if im connected 
  console.log(' checking if connected! ')

  // var baseUrl = "http://localhost:3000" 
  var baseUrl = "https://mycrazyex.herokuapp.com/" 
  
// 


// template here? 


// 


  // Adam's PickUp Lines code
  // $story = _.template( $("#storyTemplate").html() )

  // $.get(baseUrl + '/api/stories', function(data) {
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
  $('login-form').on("submit", function(event) {
    var userData = {  
      email:$("#login-user-email").val(),
      password:("#login-user-password").val()
    };
   $.post('/login', function(response) {
      console.log(response);
   });
  });
});
// when the page loads: check and chage login message
// $get.('/currentuser', function(response) {
//   // server responds with current user
//   if response ===n null){
//   //no one is logged in
//   $("#loggedInMessage").html("You're definitely not logged in as " + user )

//  }
// })















