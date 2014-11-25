// page onload
window.onload=pageOnload;

// document ready function
function pageOnload(){

	var contactForm = document.contactForm;
	contactForm.onsubmit = processForm;

// processing the form	
function processForm(){
		
		
		var errorSpanArray = document.contactForm.getElementsByClassName("error");
		for (var j=0; j<errorSpanArray.length; j++)
		{
			errorSpanArray[j].innerHTML = "";
			errorSpanArray[j].style.display = "none";
			console.log(errorSpanArray[j].style.display);
		}
		var inputTagsArray = document.getElementsByTagName("input");
		for (var i=0; i<inputTagsArray.length-1; i++)
		{
			inputTagsArray[i].style.background = "white";
		}
		
		var selectTagsArray = document.getElementsByTagName("select");
		for (var k=0; k<selectTagsArray.length; k++)
		{
			selectTagsArray[k].style.background = "white";
		}
		
		// errors flag
		noErrors = true;
			
		   	// validating form inputs, textarea and select using general functions
			validatename(document.contactForm.first_name);
		    validatename(document.contactForm.last_name);
		    validateselect(document.contactForm.kind_of_feedback);
		    validateemail(document.contactForm.email);
		    validatetextarea(document.contactForm.message);
		
		// if no errors are detected a screen with a summary of the info displays
		if(noErrors == true){
			
			// fetching the spans that will be holding the information provided by the user
			
			var nameOutput = document.getElementById("form_fname");
			var lastnameOutput = document.getElementById("form_name_lname");
			var emailOutput = document.getElementById("contact_form_email");
			var subjectOutput = document.getElementById("form_subject");
			var messageOutput = document.getElementById("form_comment");
			
			// displaying the info from the form insite the spans inside the summary screen
			nameOutput.innerHTML = document.contactForm.first_name.value;
			lastnameOutput.innerHTML = document.contactForm.last_name.value;
			emailOutput.innerHTML = document.contactForm.email.value;
			subjectOutput.innerHTML = document.contactForm.kind_of_feedback.value;
			messageOutput.innerHTML = document.contactForm.message.value;
			
			// makes form dissapear. This is not the same as fadeOut(). This animation does not take the form out of
			// the flow of the document
			$('form').animate({
				opacity: 0,
		
			}, 500);
		// makes summary screen appear
		$('#contact_form_summary').fadeIn(500);
		
		// close button function
		$("#close").click(function(){
			
			// makes summary screen disspear
			// fadeOut() makes the element dissapear from the flow of the content
			$('#contact_form_summary').fadeOut(500);
			
			// makes form reapper
			$('form').animate({
				opacity: 1
			}, 500);
			
		});
	}
		
		
	
		return false;
	}
}
