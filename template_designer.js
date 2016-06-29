$(function () {
    var options = {
        width: 6,
        float: false,
        removeTimeout: 100,
        acceptWidgets: '.grid-stack-item'
    };
    $('#grid1').gridstack(options);
    $('#grid2').gridstack(_.defaults({
        float: false
    }, options));

    var outerCount = 0;	
    $('.grid-stack').each(function () {
    	outerCount++;
        var grid = $(this).data('gridstack');
        grid.addWidget($('<div><div class=grid-stack-item-content>Hello world</div></div>'), 0, 0, 2, 1)
    });
    
    $('.sidebar .grid-stack-item').draggable({
        revert: 'valid',
        handle: '.grid-stack-item-content',
        scroll: false,
        appendTo: 'body'
    });
});