$(function () {
    var options = {
        float: true
    };
    $('.grid-stack').gridstack(options);
    new function () {
        this.grid = $('.grid-stack').data('gridstack');
        this.addNewWidget = function () {
            this.grid.addWidget($('<div><div class="grid-stack-item-content"><input type="text" class="form-control"></div></div>'), 0, 0, 2, 1);
        	return false;
        }.bind(this);

        
       	$('#add-new-header').click(this.addNewWidget);

    };

    
});