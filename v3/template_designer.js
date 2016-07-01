$(function() {
  $(".component-item").draggable({
    helper: 'clone',
    cursor: 'move'
  });

  $("#droppable").droppable({
    tolerance: 'fit',
    drop: function(event, ui){
          var componentType = ui.draggable.attr("id");
   
          $("<div></div>")
          .html(htmlInput(componentType))
          .appendTo($(this));
    }
  });

  var htmlInput = function(componentType) {
  	
  	switch(componentType) {
	    case 'draggable-heading':
	        return "<input type='text' id='component-heading' class='form-control'>";
	        break;
        case 'draggable-text':
	        return "<input type='text' id='component-text' class='form-control'>";
	        break;
	    case 'draggable-image':
	        return "<input type='file' id='myFile' size='50'>";
	        break;
        case 'draggable-table':
        	return "<table class='component-table'><tr><td><input type='text' class='form-control'></td><td><input type='text' class='form-control'></td></tr></table>";
        	break;
    	case 'draggable-pricing-table':
        	return "<table class='component-table'><tr><td><input type='text' class='form-control'></td><td><input type='text' class='form-control'></td></tr></table>";
        	break;
	    default:
	        return "<input type='text' class='form-control'>";
	}
  }

  var focusedElem = $(':focus');
  console.log(focusedElem);
});