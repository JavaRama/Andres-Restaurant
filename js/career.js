jQuery(document).ready(function(){

// mouseover and mouseout functions
$('.location_container').mouseover(function(){
	$(this).css({'background-color': '#252b30', 'color': 'white'});
});

$('.location_container').mouseout(function(){
	$(this).css({'background-color': '#fdbb3b', 'color': '#5b5a5b'});
});

//onclick function
$('.location_container').click(function(){
	$('.jobs').fadeOut(1000);
	$(this).next('.jobs').show(1000);
});

});
