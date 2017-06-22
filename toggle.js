//make sure page is ready
$(function(){ 

    //get menu icon element 
    $('#menu-icon').click(function(){
        
    //on click toggle nav ul
        $('nav').slideToggle();              
    });
    
    //remove style not displaying nav on resize
    $(window).resize(function(){
    
    if ( $(window).width() > 480 ) {
        $('nav').removeAttr('style');
        }
    });
    
});