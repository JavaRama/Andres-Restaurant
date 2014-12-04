// alert("Hello Gustavo");


jQuery(document).ready(function(){

$('#aboutUs').click(function(){
	$('.p_content').text('With an extensive background in the pizza industry Andres wanted to serve pizza with the freshest and highest quality ingredients. Andres Pizza takes great pride in providing the highest level of service to its customers in the Great Toronto Area. Andres Pizza was voted to Torontos "A-List" in one local newspaper and "Best List" in another.');
	$('#timeline').css({'display': 'none'});
	$('.team').css({'display': 'none'});
});


$('#Story').click(function(){
	// $('#pizza-container').css({'background-color': '#252b30'})
	// $('.p_content').css({'color': 'white'})
	$('.p_content').text('Andres Pizza opened its first location in 1984. Our family has been making pizza from premium ingredients for your family to take home and enjoy lifes great moments.');
	$('#timeline').show(2000);
	$('.team').css({'display': 'none'});
});

$('#OurTeam').click(function(){
	// $('#pizza-container').css({'background-color': '#252b30'})
	// $('.p_content').css({'color': 'white'})
	$('.p_content').text('Andres team consists of close family, relatives, and staff that have become like family. The team is driven to deliver the best quality because of their love of the business, and most importantly, the customers.');
	$('#timeline').css({'display': 'none'});
	$('.team').show(3000);
});

$('#aboutUs').mouseover(function(){
	$('#aboutUs').css({'background-color': '#252b30', 'color': 'white'});
});

$('#aboutUs').mouseout(function(){
$('#aboutUs').css({'color': '#5b5a5b', 'background': 'white'})

});

$('#Story').mouseover(function(){
	$('#Story').css({'background-color': '#252b30', 'color': 'white'});
});

$('#Story').mouseout(function(){
$('#Story').css({'color': '#5b5a5b', 'background': 'white'})

});

$('#OurTeam').mouseover(function(){
	$('#OurTeam').css({'background-color': '#252b30', 'color': 'white'});
});

$('#OurTeam').mouseout(function(){
$('#OurTeam').css({'color': '#5b5a5b', 'background': 'white'})

});

// TIMELINE

$('l_1984').click(function(){
	$('p_1984').show(500);
	$('.p_content').text('Andres Pizza opened its first location in 1984. Our family has been making pizza from premium ingredients for your family to take home and enjoy lifes great moments.');

});

$('.l_1990').click(function(){
	$('.p_1990').show(500);
	$('.p_content').text('Second location opened in 1990. We were really proud to announce to the world that we were becomin an outstanding chain of restaurants. Our family has been making great pizza.');
	$('.l_1990').css({'background': '#252b30'})

});

$('.l_1999').click(function(){
	$('.p_1999').show(500);
	$('.p_content').text('The third location opened in 1999. This was another milestone for us. Our family has been making pizza from premium ingredients for your family to take home and enjoy.');
	$('.l_1999').css({'background': '#252b30'})
});
$('.l_2005').click(function(){
	$('.p_2005').show(500);
	$('.p_content').text('In 2005 we opened our 4rth location. The success of our chain is the reflection of hard work and love for what we do. We are proud of what we have done. Thank all customers for the support.');
	$('.l_2005').css({'background': '#252b30'})
});


});
