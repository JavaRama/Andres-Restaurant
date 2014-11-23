$(document).ready(function(e) {
	// fetches and stores the window width in pixels
	var windowWidth = $(window).width();

	// variable to display picked topping one by one
	var i = 0;

	// var score win
	var win = 0;

	// var score lose
	var lose = 0;

	// ======= Objects for different Topping
	// isHealthy boolean variable will be usefull to rigg the game

	var anchovies = {
		name : "Anchovies",
		image : "images/anchovies_opt.png",
		checkMark : "images/green_check_mark.png",
		isHealthy : true
	};

	var chicken = {
		name : "Chicken",
		image : "images/chicken_opt.png",
		checkMark : "images/green_check_mark.png",
		isHealthy : true
	};

	var fireAnts = {
		name : "Fire Ants",
		image : "images/fireants_opt.png",
		checkMark : "images/x_red_mark.png",
		isHealthy : false
	};

	var hotPeppers = {
		name : "Hot Peppers",
		image : "images/hotpeppers_opt.png",
		checkMark : "images/green_check_mark.png",
		isHealthy : true
	};

	var tomatoes = {
		name : "Tomatoes",
		image : "images/tomatoes_opt.png",
		checkMark : "images/green_check_mark.png",
		isHealthy : true
	};

	var oldShoe = {
		name : "An old shoe",
		image : "images/oldshoe_opt.png",
		checkMark : "images/x_red_mark.png",
		isHealthy : false
	};

	var pepperoni = {
		name : "Pepperoni",
		image : "images/pepperoni_opt.png",
		checkMark : "images/green_check_mark.png",
		isHealthy : true
	};

	var mushrooms = {
		name : "Mushrooms",
		image : "images/mushroom_opt.png",
		checkMark : "images/green_check_mark.png",
		isHealthy : true
	};

	var cheese = {
		name : "Extra Cheese",
		image : "images/cheese_opt.png",
		checkMark : "images/green_check_mark.png",
		isHealthy : true
	};

	var bacon = {
		name : "Bacon",
		image : "images/bacon_opt.png",
		checkMark : "images/green_check_mark.png",
		isHealthy : true
	};

	// food objects array

	var foodArray = [bacon, mushrooms, pepperoni, oldShoe, tomatoes, fireAnts, hotPeppers, anchovies, chicken, cheese];

	// empty array to put foods objects picked by the user
	var foodPicks = [];

	//# food in foodPicks array that are healthy
	var healthyFoodPicks = 0;

	// Game reset function. It automatically resets the game after the user has picked 5 toppings
	function gameReset() {
		setTimeout(function() {
			// reset background images
			$('#grid li.empty_cell').css({

				'background-image' : 'none'

			});

			// reset length of food picks
			foodPicks.length = 0;

			// reset healthyFoodPicks
			healthyFoodPicks = 0;

			// reset index counter
			i = 0;

			// remove list of toppings on reset
			$("#output_food li").remove();

			// put the default image again on the cells
			$('#grid li.empty_cell').html("<img src='images/logo_game.jpg' />");

		}, 2000);

	}// end reset game function

	// Game restart function. It resets all values to the initial state when the game is over
	function gameRestart() {
		
		// I am using all the resets from gameReset + a new ones
		gameReset();

		// reset var score win to 0
		win = 0;

		// reset var score lose to 0
		lose = 0;

		// display won = 0 and lost = 0 in webpage
		$('.win').html('GOOD PIZZA: 0');
		$('.lose').html('BAD PIZZA: 0');

		//moving the restart screen away from the main page

		$("#final_output").animate({

			left : -(windowWidth)

		}, 2000, "linear");

	};


	// ======= CLIKING THE CELLS ==========
	$('#grid li.empty_cell').click(function() {
		
		
		// check if clicked cell has a background image. This prevents the user from running the code twice on the same cell
		if ($(this).css('background-image') === 'none') {

			//condition checker for while loop
			var x = false;
			
			// this while loop will only work until the user has clicked on 5 cells
			while ( x === false && (foodPicks.length < 5)) {
				
				// Generate Random indexes from 0 to 10 on click
				var foodSelected = foodArray[(Math.floor(Math.random() * (foodArray.length )))];
				
				// if statement that riggs the game
				// the code will run if the toppings are not into the foodPicks array AND
				// checks if the user has won less that 2 times. If you have won 2 times, then check how many healthy food the user has
				// if the user is about to win a third time, then it forces the code to run until it picks an object that has a property
				// of isHealthy === false, making the user lose no matter what from that moment.
				if ((foodPicks.indexOf(foodSelected) === -1) && (win < 2 || healthyFoodPicks < 3 || foodSelected.isHealthy === false)) {
					
					// pushes the selected object into foodPicks array
					foodPicks.push(foodSelected);
					
					// counts the ammount of healthy food the user has picked
					if (foodSelected.isHealthy){
						healthyFoodPicks++;
					}
					
					// when topping is picked it displays the correspondent background image
					$(this).css({
						'background-image' : 'url(' + foodPicks[i].image + ')',
						'background-repeat' : 'no-repeat'
					});

					// get rid of logo image so background image can be seen
					$("img", this).remove();

					// output food selected. Appending <li> elements and topping names and checkmarks

					$("#output_food").append("<li>" + foodPicks[i].name + "<span style=background-image:url(" + foodPicks[i].checkMark + ");>" + "</span>" + "</li>");

					// incrementer of foodPicks index
					i++;

					//flag for successful food pick
					x = true;

					// Displays the results depending if you got the old shoe or fire ant or not of them (good pizza)
					if (foodPicks.length === 5 && (foodPicks.indexOf(oldShoe) === -1 || foodPicks.indexOf(fireAnts) === -1 )) {

						$(".win").html("GOOD PIZZA: " + (win + 1));
						win++;
						gameReset();
						
					// displays the result if you got two bad topping (bad pizza)
					} else if ((foodPicks.length === 5 && (foodPicks.indexOf(oldShoe) != -1 && foodPicks.indexOf(fireAnts) != -1 ) )) {

						$(".lose").html("BAD PIZZA: " + (lose + 1));
						lose++;
						gameReset();

					};

				} // end if statement

			} // end while statement

		}// end if statement checking if there is a background image

		// When the user loses, the restart screen shows up
		if (lose === 3) {

			// display restart screen over grid, so the cell can't be clicked anymore
			// and forces the user to restart the game

			$("#final_output").animate({

				left : "25"

			}, 2000, "linear");

			// restarting the game on button click
			$("#restart_game").click(function() {

				// calling the RestartGame function
				gameRestart();

			});
			// end restart game on click

		}; // end  if statement for losing 3 times

	});
	// end click function
});
// end document.ready
