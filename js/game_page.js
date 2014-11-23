$(document).ready(function(e) {
	
	// fetches and stores the window width in pixels
	var windowWidth = $(window).width();
	
	// getting the cells from the game
	var cell1 = $("#cell_1");
	var cell2 = $("#cell_2");
	var cell3 = $("#cell_3");
	var cell4 = $("#cell_4");
	var cell5 = $("#cell_5");
	var cell6 = $("#cell_6");
	var cell7 = $("#cell_7");
	var cell8 = $("#cell_8");
	var cell9 = $("#cell_9");
	var cell10 = $("#cell_10");
	
	// storing each cell of the grid
	var cellArray = [cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9, cell10,];
	
	// dinamically moving the <li> elements out of the view depending on the window's widht
	$("#grid li").css({
			
			left: -(windowWidth),
		
		});
	
	// for loop to put the grid cell back into the page
	
	for(var c = 0; c < 10; c++){
		
		var cellRetrieved = cellArray[c];
			
			// it cell gets a random animation timing to create a cascading effect
			// when they move into the screen
			cellRetrieved.animate({
				
				left: "0"
				
				}, Math.floor(Math.random() * (1000) + 400 ) , "linear"); // end animate function
				
				
		};
		
	// hide restart screen.
		
		$("#final_output").css({
			
			left: -(windowWidth)
		
		});
	
	
}); // end document ready
