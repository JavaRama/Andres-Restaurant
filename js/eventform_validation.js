window.onload=pageOnload;


function pageOnload(){
//	alert("Hello");
	var eventform = document.eventform;
	eventform.onsubmit = processForm;
	document.getElementById("closeThankyou").onclick = function(){
		document.getElementById("overlay").style.display = "none";
		$('#thankyou').fadeOut(500);
		//document.getElementById("thankyou").className = "inactive";
	}
	console.log.clear;
	

//-----------------------------------------------------------------------


//-----------------------------------------------------------------------

    function processForm(){
	//		alert("Hello");
		var errorSpanArray = document.eventform.getElementsByClassName("error");
		for (var j=0; j<errorSpanArray.length; j++)
		{
			errorSpanArray[j].innerHTML = "";
			//$("#"+errorSpanArray[j].name).css.display;
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
		
		noErrors = true;
			
		    validatenum(document.eventform.gcform_num);
		    validatedate(document.eventform.datepicker);
			validatename(document.eventform.gcform_fname);
		    validatename(document.eventform.gcform_lname);
		    validateaddress(document.eventform.gcform_shipaddr);
		    validatecity(document.eventform.gcform_city);
		    validateprovince(document.eventform.gcform_prov);
		    validatepostal(document.eventform.gcform_postal);
		    validatecountry(document.eventform.gcform_country);
			validatecheckboxgroup('services');
		    validatephone(document.eventform.gcform_phone_pu);
		    validateemail(document.eventform.gcform_email_pu);
		
		
		if(noErrors == true){
		//document.getElementById("overlay").style.display = "block";
		$('#overlay').fadeIn(500);
		//document.getElementById("thankyou").className = "active";
		$('#thankyou').fadeIn(1000);
		
		document.getElementById("personal_message").innerHTML = "Thank you " + document.eventform.gcform_fname.value +
		 "!<br/> You successfully booked your event for<br/>" + document.eventform.datepicker.value;
		 $('#personal_message').show(500);
		}

		
		return false;
	}
}
