$(function() {
  $(".component-item").draggable({
    helper: 'clone',
    cursor: 'move'
  });

  $( "#droppable" ).droppable({
    tolerance: 'fit',
    drop: function(event, ui){
          $("<div></div>")
          .html("<input type='text' id='header' class='form-control'>")
          .appendTo($(this));
    }
  });



});