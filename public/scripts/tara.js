// var thoughtsController = {

//  thoughtsTemplate: _.template($('#thoughtsTemplate').html()),

//  all: function() {
//      // console.log("calling all");
//      $.get('/thoughts', function(data) {
//        var allThoughts = data;
//        _.each(allThoughts, function(thoughts) {
//          //append the thoughts so they appear on the page
//          var $thoughtsHTML = $(thoughtsController.thoughtsTemplate(thoughts));
//          // console.log($thoughtsHTML);
//          $('#listOfThoughts').append($thoughtsHTML); 
//          // console.log(allThoughts);
//        });
//        thoughtsController.addEventHandlers();
//      });
//    },

//  create: function(newThought) {
//      var thoughtData = {thoughtText: newThought};
//      console.log(thoughtData);
//    // this is creating a a request to the server to create a new thought 
//    $.post('/thoughts', thoughtData, function(data) {
//      //passing through the thoughtTemplate to show the thought on the page
//      var $thoughtsHTML = $(thoughtsController.thoughtsTemplate(data));
//      $('#listOfThoughts').append($thoughtsHTML); 
//    });
//  },

//  update: function (thoughtId, updatedThought) {
//    console.log('hello');
//    $.ajax({
//      type: 'PUT',
//      url: '/thoughts/' + thoughtId,
//      data: {
//        thoughtText: updatedThought
//      },
//      success: function(data) {
//        var $thoughtsHTML = $(thoughtsController.thoughtsTemplate(data));
//        $('#thought-' + thoughtId).replaceWith($thoughtsHTML);
//      }
//    });
//    console.log('success'); 
//  },

//  delete: function (thoughtId) {
//    //sending a request to the server to delete the thought
//    $.ajax ({
//      type: 'DELETE',
//      url: '/thoughts/' + thoughtId,
//      success: function(data) {
//        $('#thought-' + thoughtId).remove();
//      } 
//    });
//  },

//  addEventHandlers: function() {
//    // $('#thoughtsTemplate')
//      // for update: submit event on `.updatedThought` form
//      $('#listOfThoughts').on('submit', '.updatedComment', function(event) {
//        event.preventDefault();
//        var thoughtId = $(this).closest('.thought').attr('data-id');
//        // console.log(thoughtId);
//        var updatedThought = $(this).find('.updatedThought').val();
//        // console.log(updatedThought);
//        thoughtsController.update(thoughtId, updatedThought);
//      })
//      // for delete on the .deleteComment button
//      $('#listOfThoughts').on('click', '.deleteComment', function(event) {
//        event.preventDefault();
//        var thoughtId = $(this).closest('.thought').attr('data-id');
//        thoughtsController.delete(thoughtId);
//      });
//    },

//    setupView: function() {
//    //existing thoughts onto the page 
//    thoughtsController.all()

//    $('#submitThought').on('submit', function(event) {
//      event.preventDefault();
//      var thoughtText = $('#thoughtText').val();
//      console.log(thoughtText);
//      thoughtsController.create(thoughtText);
//    });
//  }


// }
// // CLOSES THE THOUGHTSCONTROLLER


// thoughtsController.setupView()
