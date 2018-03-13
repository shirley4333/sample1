$(window).scroll(function() {
    if($(window).scrollTop() >= $('#div_introProduct').outerHeight()-5) 
        $('.navbar').show();
    else 
        $('.navbar').hide();
});