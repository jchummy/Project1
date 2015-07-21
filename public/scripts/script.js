
$(function() {
  // checking if im connected 
  console.log('checking if connectedI')

  // var baseUrl = "http://localhost:3000" // DEV
  var baseUrl = "https://mycrazyex.herokuapp.com/" // PRD
  
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
})