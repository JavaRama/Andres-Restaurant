//Creates an onload function
window.onload = function(){
//Used the date function to get the day and month
var dateVar = new Date();
changedDate = dateVar.getDay();
changedMonth = dateVar.getMonth();
console.log(changedDate);
//Shows the Current day on the page
document.getElementById("date").innerHTML =  week(changedDate) + " , " + month(changedMonth) + " " + dateVar.getDate();

//Using JQUERY to hide the weeklys specials tab
$('#week-title').click(function(){
	$('#weekly-specials').toggle(3000);
});

}

//Creates a function that updates information based on what day it is
function week(day)
{
	//Create an object of each day that holds a specific appetizer, entree and dessert accordingly
	var monday = {
	app : "Wood Oven Buffalo Chicken Wings",
	dApp:"1lbs of wings served with crudlite and cilantro lime sour cream.",
	entree: " Fingerling Potato ",
	dEntree: "Fingerling potatoes, pancetta, four cheese sauce, smoked mozzarella, asiago, parmesean, fresh herbs.",
	dessert: "Mango Gelato"
	};
	var tuesday = {
	app : "P .Za. Pie Salad",
	dApp: "Mixed greens, toasted pinenutes, parmesan, over roasted tomatoes, balsamic vinaigrette.",
	entree: " Cajun Chicken",
	dEntree: "Cajun Chicken, red onion, spinach, roasted tomato, brie, mozzarella with garlic infused oil. ",
	dessert: "Vanilla Gelato"
	};
	var wednesday = {
	app : "Roasted Pear & Goat Cheese Salad",
	dApp: "Arugula, mixed greens, roasted pear, oven roasted tomatoes, goat cheese, candied walnuts, balsamic vinaigrette. ",
	entree: " Italian Sausage ",
	dEntree: "Italian sausage, roasted red peppers, caramelized vidalia onion, tomato sauce and mozzarella.",
	dessert: "Lindt Chocolate Gelato"
	};
	var thursday = {
	app : " Wood Oven Buffalo Chicken Wings",
	dApp:"1lbs of wings served with crudlite and cilantro lime sour cream.",
	entree: " Grilled Shrimp",
	dEntree: "Grilled Shrimp, fresh asparagus, double smoked bacon, caramelized vidalia onion, four cheese sauce.",
	dessert: "Mango Gelato"
	};
	var friday = {
	app : "Sambuca Skillet Shrimp", 
	dApp: "Sizzling tiger shrimp, prosciutto, fresh basil, and chilli flakes in a samubca tomato cream served with crispy baguette. ",
	entree: " Smoked Chicken",
	dEntree: "smoked chicken breast, grilled vegetables, panoetta, roasted garlic tomato sauce, mozzarella, gorgonzola.",
	dessert: "New York Cheescake"
	};
	var saturday = {
	app : "Roasted Pear & Goat Cheese Salad",
	dApp: "Arugula, mixed greens, roasted pear, oven roasted tomatoes, goat cheese, candied walnuts, balsamic vinaigrette. ",
	entree: " Build Your Own Pizza ",
	dEntree: "Select up to five of our delicious toppings, choice of dough (whole wheat, basil, gluten free), and sauce (white with garlic, basil, rosemary, or chilli infused oil).",
	dessert: "Mango Gelato"
	};
	var sunday = {
	app : "P .Za. Pie Salad",
	dApp: "Mixed greens, toasted pinenutes, parmesan, over roasted tomatoes, balsamic vinaigrette.",
	entree: " Build Your Own Pizza",
	dEntree: "Select up to five of our delicious toppings, choice of dough (whole wheat, basil, gluten free), and sauce (white with garlic, basil, rosemary, or chilli infused oil).",
	dessert: "Vanilla Gelato"
	};
	
	//By getting the day of the week, used a switch statement and depending on the day, a object is called
	switch(day)
	{
		case 0:
			document.getElementById("app").innerHTML = sunday.app;
			document.getElementById("dApp").innerHTML = sunday.dApp;
			document.getElementById("entree").innerHTML = sunday.entree;
			document.getElementById("dEntree").innerHTML = sunday.dEntree;
			document.getElementById("dessert-item").innerHTML = sunday.dessert;
			return "Sunday";		
			break;
		case 1:
			document.getElementById("app").innerHTML = monday.app;
			document.getElementById("dApp").innerHTML = monday.dApp;
			document.getElementById("entree").innerHTML = monday.entree;
			document.getElementById("dEntree").innerHTML = monday.dEntree;
			document.getElementById("dessert-item").innerHTML = monday.dessert;
			return "Monday";
			break;
		case 2:
			document.getElementById("app").innerHTML = tuesday.app;
			document.getElementById("dApp").innerHTML = tuesday.dApp;
			document.getElementById("entree").innerHTML = tuesday.entree;
			document.getElementById("dEntree").innerHTML = tuesday.dEntree;
			document.getElementById("dessert-item").innerHTML = tuesday.dessert;
			return "Tuesday";
			break;
		case 3:
			document.getElementById("app").innerHTML = wednesday.app;
			document.getElementById("dApp").innerHTML = wednesday.dEpp;			
			document.getElementById("entree").innerHTML = wednesday.entree;
			document.getElementById("dEntree").innerHTML = wednesday.dEntree;
			document.getElementById("dessert-item").innerHTML = wednesday.dessert;
			return "Wednesday"
			break;		
		case 4:
			document.getElementById("app").innerHTML = thursday.app;
			document.getElementById("dApp").innerHTML = thursday.dApp;
			document.getElementById("entree").innerHTML = thursday.entree;
			document.getElementById("dEntree").innerHTML = thursday.dEntree;
			document.getElementById("dessert-item").innerHTML = thursday.dessert;
			return "Thursday";
			break;
		case 5:
			document.getElementById("app").innerHTML = friday.app;
			document.getElementById("dApp").innerHTML = friday.dApp;
			document.getElementById("entree").innerHTML = friday.entree;
			document.getElementById("dEntree").innerHTML = friday.dEntree;
			document.getElementById("dessert-item").innerHTML = friday.dessert;
			return "Friday";
			break;
		case 6:
			document.getElementById("app").innerHTML = saturday.app;
			document.getElementById("dApp").innerHTML = saturday.dApp;
			document.getElementById("entree").innerHTML = saturday.entree;
			document.getElementById("dEntree").innerHTML = saturday.dEntree;
			document.getElementById("dessert-item").innerHTML = saturday.dessert;
			return "Saturday";
			break;
	}
}
//Creates a function to convert the number of the month to text
function month (whichMonth)
{
	switch (whichMonth)
	{
		case 0:
			return "January";
			break;
		case 1:
			return "February";
			break;
		case 2:
			return "March";
			break;
		case 3:
			return "April"
			break;		
		case 4:
			return "May";
			break;
		case 5:
			return "June";
			break;
		case 6:
			return "July";
			break;
		case 7:
			return "August";
			break;
		case 8:
			return "September";
			break;
		case 9:
			return "October";
			break;
		case 10:
			return "November"
			break;		
		case 11:
			return "December";
			break;

	}
}
