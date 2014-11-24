
	var noErrors = true;

	var moneyReg = /^\d*\.?\d*$/;
	var numReg = /^([1-9]|[1-9]\d|100)$/;
	var dateReg = /^((((0[13578])|([13578])|(1[02]))[\/](([1-9])|([0-2][0-9])|(3[01])))|(((0[469])|([469])|(11))[\/](([1-9])|([0-2][0-9])|(30)))|((2|02)[\/](([1-9])|([0-2][0-9]))))[\/]\d{4}$/;

	var streetAddressReg = /^\d{1,5}.?\d{0,3}\s[a-zA-Z0-9]{2,30}\s[a-zA-Z]{2,15}\.?$/;
	var cityReg = /^[a-zA-Z]+((\s|\-)[a-zA-Z]+)?$/;
	var provinceReg = /^[a-zA-Z]+(\s[a-zA-Z]+)?$/;
	var nameReg = /^[a-zA-Z]+(([\'\,\.\-][a-zA-Z])?[a-zA-Z]*)*$/;
	
	var phoneReg = /[2-9]\d{2}\-\d{3}\-\d{4}/;
	
	var emailReg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
	var postalReg = /^((\d{5}-\d{4})|(\d{5})|([AaBbCcEeGgHhJjKkLlMmNnPpRrSsTtVvXxYy]\d[A-Za-z](\s|\-)?\d[A-Za-z]\d))$/;

$(function() {
    $( "#datepicker" ).datepicker();
  });
	
	function fieldreset(fieldtoreset) {
		var timeout;
		fieldtoreset.style.background = "white";
		var errSpanName = "#err_"+fieldtoreset.name;
		console.log(errSpanName);
        $(errSpanName).hide(600,function() {
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            $(errSpanName).html('');
        }, 300); 
		});
		//document.getElementById("err_"+fieldtoreset.name).innerHTML = "";
		console.log(fieldtoreset.name + "  is valid");
		//		console.log(errSpanName + " display: " + $(errSpanName).style.display);


	}

	function fieldfocus(fieldtofix, errorMsg) {
	//var timeout;
	//console.log(document.getElementById("err_"+fieldtofix.name));
	//document.getElementById("err_"+fieldtofix.name).innerHTML = " &nbsp;&nbsp; *" +  errorMsg;
		var errSpanName = "#err_"+fieldtofix.name;
	    $(errSpanName).html(errorMsg);
		$(errSpanName).show(600);

		//console.log(errSpanName + " display: " + $(errSpanName).css.display);
		fieldtofix.style.background = "#fdbb3b";
		fieldtofix.value = "";
		fieldtofix.focus();
		noErrors = false;
		console.log(fieldtofix.name + "  is invalid");

	}
	
	function showAddress() {
		$('#gcformli15').show(800);
	}
	
	function hideAddress() {
		$('#gcformli15').hide(800);
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
	
	function validatenum(numfield){
			//alert("Hello");

		if(numfield.value === "" || numfield.value === null || (!numReg.test(numfield.value)))
		{
			fieldfocus(numfield, "Please enter a number 1-100 without decimals");
			return false;
		}
		else
		{
			fieldreset(numfield);
			return true;
		}
	}
	
	function validatedate(datefield){
			//alert("Hello");

		if(datefield.value === "" || datefield.value === null || (!dateReg.test(datefield.value)))
		{
			fieldfocus(datefield, "Please choose a date no later then 6 months from now");
			return false;
		}
		else
		{
			fieldreset(datefield);
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
	
		function validateselect(selectfield){
		if(selectfield.options[selectfield.selectedIndex].value === "")
		{
		var errSpanName = "#err_"+selectfield.name;
		var inputFieldId = "#" + selectfield.id;
		
	    $(inputFieldId).css({'background':'#fdbb3b'});
	    $(errSpanName).html('Please select an option');
		$(errSpanName).show(800);

		//console.log(errSpanName + " display: " + $(errSpanName).css.display);
		//document.getElementById("err_"+countryfield.name).innerHTML = " &nbsp;&nbsp; *Please select a country from the list";
		//countryfield.style.background = "red";
		selectfield.focus();
		noErrors = false;
		console.log(selectfield.name + "  is invalid" + " " + noErrors);

		return false;
		}
		else
		{
			fieldreset(selectfield);
			return true;
		}
	}
	
	function validatecountry(countryfield){
		if(countryfield.options[countryfield.selectedIndex].value === "")
		{
		var errSpanName = "#err_"+countryfield.name;
		var inputFieldId = "#" + countryfield.id;
		
	    $(inputFieldId).css({'background':'#fdbb3b'});
	    $(errSpanName).html('Please select a country');
		$(errSpanName).show(800);

		//console.log(errSpanName + " display: " + $(errSpanName).css.display);
		//document.getElementById("err_"+countryfield.name).innerHTML = " &nbsp;&nbsp; *Please select a country from the list";
		//countryfield.style.background = "red";
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
	
//http://stackoverflow.com/questions/11787665/making-sure-at-least-one-checkbox-is-checked
		function validatecheckboxgroup(chkboxgroup){
		var checkedAtLeastOne = false;
		$('input[name="'+ chkboxgroup +'"]').each(function() {
			if ($(this).is(":checked")) {
				checkedAtLeastOne = true;
			}
		});
		}

