$(function () {
  $("#heading-properties").hide();
  $("#image-properties").hide();
  $(".component-item").draggable({
    helper: 'clone',
    cursor: 'move'
  });

  $("#droppable").droppable({
    tolerance: 'fit',
    drop: function (event, ui) {
      var componentType = ui.draggable.attr("id");

      $("<div></div>")
        .html(htmlInput(componentType))
        .appendTo($(this));

      $('.component-heading')
      .blur(function () {
        $(this).addClass("input-no-border")
      })
      .focus(function() {
        $("#heading-properties").show();
      });
    }
  });

  var htmlInput = function (componentType) {

    switch (componentType) {
      case 'draggable-heading':
        $("#heading-properties").show();
        $("#image-properties").hide();
        return "<input type='text' id='component-heading' class='component-heading'>";
      case 'draggable-text':
        return "<input type='text' id='component-text' class='form-control'>";
      case 'draggable-image':
        $("#heading-properties").hide();
        $("#image-properties").show();
        return "<div class='component-image'></div>";
      case 'draggable-table':
        return "<table class='component-table'><tr><td><input type='text' class='form-control'></td><td><input type='text' class='form-control'></td></tr></table>";
      case 'draggable-pricing-table':
        return "<table class='component-table'><tr><td><input type='text' class='form-control'></td><td><input type='text' class='form-control'></td></tr></table>";
      default:
        return "<input type='text' class='form-control'>";
    }
  }



});