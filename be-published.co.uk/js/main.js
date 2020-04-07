// Validation Scripts //
 $( document ).ready(function() {
       $("input[type='text'],input[type='tel'],input[type='email'],form select").each(function () {
    //$(this).bind("change paste keyup", function() {
	$(this).bind("blur", function() {
  validateField(this);
});
});
    });

//===[+]Deck Scripts[+]===//
function setTier(currentStep)
{
	for(var ctr=1;ctr<=3;ctr++)
	{
		if(ctr==currentStep)
		{
			$('#Tier' + currentStep).css({'display': ''});
			$('#bullet'+ctr).addClass('active-bullet');
		}
		else
		{
			$('#Tier' + ctr).css({'display': 'none'});
			$('#bullet'+ctr).removeClass('active-bullet');
		}
	}
}
//===[-]Deck Scripts[-]===//

//===[+]Country Scripts[+]===//
function validate_country() 
{
	var country_id  = $('#lead_country_id').val();
	var statesArr   = ["USA","CAN","OTHER"];
	var HasNoShown  = true;
	
	for(var ctr=0;ctr<statesArr.length;ctr++)
	{
		var stateID = jQuery("#state_"+statesArr[ctr]);
		if(country_id==statesArr[ctr] || (ctr==statesArr.length-1 && HasNoShown))
		{
			//Show Dropdown button
			stateID.attr('disabled', false);
			stateID.attr('hidden',false);
			stateID.addClass('form-control');
			HasNoShown = false;
		}
		else
		{
			//Hide Dropdown button
			stateID.attr('disabled', true);
			stateID.attr('hidden',true);
			stateID.removeClass('form-control');
		}
	}
}
//===[-]Country Scripts[-]===//

//===[+]Tier Validation Scripts[+]===//
function validateTier(CurrentTier,IsLastTier)
{
	var emptyCount = 0;
	$("#Tier"+CurrentTier+" :input").each(function(e)
	{	
		emptyCount += validateField(this);

		if(emptyCount==1)
		{
			this.focus();
			emptyCount++;
		}
	});
	
	//If all Fields are filled up
	if(emptyCount==0||false) 
	{
		if(IsLastTier){
			//alert("Processing...");
			$("button[id=myBtn]").attr("disabled", "disabled").html('Processing...').css("background-color", "#DDD");
			$('#NewLead').submit();
		}
		else
		{
			setTier(CurrentTier+1);
		}
	}
	return false;
}
function validateField(obj)
{
	var emptyCount = 0;
	var errMsg = "";
	//var stateID = $("#Err"+obj.name.toString());
	$(obj).prev().remove("span");
	
	
	var arrMinMax = obj.name.replace("]","").split("__r");
	if(arrMinMax.length>1)
		arrMinMax = arrMinMax[1].split("___");

	var isSpecialValidationResult = isSpecialValidation(obj);
	if(obj.name.indexOf("__r")>=0&&(obj.value.trim()==''))
	{
		$(obj).addClass('x-error');
		errMsg = "This field is required"
		emptyCount++;
	}
	else if(obj.name.indexOf("___")>=0&&obj.value.length < arrMinMax[0])
	{
		$(obj).addClass('x-error');
		errMsg = "Minimum of "+ arrMinMax[0] +" characters("+obj.value.length+")";
		
		emptyCount++;
	}
	else if(obj.name.indexOf("___")>=0&&obj.value.length > arrMinMax[1])
	{
		$(obj).addClass('x-error');
		errMsg = "Maximum of "+ arrMinMax[1] +" characters("+obj.value.length+")";
		
		emptyCount++;
	}
	else if(isSpecialValidationResult!=0)
	{	
		$(obj).addClass('x-error');
	
		var arrErrMsg = ["Invalid Email", "Invalid Phone Number"];
		errMsg = arrErrMsg[isSpecialValidationResult-1];
		emptyCount++;
	}
	else
	{
		$(obj).removeClass('x-error');
		$(obj).parent().removeClass('select-error');
		
	}
		
		//Display the Error Message
		if(emptyCount==1) {
		$(obj).before( "<span class='validation-message'>"+errMsg+"</span>" );
		$(obj).parent().addClass('select-error');			
		}
		
		return emptyCount;
}

//Special validation for Phone or Email field
function isSpecialValidation(obj)
{
	var result   = 0;
	var regPhone = /^(?:1[-.\s]?)?\(?([0-9]{3})\)?[-.\s]?([0-9][\-\(\)\s]|[\d]){7,12}(?:\x.[0-9]+)?$/;
	var regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	
	if(obj.type=='email')
		result = !regEmail.test(obj.value) ? 1 : 0;
	else if(obj.type=='tel')
		result = !regPhone.test(obj.value) ? 2 : 0;

	return result;
}
function disableButton()
{
	var x = document.getElementById("myBtn");
    x.disabled = true;
}
//===[+]Tier Validation Scripts[+]===//

// End of Validation Scripts //