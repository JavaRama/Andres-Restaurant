window.onload=pageOnload;

	var noErrors = true;

	var moneyReg = /^\d*\.?\d*$/;
	var streetAddressReg = /^\d{1,5}.?\d{0,3}\s[a-zA-Z0-9]{2,30}\s[a-zA-Z]{2,15}\.?$/;
	var cityReg = /^[a-zA-Z]+((\s|\-)[a-zA-Z]+)?$/;
	var provinceReg = /^[a-zA-Z]+(\s[a-zA-Z]+)?$/;
	var nameReg = /^[a-zA-Z]+(([\'\,\.\-][a-zA-Z])?[a-zA-Z]*)*$/;
	
	var phoneReg = /[2-9]\d{2}\-\d{3}\-\d{4}/;
	
	var emailReg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
	var postalReg = /^((\d{5}-\d{4})|(\d{5})|([AaBbCcEeGgHhJjKkLlMmNnPpRrSsTtVvXxYy]\d[A-Za-z](\s|\-)?\d[A-Za-z]\d))$/;
	
	function fieldreset(fieldtoreset) {
		fieldtoreset.style.background = "white";
		document.getElementById("err_"+fieldtoreset.name).innerHTML = "";
		console.log(fieldtoreset.name + "  is valid");

	}

	function fieldfocus(fieldtofix, errorMsg) {
	//console.log(document.getElementById("err_"+fieldtofix.name));
	document.getElementById("err_"+fieldtofix.name).innerHTML = " &nbsp;&nbsp; *" +  errorMsg;
		fieldtofix.style.background = "red";
		fieldtofix.value = "";
		fieldtofix.focus();
		noErrors = false;
		console.log(fieldtofix.name + "  is invalid");

	}
	
	function validatename(namefield){
		if(namefield.value === "" || namefield.value === null || (!nameReg.test(namefield.value)))
		{
			fieldfocus(namefield, "Please enter a valid name");
			return false;
		}
		else
		{
			fieldreset(namefield);
			return true;
		}
	}
	
	function validateaddress(addressfield){
		if(addressfield.value === "" || addressfield.value === null || (!streetAddressReg.test(addressfield.value)))
		{
			fieldfocus(addressfield, "Please enter valid mailing address");
			return false;
		}
		else
		{
			fieldreset(addressfield);
			return true;
		}
	}
	
	function validatecity(cityfield){
		if(cityfield.value === "" || cityfield.value === null || (!cityReg.test(cityfield.value)))
		{
			fieldfocus(cityfield, "Please enter valid city name");
			return false;
		}
		else
		{
			fieldreset(cityfield);
			return true;
		}
	}
	
	function validateprovince(provincefield){
		if(provincefield.value === "" || provincefield.value === null || (!provinceReg.test(provincefield.value)))
		{
			fieldfocus(provincefield, "Please enter valid province/state name");
			return false;
		}
		else
		{
			fieldreset(provincefield);
			return true;
		}
	}
	
	function validatephone(phonefield){
		if(phonefield.value === "" || phonefield.value === null || (!phoneReg.test(phonefield.value)))
		{
			fieldfocus(phonefield, "Please enter a valid phone number");
			return false;
		}
		else
		{
			fieldreset(phonefield);
			return true;
		}
	}
	
	function validatemoney(moneyfield){
			//alert("Hello");

		if(moneyfield.value === "" || moneyfield.value === null || (!moneyReg.test(moneyfield.value)))
		{
			fieldfocus(moneyfield, "Please enter a valid amount (ex.50 or 70.50)");
			return false;
		}
		else
		{
			fieldreset(moneyfield);
			return true;
		}
	}
	
	function validateemail(emailfield){
		if(emailfield.value === "" || emailfield.value === null || (!emailReg.test(emailfield.value)))
		{
			fieldfocus(emailfield, "Please enter a valid email");
			return false;
		}
		else
		{
			fieldreset(emailfield);
			return true;
		}
	}
	
	function validatepostal(postalfield){
		if(postalfield.value === "" || postalfield.value === null || (!postalReg.test(postalfield.value)))
		{
			fieldfocus(postalfield, "Please enter valid US or Canadian postal code");
			return false;
		}
		else
		{
			fieldreset(postalfield);
			return true;
		}
	}
	
	function validatecountry(countryfield){
		if(countryfield.options[countryfield.selectedIndex].value === "")
		{
		document.getElementById("err_"+countryfield.name).innerHTML = " &nbsp;&nbsp; *Please select a country from the list";
		countryfield.style.background = "red";
		countryfield.focus();
		noErrors = false;
		console.log(countryfield.name + "  is invalid" + " " + noErrors);

		return false;
		}
		else
		{
			fieldreset(countryfield);
			return true;
		}
	}

//alert("Hello")
function pageOnload(){
//	alert("Hello");
	var gcform = document.gcform;
	gcform.onsubmit = processForm;
	document.getElementById("closeThankyou").onclick = function(){
		document.getElementById("overlay").style.display = "none";
		document.getElementById("thankyou").className = "inactive";
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
		}
		var inputTagsArray = document.getElementsByTagName("input");
		for (var i=0; i<inputTagsArray.length; i++)
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
  		    validateaddress(document.gcform.gcform_addr_pu);
		    validatecity(document.gcform.gcform_city_pu);
		    validateprovince(document.gcform.gcform_prov_pu);
		    validatepostal(document.gcform.gcform_postal_pu);
		    validatecountry(document.gcform.gcform_country_pu);
		    validatephone(document.gcform.gcform_phone_pu);
		    validateemail(document.gcform.gcform_email_pu);
		
		if(noErrors == true){
		document.getElementById("overlay").style.display = "block";
		document.getElementById("thankyou").className = "active";
		document.getElementById("personal_message").innerHTML = "Thank you " + document.gcform.gcform_fname_pu.value +
		 "!<br/> Your gift card will be delivered to<br/>"  + document.gcform.gcform_fname.value + " " + document.gcform.gcform_lname.value;
		}

		
		return false;
	}
}
