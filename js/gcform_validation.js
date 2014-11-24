window.onload=pageOnload;


function pageOnload(){
//	alert("Hello");
	var gcform = document.gcform;
	gcform.onsubmit = processForm;
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
		var errorSpanArray = document.gcform.getElementsByClassName("error");
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
			
		    validatemoney(document.gcform.gcform_amount);
			validatename(document.gcform.gcform_fname);
		    validatename(document.gcform.gcform_lname);
		    validateaddress(document.gcform.gcform_shipaddr);
		    validatecity(document.gcform.gcform_city);
		    validateprovince(document.gcform.gcform_prov);
		    validatepostal(document.gcform.gcform_postal);
		    validatecountry(document.gcform.gcform_country);
			validatename(document.gcform.gcform_fname_pu);
		    validatename(document.gcform.gcform_lname_pu);
		    validatephone(document.gcform.gcform_phone_pu);
		    validateemail(document.gcform.gcform_email_pu);
		if($('#gcform_payment_cc').is(":checked"))	{
			validateaddress(document.gcform.gcform_addr_pu);
		    validatecity(document.gcform.gcform_city_pu);
		    validateprovince(document.gcform.gcform_prov_pu);
		    validatepostal(document.gcform.gcform_postal_pu);
		    validatecountry(document.gcform.gcform_country_pu);
		}
		
		if(noErrors == true){
		//document.getElementById("overlay").style.display = "block";
		$('#overlay').fadeIn(500);
		//document.getElementById("thankyou").className = "active";
		$('#thankyou').fadeIn(1000);
		
		document.getElementById("personal_message").innerHTML = "Thank you " + document.gcform.gcform_fname_pu.value +
		 "!<br/> Your gift card will be delivered to<br/>"  + document.gcform.gcform_fname.value + " " + document.gcform.gcform_lname.value;
		 $('#personal_message').show(500);
		}

		
		return false;
	}
}
