$(function () {
    
    var options = {
        width: 6,
        float: false,
        removeTimeout: 100,
        acceptWidgets: '.grid-stack-item'
    };

    $('#grid1').gridstack(options);
    $('#grid2').gridstack(_.defaults({
        float: true
    }, options));
    
});