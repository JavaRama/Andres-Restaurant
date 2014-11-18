window.onload=pageOnload;

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
		console.log(countryfield.name + "  is invalid");
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
		
		var noErrors = true;
		
			
		noErrors = validatemoney(document.gcform.gcform_amount);
		noErrors = validatename(document.gcform.gcform_fname);
		noErrors = validatename(document.gcform.gcform_lname);
		noErrors = validateaddress(document.gcform.gcform_shipaddr);
		//validateaddress(document.gcform.gcform_shipaddr2);
		noErrors = validatecity(document.gcform.gcform_city);
		noErrors = validateprovince(document.gcform.gcform_prov);
		noErrors = validatepostal(document.gcform.gcform_postal);
		noErrors = validatecountry(document.gcform.gcform_country);
		
		noErrors = validatename(document.gcform.gcform_fname_pu);
		noErrors = validatename(document.gcform.gcform_lname_pu);
  		noErrors = validateaddress(document.gcform.gcform_addr_pu);
		//validateaddress(document.gcform.gcform_shipaddr2);
		noErrors = validatecity(document.gcform.gcform_city_pu);
		noErrors = validateprovince(document.gcform.gcform_prov_pu);
		noErrors = validatepostal(document.gcform.gcform_postal_pu);
		noErrors = validatecountry(document.gcform.gcform_country_pu);
		noErrors = validatephone(document.gcform.gcform_phone_pu);
		noErrors = validateemail(document.gcform.gcform_email_pu);
		
		if(noErrors){
		document.getElementById("overlay").style.display = "block";
		document.getElementById("thankyou").className = "active";
		document.getElementById("personal_message").innerHTML = "Thank you " + document.gcform.gcform_fname_pu.value +
		 "!<br/> Your gift card will be delivered to<br/>"  + document.gcform.gcform_fname.value + " " + document.gcform.gcform_lname.value;
		}

		
		return false;
	}
}
