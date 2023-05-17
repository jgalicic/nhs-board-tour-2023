$( ".info" ).click(function() {
 	$(this).next().next().slideToggle( "slow" );
   $(this).children().toggleClass("down");
});