/*

	Rotations for icon screenshots:

	CHARACTERS:
		x:	-309
		y:	0
		z:	-21

	BORDERS:
		x:	-290
		y:	-0
		z:	-45




*/




// div containers
var plate 				= null;
var regBlack 			= null;
var regColour 			= null;
var borderBlack 		= null;
var borderColour 		= null;
var badge 				= null;
var badgeFourdBottom 	= null;
var bsau 				= null;
var scale 				= 1.87;

// Tab globals 
var currentTab 					= "plate-sizes-options";
var previousTab 				= null;
var currentHighlitedTab 		= "plate-sizes-tab";
var previousHighlightedTab 		= null;

// Settings globals
var characterSpacing 			= "road legal spacing";
var customerVrm					= "YOUR REG";

// Plate globals 
var g_frontPlate 				= "standard oblong";
var g_rearPlate 				= "standard oblong";
var g_currentPlate 				= "front";				// front / rear

// Character type globals.

/*
*	NOTES: 
*
*	'g_characterType' can be initialised with a value from $_GET['charactertype'] so we can set the default character type. If that variable has already been initialised in index.php, don't set it again here.
*
*/
if(g_characterType == undefined)
{
	var g_characterType = "krystal 4d";
}

var g_krystalCharacterColour	= "red";

// Badge globals
var g_badgeStatus 				= false;	// true/false
var g_badgeType					= null;		// 4D, printed
var g_badgeName 				= null;		// england, scotland, etc.
var g_badgeNiceName 			= null;		// England (4d), Wales (Printed), etc.

// Border globals
var g_borderStatus				= false;	// true/false
var g_borderColour 				= null;		// red, green, etc.
var g_borderType				= null;		// krystal, printed


window.addEventListener("load", winLoaded, false);
window.addEventListener("load", checkControlsPosition, false);
window.addEventListener("resize", checkControlsPosition, false);

function winLoaded()
{
	// Init preview
	document.getElementById("xrotation").addEventListener("input", function(){changeRotate3D(this.value, null, null)}, false);
	document.getElementById("zrotation").addEventListener("input", function(){changeRotate3D(null, null, this.value)}, false);
	document.getElementById("yrotation").addEventListener("input", function(){changeRotate3D(null, this.value, null)}, false);

	let x = Number(document.getElementById("xrotation").value);
	let y = 0;
	let z = Number(document.getElementById("zrotation").value);

	plate 				= document.getElementById("plate").children;
	regBlack 			= document.getElementById("reg-3mm-black").children;
	regColour 			= document.getElementById("reg-3mm-colour").children;
	borderBlack 		= document.getElementById("border-3mm-black").children;
	borderColour 		= document.getElementById("border-3mm-colour").children;
	badge 				= document.getElementById("badge").children;
	badgeFourdBottom 	= document.getElementById("badge-fourd-bottom").children;
	supplierDetails		= document.getElementById("supplier-details").children;
	bsau 				= document.getElementById("bsau").children;

	addControlsEvents();

	for(var i = 0; i < plate.length; i++)				{plate[i].style.transform 				= "rotate3d(1, 0, 0, " + x + "deg) rotate3d(0, 1, 0, " + y + "deg) rotate3d(0, 0, 1, " + z + "deg) scale(" + scale + ")";}
	for(var i = 0; i < regBlack.length; i++)			{regBlack[i].style.transform 			= "rotate3d(1, 0, 0, " + x + "deg) rotate3d(0, 1, 0, " + y + "deg) rotate3d(0, 0, 1, " + z + "deg) scale(" + scale + ")";}
	for(var i = 0; i < regColour.length; i++)			{regColour[i].style.transform			= "rotate3d(1, 0, 0, " + x + "deg) rotate3d(0, 1, 0, " + y + "deg) rotate3d(0, 0, 1, " + z + "deg) scale(" + scale + ")";}
	for(var i = 0; i < borderBlack.length; i++)			{borderBlack[i].style.transform 		= "rotate3d(1, 0, 0, " + x + "deg) rotate3d(0, 1, 0, " + y + "deg) rotate3d(0, 0, 1, " + z + "deg) scale(" + scale + ")";}
	for(var i = 0; i < borderColour.length; i++)		{borderColour[i].style.transform 		= "rotate3d(1, 0, 0, " + x + "deg) rotate3d(0, 1, 0, " + y + "deg) rotate3d(0, 0, 1, " + z + "deg) scale(" + scale + ")";}
	for(var i = 0; i < badge.length; i++)				{badge[i].style.transform 				= "rotate3d(1, 0, 0, " + x + "deg) rotate3d(0, 1, 0, " + y + "deg) rotate3d(0, 0, 1, " + z + "deg) scale(" + scale + ")";}
	for(var i = 0; i < badgeFourdBottom.length; i++)	{badgeFourdBottom[i].style.transform 	= "rotate3d(1, 0, 0, " + x + "deg) rotate3d(0, 1, 0, " + y + "deg) rotate3d(0, 0, 1, " + z + "deg) scale(" + scale + ")";}
	for(var i = 0; i < supplierDetails.length; i++)		{supplierDetails[i].style.transform 	= "rotate3d(1, 0, 0, " + x + "deg) rotate3d(0, 1, 0, " + y + "deg) rotate3d(0, 0, 1, " + z + "deg) scale(" + scale + ")";}
	for(var i = 0; i < bsau.length; i++)				{bsau[i].style.transform 				= "rotate3d(1, 0, 0, " + x + "deg) rotate3d(0, 1, 0, " + y + "deg) rotate3d(0, 0, 1, " + z + "deg) scale(" + scale + ")";}
}

function changeRotate3D(x, y, z)
{
	if(!x) var x = Number(document.getElementById("xrotation").value);
	if(!y) var y = Number(document.getElementById("yrotation").value);
	if(!z) var z = Number(document.getElementById("zrotation").value);
	
	for(var i = 0; i < plate.length; i++)				{plate[i].style.transform 				= "rotate3d(1, 0, 0, " + x + "deg) rotate3d(0, 1, 0, " + y + "deg) rotate3d(0, 0, 1, " + z + "deg) scale(" + scale + ")";}
	for(var i = 0; i < regBlack.length; i++)			{regBlack[i].style.transform 			= "rotate3d(1, 0, 0, " + x + "deg) rotate3d(0, 1, 0, " + y + "deg) rotate3d(0, 0, 1, " + z + "deg) scale(" + scale + ")";}
	for(var i = 0; i < regColour.length; i++)			{regColour[i].style.transform 			= "rotate3d(1, 0, 0, " + x + "deg) rotate3d(0, 1, 0, " + y + "deg) rotate3d(0, 0, 1, " + z + "deg) scale(" + scale + ")";}
	for(var i = 0; i < borderBlack.length; i++)			{borderBlack[i].style.transform 		= "rotate3d(1, 0, 0, " + x + "deg) rotate3d(0, 1, 0, " + y + "deg) rotate3d(0, 0, 1, " + z + "deg) scale(" + scale + ")";}
	for(var i = 0; i < borderColour.length; i++)		{borderColour[i].style.transform 		= "rotate3d(1, 0, 0, " + x + "deg) rotate3d(0, 1, 0, " + y + "deg) rotate3d(0, 0, 1, " + z + "deg) scale(" + scale + ")";}
	for(var i = 0; i < badge.length; i++)				{badge[i].style.transform 				= "rotate3d(1, 0, 0, " + x + "deg) rotate3d(0, 1, 0, " + y + "deg) rotate3d(0, 0, 1, " + z + "deg) scale(" + scale + ")";}
	for(var i = 0; i < badgeFourdBottom.length; i++)	{badgeFourdBottom[i].style.transform 	= "rotate3d(1, 0, 0, " + x + "deg) rotate3d(0, 1, 0, " + y + "deg) rotate3d(0, 0, 1, " + z + "deg) scale(" + scale + ")";}
	for(var i = 0; i < supplierDetails.length; i++)		{supplierDetails[i].style.transform 	= "rotate3d(1, 0, 0, " + x + "deg) rotate3d(0, 1, 0, " + y + "deg) rotate3d(0, 0, 1, " + z + "deg) scale(" + scale + ")";}
	for(var i = 0; i < bsau.length; i++)				{bsau[i].style.transform 				= "rotate3d(1, 0, 0, " + x + "deg) rotate3d(0, 1, 0, " + y + "deg) rotate3d(0, 0, 1, " + z + "deg) scale(" + scale + ")";}
}



function addControlsEvents()
{
	// Controls events
	var labels 			= document.getElementById("options-nav").children;
	var switchFront 	= document.getElementById("front-plate-switch");
	var switchRear 		= document.getElementById("rear-plate-switch");
	var characterTypes 	= document.getElementById("character-type-selection").children;
	var krystalColours 	= document.getElementById("krystal-colours-selection").children;
	var borders 		= document.getElementById("krystal-border-selection").children;
	var badges 			= document.getElementById("badge-selection").children;
	var frontPlates 	= document.getElementById("front-plate-selection");
	var rearPlates 		= document.getElementById("rear-plate-selection");
	var spinnerLoaders	= document.getElementsByClassName("loading-spinner");

	switchFront.addEventListener("click", function(){switchPlate("front")}, false);
	switchRear.addEventListener("click",  function(){switchPlate("rear")}, false);

	for(var i = 0; i < characterTypes.length; i++)
	{
		characterTypes[i].getElementsByTagName("input")[0].addEventListener("change", changeCharacterType, false);		
	}

	for(var i = 0; i < krystalColours.length; i++)
	{
		krystalColours[i].getElementsByTagName("input")[0].addEventListener("change", function(){changeKrystalColour(this.value.toString())}, false);
	}

	for(var i = 0; i < borders.length; i++)
	{
		borders[i].getElementsByTagName("input")[0].addEventListener("change", function(){changeBorder(this.value.toString(), this.getAttribute("data-border-type"));}, false);
	}

	for(var i = 0; i < badges.length; i++)
	{
		badges[i].getElementsByTagName("input")[0].addEventListener("change", function(){changeBadge(this.getAttribute("data-custom-value").toString().toLowerCase(), this.getAttribute("data-badge-type"), this.value);}, false);
	}

	for(var i = 0; i < labels.length; i++)
	{
		labels[i].addEventListener("click", function(e){switchTabs(this.getAttribute("data-option"), this.getAttribute("id"))}, false);
	}

	// On small screens, don't switch to the 1st tab by default, or it blocks the view of the preview.
	if(window.innerWidth > 1060)
	{
		switchTabs("plate-sizes-options", "plate-sizes-tab", true);
	}

	frontPlates.addEventListener("change", function(){changeFrontPlate(this.value.toString().toLowerCase());}, false);
	rearPlates.addEventListener("change", function(){changeRearPlate(this.value.toString().toLowerCase());}, false);

	document.getElementById("close-plate-sizes-options-tab").addEventListener("click", function(){closeCurrentTab("plate-sizes-options", "plate-sizes-tab")}, false);
	document.getElementById("close-character-type-options-tab").addEventListener("click", function(){closeCurrentTab("character-type-options", "character-type-tab")}, false);
	document.getElementById("close-krystal-colours-options-tab").addEventListener("click", function(){closeCurrentTab("krystal-colours-options", "krystal-colours-tab")}, false);
	document.getElementById("close-border-options-tab").addEventListener("click", function(){closeCurrentTab("border-options", "border-tab")}, false);
	document.getElementById("close-badge-options-tab").addEventListener("click", function(){closeCurrentTab("badge-options", "badge-tab")}, false);

	document.getElementById("user-vrm").addEventListener("input", function(){updateVrm(this.value)}, false);
	document.getElementById("character-spacing-selection").addEventListener("change", updateCharacterSpacing, false);

	document.getElementById("blackout").addEventListener("click", closeBlackout, false);
	document.getElementById("close-blackout").addEventListener("click", closeBlackout, false);


	document.getElementById("change-angle-default").addEventListener("click", function(){changeAngle("default")}, false);
	document.getElementById("change-angle-1").addEventListener("click", function(){changeAngle("view1")}, false);
	document.getElementById("change-angle-2").addEventListener("click", function(){changeAngle("view2")}, false);
	document.getElementById("change-angle-3").addEventListener("click", function(){changeAngle("view3")}, false);
	document.getElementById("change-angle-4").addEventListener("click", function(){changeAngle("view4")}, false);
	document.getElementById("change-angle-5").addEventListener("click", function(){changeAngle("view5")}, false);

	window.addEventListener("mouseup", globalMouseUp, false);

	document.getElementById("krystal-4d-explainer").addEventListener("click", function(){showImg("krystal-4d-explainer-img")}, false);
	document.getElementById("krystal-gel-explainer").addEventListener("click", function(){showImg("krystal-gel-explainer-img")}, false);
	
	/*
	document.getElementById("krystal-4d-gel-explainer").addEventListener("click", function(){showImg("krystal-4d-gel-explainer-img")}, false);
	*/
	
	document.getElementById("4d-3mm-explainer").addEventListener("click", function(){showImg("4d-3mm-explainer-img")}, false);
	document.getElementById("4d-5mm-explainer").addEventListener("click", function(){showImg("4d-5mm-explainer-img")}, false);
	
	/*
	document.getElementById("4d-3mm-gel-explainer").addEventListener("click", function(){showImg("4d-3mm-gel-explainer-img")}, false);
	document.getElementById("4d-5mm-gel-explainer").addEventListener("click", function(){showImg("4d-5mm-gel-explainer-img")}, false);
	*/	

	document.getElementById("3d-gel-explainer").addEventListener("click", function(){showImg("3d-gel-explainer-img")}, false);
	document.getElementById("character-spacing-explainer").addEventListener("click", function(){showImg("character-spacing-explainer-img")}, false);

	document.getElementById("character-spacing-selection").addEventListener("change", warnShowplates, false);

	document.getElementById("submit-the-order-form").addEventListener("click", doOrderFormSubmission, false);



	for(var i = 0; i < spinnerLoaders.length; i++)
	{
		spinnerLoaders[i].style.display = "none";
		spinnerLoaders[i].style.visibility = "hidden";
		spinnerLoaders[i].style.zIndex = "-100";
	}


	if(g_characterType == "krystal 4d") 	document.getElementById("krystal-4d").click();
	else if(g_characterType == "4d 3mm") 	document.getElementById("fourd-3mm").click();
	else if(g_characterType == "3d gel") 	document.getElementById("threed-gel").click();

	updatePrice();
}

function warnShowplates()
{
	if(this.value == "spacing as i've typed above")
	{
		document.getElementById("dialog-confirm-message").innerHTML = "If you customise the character spacing, your plates may not be road legal. If you choose this option and also enter non-legal spacing, your plates will be sold as show plates and are not for road use. They will not contain legal markings and you risk being fined if you put them on your car.<br/><br/>If you want road legal plates, use the road legal spacing option.<br/><br/>If you want a show plate or a sign, keep this option selected.";

		(function($){$(
			function() {

				$("#dialog-confirm").dialog({
					title: "Heads Up",
					modal: true,
					resizable: false,
					buttons: 
					{
						"Ok": function() 
						{
							$(this).dialog("close");
						},

					}
				});
			});
		})(jQuery);
	}
}

function doOrderFormSubmission()
{
	window.formSubmissionErrors = [];
	window.okToSubmit = true;

	// Plate parameters.
	var vrm 			= customerVrm;
	var vrmInput 		= document.getElementById("user-vrm").value.trim();
	var front 			= document.getElementById("front-plate-selection").value;
	var rear	 		= document.getElementById("rear-plate-selection").value;
	var spacing 		= document.getElementById("character-spacing-selection").value.toLowerCase();
	var border 			= g_borderType;
	var badge 			= g_badgeName;
	

	if(spacing == "road legal spacing")
	{
		if(validateVrm(vrm))
		{
			var vrmSizeCheck = validateVrm(vrm).trim().replace(/[^0-9a-zA-Z ]/gi, '');
		}
		else 
		{
			var vrmSizeCheck = vrm;
		}
	}
	else 
	{
		var vrmSizeCheck = vrm;
	}

	if(vrmInput == "" || vrmInput == undefined || vrmInput == false)
	{
		window.okToSubmit = false;
		window.formSubmissionErrors['no-vrm'] = true; 	
	}

	if(spacing == "road legal spacing")
	{
		if(vrm)
		{
			if(validateVrm(vrm) == false)
			{
				window.okToSubmit = false;
				window.formSubmissionErrors['road-legal-spacing-invalid-vrm'] = true;
			}
		}
	}

	if(front == "no front plate" && rear == "no rear plate")
	{
		window.okToSubmit = false;
		window.formSubmissionErrors['no-plates'] = true; 	
	}

	if(front == "18 inch" && (border == "krystal" || border == "4d-5mm" || border == "4d-3mm"))
	{
		if(vrmSizeCheck.replace(/ /g, "").length == 7 && vrmSizeCheck.match(/ /g))
		{
			if(!vrmSizeCheck.match(/i|1/i))
			{
				window.okToSubmit = false;
				window.formSubmissionErrors['18-inch-front-plate-krystal-border'] = true;
			}
		}
	}

	if(rear == "18 inch" && (border == "krystal" || border == "4d-5mm" || border == "4d-3mm"))
	{
		if(vrmSizeCheck.replace(/ /g, "").length == 7 && vrmSizeCheck.match(/ /g))
		{			
			if(!vrmSizeCheck.match(/i|1/i))
			{
				window.okToSubmit = false;
				window.formSubmissionErrors['18-inch-rear-plate-krystal-border'] = true;
			}
		}
	}

	if(front == "standard oblong" && (border == "krystal" || border == "4d-5mm" || border == "4d-3mm"))
	{
		if(vrmSizeCheck.replace(/ /g, "").length == 7 && vrmSizeCheck.match(/ /g))
		{
			if(!(badge == "no badge" || badge == null))
			{
				if(!vrmSizeCheck.match(/i|1/i))
				{
					window.okToSubmit = false;
					window.formSubmissionErrors['standard-front-4d-border-with-badge'] = true;
				}
			}
		}
	}

	if(rear == "standard oblong" && (border == "krystal" || border == "4d-5mm" || border == "4d-3mm"))
	{
		if(vrmSizeCheck.replace(/ /g, "").length == 7 && vrmSizeCheck.match(/ /g))
		{
			if(!(badge == "no badge" || badge == null))
			{
				if(!vrmSizeCheck.match(/i|1/i))
				{
					window.okToSubmit = false;
					window.formSubmissionErrors['standard-rear-4d-border-with-badge'] = true;
				}
			}
		}
	}

	if(rear == "motorcycle" && (border == "krystal" || border == "4d-5mm" || border == "4d-3mm"))
	{
		if(vrmSizeCheck.replace(/ /g, "").length == 7 && vrmSizeCheck.match(/ /g))
		{
			if(!vrmSizeCheck.match(/i|1/i))
			{
				window.okToSubmit = false;
				window.formSubmissionErrors['motorcycle-plate-with-krystal-border'] = true;
			}
		}
	}




	if(window.okToSubmit == false)
	{
		var errorMessage = "The following errors were detected<br/><hr/><br/>";

		if(window.formSubmissionErrors['no-vrm'])
		{
			errorMessage += "• No registration entered.<br/><br/>";
		}

		if(window.formSubmissionErrors['road-legal-spacing-invalid-vrm'])
		{
			errorMessage += "• You have chosen road legal spacing, but have provided an invalid registration. Common reasons for this include mixing up the letter 'O' and the number 'zero', as well as mixing up the letter 'I' and the number 'one'.<br/><br/>";
		}

		if(window.formSubmissionErrors['no-plates'])
		{
			errorMessage += "• No front or rear plate chosen. Please select at least one plate before proceeding.<br/><br/>";
		}

		if(window.formSubmissionErrors['18-inch-front-plate-krystal-border'])
		{
			errorMessage += "• Your 18 inch front plate includes a krystal or 4D border and a 7 character registration with at least 1 space. Unfortunately the registration does not fit inside the border. Please choose a larger front plate.<br/><br/>";
		}

		if(window.formSubmissionErrors['18-inch-rear-plate-krystal-border'])
		{
			errorMessage += "• Your 18 inch rear plate includes a krystal or 4D border and a 7 character registration with at least 1 space. Unfortunately the registration does not fit inside the border. Please choose a larger front plate.<br/><br/>";
		}

		if(window.formSubmissionErrors['standard-front-4d-border-with-badge'])
		{
			errorMessage += "• Your front plate has a 7 character registration with at least 1 space, a krystal or 4D border and a badge. Unfortunately the registration does not fit inside the border. Please remove the border or the badge.<br/><br/>";
		}

		if(window.formSubmissionErrors['standard-rear-4d-border-with-badge'])
		{
			errorMessage += "• Your rear plate has a 7 character registration with at least 1 space, a krystal or 4D border and a badge. Unfortunately the registration does not fit inside the border. Please remove the border or the badge.<br/><br/>";
		}

		if(window.formSubmissionErrors['motorcycle-plate-with-krystal-border'])
		{
			errorMessage += "• Your motorcycle plate has a 7 character registration with at least 1 space and a krystal or 4D border. Unfortunately the registration does not fit inside this border.<br/><br/>";
		}

		document.getElementById("dialog-confirm-message").innerHTML = errorMessage;

		(function($){$(
			function() {

				$("#dialog-confirm").dialog({
					title: "Error",
					modal: true,
					resizable: false,
					buttons: 
					{
						"Ok": function() 
						{
							$(this).dialog("close");
							window.scrollTo({top: 0, behavior: 'smooth'});
							document.getElementById("plate-sizes-tab").click();
						},
					}
				});
			});
		})(jQuery);
	}
	else 
	{
		if(rear == "motorcycle" && front != "no front plate")
		{
			document.getElementById("dialog-confirm-message").innerHTML = "Do you need the front plate? You have chosen a motorcycle rear plate as well as a car front plate.";

			(function($){$(
				function() {

					$("#dialog-confirm").dialog({
						title: "Just checking...",
						modal: true,
						resizable: false,
						buttons: 
						{
							"I don't need a front plate": function() 
							{
								$(this).dialog("close");
								document.getElementById("front-plate-selection").selectedIndex = 4;
								updatePrice();
								submitTheOrder();								
							},
		
							"Keep front plate": function() 
							{
								$(this).dialog("close");
								submitTheOrder();
							}
						}
					});
				});
			})(jQuery);
		}
		else 
		{
			submitTheOrder();
		}
	}
}

function submitTheOrder()
{
	// Plate parameters.
	var vrm 			= customerVrm;
	var front 			= document.getElementById("front-plate-selection").value.toLowerCase();
	var rear	 		= document.getElementById("rear-plate-selection").value.toLowerCase();
	var spacing 		= document.getElementById("character-spacing-selection").value.toLowerCase();
	var characterType 	= "";
	var krystalColour 	= "";
	var border 			= "";
	var badge 			= "";

	var characterTypeList 	= document.getElementsByClassName("character-type");
	var krystalColourList 	= document.getElementsByClassName("krystal-colour-selection");
	var borderList 			= document.getElementsByClassName("border-selection");
	var badgeList 			= document.getElementsByClassName("badge-selection");

	for(var el of characterTypeList){if(el.checked == true){characterType 	= el.value.toLowerCase();}}
	for(var el of krystalColourList){if(el.checked == true){krystalColour 	= el.value.toLowerCase();}}
	for(var el of borderList)		{if(el.checked == true){border 			= el.value.toLowerCase();}}
	for(var el of badgeList)		{if(el.checked == true){badge 			= el.value.toLowerCase();}}

	var orderDetails = "Nice plates! <b>Please confirm your choices are correct</b> before proceeding.<br/><hr/><br/><p style='font-size: 14px;'>";
	orderDetails += "<b>Registration:</b> " + vrm + "<br/>";
	orderDetails += "<b>Character spacing:</b> <span style='text-transform: capitalize;'>" + spacing + "</span><br/><br/>";

	orderDetails += "<b>Front plate:</b> <span style='text-transform: capitalize;'>" + front + "</span><br/>";
	orderDetails += "<b>Rear plate:</b> <span style='text-transform: capitalize;'>" + rear + "</span><br/><br/>";

	orderDetails += "<b>Border:</b> <span style='text-transform: capitalize;'>" + border + "</span><br/>";
	orderDetails += "<b>Badge:</b> <span style='text-transform: capitalize;'>" + badge + "</span><br/><br/>";

	orderDetails += "<b>Character type:</b> <span style='text-transform: capitalize;'>" + characterType + "</span><br/>";

	if(characterType == "krystal 4d" || characterType == "krystal gel" || characterType == "krystal 4d gel")
	{
		orderDetails += "<b>Krystal colour:</b> <span style='text-transform: capitalize;'>" + krystalColour + "</span><br/>";
	}

	orderDetails += "</p>";

	document.getElementById("dialog-confirm-message").innerHTML = orderDetails;

	(function($){$(
		function() {

			$("#dialog-confirm").dialog({
				title: "One last check",
				modal: true,
				resizable: false,
				width: 315,
				buttons: 
				[
					{
						text : "I confirm the above is correct. Proceed to basket.",
						click : function() 
						{
							$(this).dialog("close");
	
							document.getElementById("submit-the-order-form").disabled = true;
							document.getElementById("submit-the-order-form").innerText = "REDIRECTING...";
	
							document.getElementById('order-submission-form').submit();
							
							var spinnerLoader = document.getElementsByClassName("loading-spinner")[0];
	
							spinnerLoader.style.display = "flex";
							spinnerLoader.style.visibility = "visible";
							spinnerLoader.style.zIndex = "99";
							spinnerLoader.style.position = "fixed";
							spinnerLoader.style.top = "0px";
							spinnerLoader.style.left = "0px";
							spinnerLoader.style.width = "100%";
							spinnerLoader.style.height = "100%";
						},
						class : "i-confirm-my-order",
					},
					{
						text : "I need to change something",
						click : function()
						{
							$(this).dialog("close");
						},
					},
				]
			});
		});
	})(jQuery);	
}

function globalMouseUp(e)
{
	// if any clicks on the 'angle-options' div or children, just return.
	if
	(
		e.target.id == "angle-options" ||
		e.target.id == "angle-options-icon" ||
		e.target.id == "show-angles" ||
		e.target.id == "change-angle-default" ||
		e.target.id == "change-angle-1" ||
		e.target.id == "change-angle-2" ||
		e.target.id == "change-angle-3" ||
		e.target.id == "change-angle-4" ||
		e.target.id == "change-angle-5"
	)
	{
		return;
	}

	// If the click is not the engle-options div, uncheck the checkbox to turn the div off.
	if(e.target.id != "angle-options")
	{
		document.getElementById("angle-changer-checkbox").checked = false;
	}
}

function changeAngle(angle)
{
	if(angle == "default")	{changeRotate3D("-309",	"0",	"-21");}
	if(angle == "view1")	{changeRotate3D("-318",	"0",	"-8");}
	if(angle == "view2")	{changeRotate3D("-299",	"0",	"36");}
	if(angle == "view3")	{changeRotate3D("-296",	"0",	"0");}
	if(angle == "view4")	{changeRotate3D("-329",	"0",	"0");}
	if(angle == "view5")	{changeRotate3D("-290",	"0",	"-37");}

	document.getElementById("angle-changer-checkbox").checked = false;
}

function showImg(i)
{
	document.getElementById("krystal-4d-explainer-img").style.display = "none";
	document.getElementById("krystal-gel-explainer-img").style.display = "none";
	document.getElementById("krystal-4d-gel-explainer-img").style.display = "none";
	document.getElementById("4d-3mm-explainer-img").style.display = "none";
	document.getElementById("4d-5mm-explainer-img").style.display = "none";
	document.getElementById("4d-3mm-gel-explainer-img").style.display = "none";
	document.getElementById("4d-5mm-gel-explainer-img").style.display = "none";
	document.getElementById("3d-gel-explainer-img").style.display = "none";
	document.getElementById("character-spacing-explainer-img").style.display = "none";

	document.getElementById(i).style.display = "block";
	openBlackout();
}

function openBlackout()
{
	document.getElementById("blackout").style.display = "flex";
}

function closeBlackout(e)
{
	var blackout = document.getElementById("blackout");

	(e.target.id == "blackout" || e.target.id == "close-blackout") ? blackout.style.display = "none" : null;
}

function updateCharacterSpacing()
{
	characterSpacing = this.value;

	updateVrm(customerVrm);

	updateFooterSummary("characterspacing", characterSpacing);
}

function updateVrm(vrm)
{
	var cleanedVrm 		= vrm.trim().replace(/[^0-9a-zA-Z ]/gi, '');
	var roadLegal 		= false;
	var whiteSpace  	= "no-wrap";
	var font 			= "carfont";

	blackText 			= document.getElementById("reg-3mm-black");
	colourText 			= document.getElementById("reg-3mm-colour");
	customerVrm 		= cleanedVrm.toUpperCase();

	/**
	 * 		White space of the registration characters must change based on a number of variables. 
	 * 
	 * 		1. Road legal spacing
	 * 			a. standard oblong, 18", 16", 14", range rover		whitespace  = 'nowrap'
	 * 			b. 4x4 square, motorcycle 							whitespace 	= 'normal'
	 * 
	 * 		2. Spacing As I've Typed Above
	 * 			a. standard oblong, 18", 16", 14", range rover 		whitespace = 'pre'
	 * 			b. 4x4 square, motorcycle 							whitespace = 'pre-line' or 'pre-wrap'
	 * 
	 * 
	 * 		EXPLANATIONS:
	 * 
	 * 		ROAD LEGAL SPACING
	 * 			(standard oblong, 18", 16", 14", range rover):		The registration must overflow each side of the plate equally and horizontally, not vertically by wrapping. 
	 *			(4x4 square, motorcycle):							The registration is normally 2 rows of characters on these plates. We want to have them wrap to the next line.
	 *
	 *		 SPACING AS I'VE TYPED ABOVE
	 * 			(standard oblong, 18", 16", 14", range rover):		The registration must maintain the spaces the user typed, while also not wrapping to the next line. 
	 *			(4x4 square, motorcycle):							The registration is normally 2 rows of characters on these plates. We want to have them wrap to the next line while maintaining the spaces the user typed.
	 * 
	 **/
	
	var plate = "standard oblong";

	if(g_currentPlate == "front")
	{
		plate = g_frontPlate;
	}
	else if(g_currentPlate == "rear")
	{
		plate = g_rearPlate;
	}
	
	if(characterSpacing == "road legal spacing")
	{
		roadLegal = true;

		if(plate == "standard oblong" || plate == "18 inch" || plate == "16 inch" || plate == "14 inch" || plate == "range rover")
		{
			whiteSpace = "white-space-no-wrap";
		}
		else if(plate == "4x4 square" || plate == "motorcycle")
		{
			whiteSpace = "white-space-normal";
		}
	}
	else if(characterSpacing == "spacing as i've typed above")
	{
		if(plate == "standard oblong" || plate == "18 inch" || plate == "16 inch" || plate == "14 inch" || plate == "range rover")
		{
			whiteSpace = "white-space-pre";
		}
		else if(plate == "4x4 square" || plate == "motorcycle")
		{
			whiteSpace = "white-space-pre-wrap";
		}
	}

	/**
	 * 		Decide which font to use. 
	 */

	if(plate == "motorcycle")
	{
		font = "bikefont";
	}

	blackText.className = whiteSpace + " " + font;
	colourText.className = whiteSpace + " " + font;

	if(roadLegal)
	{
		var tmpVrm = validateVrm(cleanedVrm);

		if(tmpVrm != false)
		{
			cleanedVrm = tmpVrm;
		}
	}

	for(var i = 0; i < blackText.children.length; i++)
	{
		blackText.children[i].getElementsByTagName("span")[0].innerText = cleanedVrm;
	}

	for(var i = 0; i < colourText.children.length; i++)
	{
		colourText.children[i].getElementsByTagName("span")[0].innerText = cleanedVrm;
	}
}

function checkControlsPosition()
{
	var header 					= document.getElementById("header");
	var optionsNav 				= document.getElementById("options-nav");
	var mainContentContainer 	= document.getElementById("main-content-container");

	if(window.innerWidth <= 1060)
	{
		mainContentContainer.appendChild(optionsNav);
	}
	else 
	{
		header.appendChild(optionsNav);
	}
}

function closeCurrentTab(t, t2)
{
	previousTab = currentTab;
	previousHighlightedTab = currentHighlitedTab;

	var isSmallScreen = false;

	if(window.innerWidth > 1060)
	{
		isSmallScreen = false;
	}
	else 
	{
		isSmallScreen = true;
	}

	if(t == previousTab)
	{
		currentTab = t;
		currentHighlitedTab = t2;
		
	
		if(document.getElementById(currentTab).style.display == "block")
		{
			if(isSmallScreen == false)
			{
				return;
			}

			document.getElementById(currentTab).style.display = "none";

			document.getElementById(previousHighlightedTab).className = "";
			document.getElementById(currentHighlitedTab).className = "";
		}
		else 
		{
			document.getElementById(currentTab).style.display = "block";

			document.getElementById(previousHighlightedTab).className = "";
			document.getElementById(currentHighlitedTab).className = "options-tab-highlighted";
		}

		return;
	}
}

function switchTabs(t, t2)
{
	previousTab = currentTab;
	previousHighlightedTab = currentHighlitedTab;

	var isSmallScreen = false;

	if(window.innerWidth > 1060)
	{
		isSmallScreen = false;
	}
	else 
	{
		isSmallScreen = true;
	}

	if(t == previousTab)
	{
		currentTab = t;
		currentHighlitedTab = t2;
		
	
		if(document.getElementById(currentTab).style.display == "block")
		{
			if(isSmallScreen == false)
			{
				return;
			}

			document.getElementById(currentTab).style.display = "none";

			document.getElementById(previousHighlightedTab).className = "";
			document.getElementById(currentHighlitedTab).className = "";
		}
		else 
		{
			document.getElementById(currentTab).style.display = "block";

			document.getElementById(previousHighlightedTab).className = "";
			document.getElementById(currentHighlitedTab).className = "options-tab-highlighted";
		}

		return;
	}


	currentTab = t;
	currentHighlitedTab = t2;
	
	document.getElementById(previousTab).style.display = "none";
	document.getElementById(currentTab).style.display = "block";

	document.getElementById(previousHighlightedTab).className = "";
	document.getElementById(currentHighlitedTab).className = "options-tab-highlighted";
}

function updateFooterSummary(key, value)
{
	if(key == "frontplate")
	{
		document.getElementById("chosen-front-plate").innerText = value;
	}

	if(key == "rearplate")
	{
		document.getElementById("chosen-rear-plate").innerText = value;
	}

	if(key == "krystalcolour")
	{
		if(g_characterType == "4d 5mm" || g_characterType == "4d 5mm gel")
		{
			document.getElementById("chosen-krystal-colour").innerText = "N/A";	
		}
		else 
		{
			document.getElementById("chosen-krystal-colour").innerText = value;
		}
	}

	if(key == "charactertype")
	{
		document.getElementById("chosen-character-type").innerText = value;
	}

	if(key == "border")
	{
		document.getElementById("chosen-border").innerText = value;
	}

	if(key == "badge")
	{
		document.getElementById("chosen-badge").innerText = value;
	}

	if(key == "characterspacing")
	{
		document.getElementById("chosen-character-spacing").innerText = value;
	}

	updatePrice();
}

function updatePrice()
{
	var p = document.getElementById("total-price");

	var noBadgeOnFront  = false;
	var noBadgeOnRear   = false;
	var basePrice 		= 0;
	var borderPrice 	= 0;
	var badgePrice 		= 0;
	var total 			= 0;

	var characterPrices 				= {}

	characterPrices.krystal4d 			= {"pair" : 54.99, "single" : "27.49"};
	characterPrices.krystalGel 			= {"pair" : 56.99, "single" : "28.49"};
	characterPrices.krystal4dGel 		= {"pair" : 64.99, "single" : "32.99"};
	characterPrices.fourd3mm 			= {"pair" : 44.99, "single" : "22.49"};
	characterPrices.fourd5mm 			= {"pair" : 45.99, "single" : "22.99"};
	characterPrices.fourd3mmGel 		= {"pair" : 54.99, "single" : "27.49"};
	characterPrices.fourd5mmGel 		= {"pair" : 54.99, "single" : "27.49"};
	characterPrices.gel 				= {"pair" : 44.99, "single" : "22.49"};
	characterPrices.printed 			= {"pair" : 24.99, "single" : "11.49"};

	var badgePrices 			= {}
	badgePrices.fourdPair 		= 8.99;
	badgePrices.fourdSingle 	= 4.49;
	badgePrices.gelPair 		= 6.99;
	badgePrices.gelSingle 		= 3.49;
	badgePrices.printedPair 	= 0.99;
	badgePrices.printedSingle 	= 0.49;

	var borderPrices = {}

	borderPrices.krystalPair 	= 10.99;
	borderPrices.krystalSingle 	= 5.49;
	
	borderPrices.fourd5mmPair 	= 8.99;
	borderPrices.fourd5mmSingle = 4.49;

	borderPrices.fourd3mmPair 	= 7.99;
	borderPrices.fourd3mmSingle = 3.99;

	borderPrices.printedPair 	= 0.99;
	borderPrices.printedSingle 	= 0.49;

	if(g_frontPlate == "18 inch" || g_frontPlate == "16 inch" || g_frontPlate == "14 inch")
	{
		noBadgeOnFront = true;
	}

	if(g_rearPlate == "18 inch" || g_rearPlate == "16 inch" || g_rearPlate == "14 inch" || g_rearPlate == "4x4 square" || g_rearPlate == "motorcycle")
	{
		noBadgeOnRear = true;
	}


	/**
	 * 		Prices for singles.
	 **/
	if
	(
		(g_frontPlate == "no front plate" && g_rearPlate != "no rear plate") ||
		(g_frontPlate != "no front plate" && g_rearPlate == "no rear plate")
	)
	{
		if(g_characterType == "krystal 4d")		{basePrice = Number(characterPrices.krystal4d.single);}
		if(g_characterType == "krystal gel")	{basePrice = Number(characterPrices.krystalGel.single);}
		if(g_characterType == "krystal 4d gel")	{basePrice = Number(characterPrices.krystal4dGel.single);}
		if(g_characterType == "4d 3mm")			{basePrice = Number(characterPrices.fourd3mm.single);}
		if(g_characterType == "4d 5mm")			{basePrice = Number(characterPrices.fourd5mm.single);}
		if(g_characterType == "4d 3mm gel")		{basePrice = Number(characterPrices.fourd3mmGel.single);}
		if(g_characterType == "4d 5mm gel")		{basePrice = Number(characterPrices.fourd5mmGel.single);}
		if(g_characterType == "3d gel")			{basePrice = Number(characterPrices.gel.single);}
		if(g_characterType == "printed")		{basePrice = Number(characterPrices.printed.single);}

		if(g_borderType == "krystal")			{borderPrice = Number(borderPrices.krystalSingle)}
		if(g_borderType == "4d-5mm")			{borderPrice = Number(borderPrices.fourd5mmSingle)}
		if(g_borderType == "4d-3mm")			{borderPrice = Number(borderPrices.fourd3mmSingle)}
		if(g_borderType == "printed")			{borderPrice = Number(borderPrices.printedSingle)}
		
		if(g_badgeType == "fourd")				{badgePrice	 = Number(badgePrices.fourdSingle)}
		if(g_badgeType == "gel")				{badgePrice	 = Number(badgePrices.gelSingle)}
		if(g_badgeType == "printed")			{badgePrice	 = Number(badgePrices.printedSingle)}

		if(g_frontPlate != "no front plate" && noBadgeOnFront == true)
		{
			badgePrice = 0;
		}

		if(g_rearPlate != "no rear plate" && noBadgeOnRear == true)
		{
			badgePrice = 0;
		}
	}
	else if(g_frontPlate == "no front plate" && g_rearPlate == "no rear plate")
	{
		basePrice 	= 0;
		borderPrice = 0;
		badgePrice 	= 0;
	}
	/**
	 * 		Prices for pairs.
	 **/
	else 
	{
		if(g_characterType == "krystal 4d")		{basePrice = Number(characterPrices.krystal4d.pair);}
		if(g_characterType == "krystal gel")	{basePrice = Number(characterPrices.krystalGel.pair);}
		if(g_characterType == "krystal 4d gel")	{basePrice = Number(characterPrices.krystal4dGel.pair);}
		if(g_characterType == "4d 3mm")			{basePrice = Number(characterPrices.fourd3mm.pair);}
		if(g_characterType == "4d 5mm")			{basePrice = Number(characterPrices.fourd5mm.pair);}
		if(g_characterType == "4d 3mm gel")		{basePrice = Number(characterPrices.fourd3mmGel.pair);}
		if(g_characterType == "4d 5mm gel")		{basePrice = Number(characterPrices.fourd5mmGel.pair);}
		if(g_characterType == "3d gel")			{basePrice = Number(characterPrices.gel.pair);}
		if(g_characterType == "printed")		{basePrice = Number(characterPrices.printed.pair);}

		if(g_borderType == "krystal")			{borderPrice = Number(borderPrices.krystalPair)}
		if(g_borderType == "4d-5mm")			{borderPrice = Number(borderPrices.fourd5mmPair)}
		if(g_borderType == "4d-3mm")			{borderPrice = Number(borderPrices.fourd3mmPair)}
		if(g_borderType == "printed")			{borderPrice = Number(borderPrices.printedPair)}

		if(g_badgeType == "fourd")				{badgePrice	 = Number(badgePrices.fourdPair)}
		if(g_badgeType == "gel")				{badgePrice	 = Number(badgePrices.gelPair)}
		if(g_badgeType == "printed")			{badgePrice	 = Number(badgePrices.printedPair)}

		if(noBadgeOnFront == true && noBadgeOnRear == true)
		{
			badgePrice = 0;
		}
		else if(noBadgeOnFront == true || noBadgeOnRear == true)
		{
			badgePrice /= 2;
		}
	}
	
	total = (basePrice + borderPrice + badgePrice).toFixed(2);

	p.innerText = "Total £" + total;
}


function changeCharacterType()
{
	var characterType = this.value.toString().toLowerCase();
	g_characterType = characterType;

	var platePreview 	= document.getElementById("plate-preview-container");

	document.getElementById("character-type-description").innerText = this.getAttribute("data-custom-label");


	/**
	 * 		Turn off krystal text colour selection by default.
	**/
	document.getElementById("krystal-colours-tab").style.display = "none";

	updateFooterSummary("charactertype", characterType);
	updateFooterSummary("krystalcolour", "N/A");

	platePreview.classList.remove("black-krystal");
	platePreview.classList.remove("red-krystal");
	platePreview.classList.remove("green-krystal");
	platePreview.classList.remove("blue-krystal");
	platePreview.classList.remove("orange-krystal");
	platePreview.classList.remove("yellow-krystal");
	platePreview.classList.remove("clear-krystal");

	/**
	 * 		krystal 4d 
	 **/
	if(characterType == "krystal 4d")
	{
		// Show the options for krystal text colour.
		document.getElementById("krystal-colours-tab").style.display = "inline-block";

		platePreview.classList.add("krystal-text");
		platePreview.classList.remove("fourd-text");
		platePreview.classList.remove("gel-text");
		platePreview.classList.remove("gel-text-only");
		platePreview.classList.remove("printed-text");
		platePreview.classList.remove("gel-krystal-text");

		changeKrystalColour(g_krystalCharacterColour);

		updateFooterSummary("krystalcolour", g_krystalCharacterColour);
	}
	




	/**
	 * 		Krystal gel
	 **/
	 else if(characterType == "krystal gel")
	 {
		 // Show the options for krystal text colour.
		document.getElementById("krystal-colours-tab").style.display = "inline-block";

		platePreview.classList.add("gel-krystal-text");
		platePreview.classList.remove("fourd-text");
		platePreview.classList.add("gel-text");
		platePreview.classList.remove("gel-text-only");
		platePreview.classList.remove("printed-text");

		changeKrystalColour(g_krystalCharacterColour);

		updateFooterSummary("krystalcolour", g_krystalCharacterColour);
	 }	




	/**
	 * 		krystal 4d + gel 
	 **/
	else if(characterType == "krystal 4d gel")
	{
		// Show the options for krystal text colour.
		document.getElementById("krystal-colours-tab").style.display = "inline-block";

		platePreview.classList.add("krystal-text");
		platePreview.classList.remove("fourd-text");
		platePreview.classList.add("gel-text");
		platePreview.classList.remove("gel-text-only");
		platePreview.classList.remove("printed-text");
		platePreview.classList.remove("gel-krystal-text");

		changeKrystalColour(g_krystalCharacterColour);

		updateFooterSummary("krystalcolour", g_krystalCharacterColour);
	}
	




	/**
	 * 		3mm 4D
	 **/
	else if(characterType == "4d 3mm")
	{
		platePreview.classList.remove("krystal-text");
		platePreview.classList.add("fourd-text");
		platePreview.classList.remove("gel-text");
		platePreview.classList.remove("gel-text-only");
		platePreview.classList.remove("printed-text");
		platePreview.classList.remove("gel-krystal-text");
	}
	




	/**
	 * 		5mm 4D 
	 **/
	else if(characterType == "4d 5mm")
	{
		platePreview.classList.add("krystal-text");
		platePreview.classList.remove("fourd-text");
		platePreview.classList.remove("gel-text");
		platePreview.classList.remove("gel-text-only");
		platePreview.classList.remove("printed-text");
		platePreview.classList.remove("gel-krystal-text");

		changeKrystalColour("black");
	}





	/**
	 * 		3mm 4D with gel 
	 **/
	else if(characterType == "4d 3mm gel")
	{
		platePreview.classList.remove("krystal-text");
		platePreview.classList.add("fourd-text");
		platePreview.classList.add("gel-text");
		platePreview.classList.remove("gel-text-only");
		platePreview.classList.remove("printed-text");
		platePreview.classList.remove("gel-krystal-text");
	}




	/**
	 * 		5mm 4D with gel 
	 **/
	else if(characterType == "4d 5mm gel")
	{
		platePreview.classList.add("krystal-text");
		platePreview.classList.remove("fourd-text");
		platePreview.classList.add("gel-text");
		platePreview.classList.remove("gel-text-only");
		platePreview.classList.remove("printed-text");
		platePreview.classList.remove("gel-krystal-text");

		changeKrystalColour("black");
	}




	/**
	 * 		Gel characters
	 **/
	else if(characterType == "3d gel")
	{
		platePreview.classList.remove("krystal-text");
		platePreview.classList.remove("fourd-text");
		platePreview.classList.add("gel-text");
		platePreview.classList.add("gel-text-only");
		platePreview.classList.remove("printed-text");	
		platePreview.classList.remove("gel-krystal-text");	
	}

	/**
	 * 		Printed
	 **/
	else if(characterType == "printed")
	{
		platePreview.classList.remove("krystal-text");
		platePreview.classList.remove("fourd-text");
		platePreview.classList.remove("gel-text");
		platePreview.classList.remove("gel-text-only");
		platePreview.classList.add("printed-text");	
		platePreview.classList.remove("gel-krystal-text");	
	}
}

function changeKrystalColour(colour)
{
	var label = colour;
	colour = colour.toLowerCase()

	if(colour != "black")
	{
		g_krystalCharacterColour = colour;
	}

	if(g_characterType != "krystal 4d" && g_characterType != "krystal 4d gel" && g_characterType != "krystal gel" && colour != "black")
	{
		return;	
	}

	document.getElementById("colour-description").innerText = label;

	var acrylicColour 	= document.getElementById("reg-3mm-colour");
	var platePreview = document.getElementById("plate-preview-container");

	platePreview.classList.remove("black-krystal");
	platePreview.classList.remove("red-krystal");
	platePreview.classList.remove("green-krystal");
	platePreview.classList.remove("blue-krystal");
	platePreview.classList.remove("orange-krystal");
	platePreview.classList.remove("yellow-krystal");
	platePreview.classList.remove("clear-krystal");

	platePreview.classList.add(colour + "-krystal");
	platePreview.classList.add("krystal-text");

	updateFooterSummary("krystalcolour", colour);
}

function changeBorder(colour, borderType)
{
	var platePreview = document.getElementById("plate-preview-container");

	/**
	 *		First check if "no border" was chosen. If so:
	 *
	 * 		1. Set the global status.
	 * 		2. Turn off the border <div> elements with CSS.
	 * 		3. Leave.
	 * 
	**/
	if(colour == "no border")
	{
		g_borderStatus 	= false;
		g_borderColour 	= null;
		g_borderType 	= null;

		document.getElementById("border-3mm-black").style.display = "none";
		document.getElementById("border-3mm-colour").style.display = "none";

		document.getElementById("border-description").innerText = "No border";

		platePreview.classList.remove("printedborder");
		platePreview.classList.remove("krystalborder");
		platePreview.classList.remove("fourd-3mm-border");
		platePreview.classList.remove("fourd-5mm-border");

		
		updateFooterSummary("border", "No border");

		return;
	}

	/**
	 *		colour can be null if the user selects a badge before a border.
	 *
	 * 		The updateBadge function calls changeBorder because the border needs to update its width if a badge is turned on.
	 * 
	**/
	if(colour == null)
	{
		platePreview.classList.remove("printedborder");
		platePreview.classList.remove("krystalborder");
		platePreview.classList.remove("fourd-3mm-border");
		platePreview.classList.remove("fourd-5mm-border");

		return;
	}
	
	/**
	 * 		If we make it here, a border colour other than "no border" has been chosen by the user, or the changeBorder function has been called from another function
	 * 		and the global border vars (g_borderColour, g_borderType) passed in.
	 * 
	**/

	// Update globals
	g_borderType 	= borderType;
	g_borderColour	= colour;
	g_borderStatus 	= true;
	document.getElementById("border-type").value = borderType;

	// Set local colour (used within this function)
	//colour = colour.toLowerCase();

	// The border div elements
	var blackBorder 	= document.getElementById("border-3mm-black");
	var colourBorder 	= document.getElementById("border-3mm-colour");	
	
	// Update the text description of the selected border (for user info purposes only)
	document.getElementById("border-description").innerText = colour;

	/**
	 *		Decide if if's a krystal 4d or printed border.  
	 * 
	**/

	platePreview.classList.remove("printedborder");
	platePreview.classList.remove("krystalborder");
	platePreview.classList.remove("fourd-3mm-border");
	platePreview.classList.remove("fourd-5mm-border");

	if(borderType == "krystal")
	{
		platePreview.classList.add("krystalborder");

		// For krystal borders, turn on both the "black" and "colour" divs.
		document.getElementById("border-3mm-black").style.display = "block";
		document.getElementById("border-3mm-colour").style.display = "block";

		var borderLabel = colour.toLowerCase().replace(/ /g, "-");

		colourBorder.className = borderLabel + "-border-colour";
	}
	else if(borderType == "4d-3mm")
	{
		document.getElementById("border-3mm-black").style.display = "block";

		platePreview.classList.add("fourd-3mm-border");

		colourBorder.className = "";
	}
	else if(borderType == "4d-5mm")
	{
		document.getElementById("border-3mm-black").style.display = "block";
		document.getElementById("border-3mm-colour").style.display = "block";

		platePreview.classList.add("fourd-5mm-border");
	}
	else if(borderType == "printed")
	{
		platePreview.classList.add("printedborder");
		
		// For printed borders, turn off "black", turn on "colour".
		document.getElementById("border-3mm-black").style.display = "none";
		document.getElementById("border-3mm-colour").style.display = "block";

		var borderLabel = colour.toLowerCase().replace(/ /g, "-");

		colourBorder.className = borderLabel + "-border-colour";
	}

	updateFooterSummary("border", colour);
}

function changeBadge(badgeName, badgeType, customLabel)
{
	var platePreview = document.getElementById("plate-preview-container");

	if(badgeName == null)
	{
		platePreview.classList.remove("badge");

		return;
	}

	var badge 		= document.getElementById("badge");

	if(customLabel)
	{
		g_badgeNiceName = customLabel;
	}
	
	g_badgeName 	= badgeName;
	g_badgeType 	= badgeType;
	g_badgeStatus 	= true;
	
	document.getElementById("badge-type").value = badgeType;

	//document.getElementById("badge-description").innerText = badgeName.toUpperCase();
	if(customLabel) document.getElementById("badge-description").innerText = customLabel;

	if(badgeName == "no badge")
	{
		g_badgeStatus 	= false;
		g_badgeType 	= null;

		badge.style.display = "none";

		g_badgeStatus = false;

		/**
		 *		Only update the border if a border is actually set.
		 *  
		**/
		if(g_borderStatus == true)
		{
			changeBorder(g_borderColour, g_borderType);
		}

		platePreview.classList.remove("badge");
		platePreview.classList.remove("fourd-badge");
		platePreview.classList.remove("gel-badge");
		platePreview.classList.remove("printed-badge");
		
		updateFooterSummary("badge", "No badge");

		return;
	}

	// Make sure CSS is able to adjust the padding-left of the reg when a badge is turned on.
	platePreview.classList.add("badge");
	
	platePreview.classList.remove("fourd-badge");
	platePreview.classList.remove("gel-badge");
	platePreview.classList.remove("printed-badge");	
	platePreview.classList.add(badgeType + "-badge");

	// Add the badge type to the class list.
	badge.classList.remove("fourd");
	badge.classList.remove("gel");
	badge.classList.remove("printed");
	badge.classList.add(badgeType);

	// Add the badge name to the class list.
	badge.classList.remove("fourd-eng");
	badge.classList.remove("fourd-sco");
	badge.classList.remove("fourd-wal");
	badge.classList.remove("fourd-uk");
	badge.classList.remove("threed-eng");
	badge.classList.remove("threed-sco");
	badge.classList.remove("threed-wal");
	badge.classList.remove("threed-uk");
	badge.classList.remove("printed-eng");
	badge.classList.remove("printed-sco");
	badge.classList.remove("printed-wal");
	badge.classList.remove("printed-uk");

	badge.classList.add(badgeName);
	
	var plate 	= "standard oblong";
	if(g_currentPlate == "front"){plate = g_frontPlate;}
	else if(g_currentPlate == "rear"){plate = g_rearPlate;}

	if(plate == "standard oblong" || plate == "range rover")
	{
		g_badgeStatus = true;
		badge.style.display = "block";
	}
	else if(plate == "18 inch" || plate == "16 inch" || plate == "14 inch" || plate == "motorcycle")
	{
		g_badgeStatus = false;
		badge.style.display = "none";
	}

	changeBorder(g_borderColour, g_borderType);
	updateFooterSummary("badge", g_badgeNiceName);
}

function switchPlate(p)
{
	var plate = document.getElementById("plate");

	if(p == "front")
	{
		g_currentPlate = "front";
		
		plate.classList.add("front-plate");
		plate.classList.remove("rear-plate");
	}
	else if(p == "rear")
	{
		g_currentPlate = "rear";

		plate.classList.remove("front-plate");
		plate.classList.add("rear-plate");
	}

	doPlatePreview();
}

function changeFrontPlate(plate = "standard oblong")
{
	g_frontPlate = plate;

	if(g_currentPlate == "front")
	{
		doPlatePreview();
	}

	var badgeWarning = document.getElementById("front-plate-badge-warning");

	if(plate == "18 inch" || plate == "16 inch" || plate == "14 inch")
	{
		badgeWarning.innerText = "Badges are not available for this plate";
	}
	else 
	{
		badgeWarning.innerText = "";
	}

	updateVrm(customerVrm);

	updateFooterSummary("frontplate", plate);
}

function changeRearPlate(plate = "standard oblong")
{
	g_rearPlate = plate;

	if(g_currentPlate == "rear")
	{
		doPlatePreview();
	}

	var badgeWarning = document.getElementById("rear-plate-badge-warning");

	if(plate == "18 inch" || plate == "16 inch" || plate == "14 inch" || plate == "motorcycle" || plate == "4x4 square")
	{
		badgeWarning.innerText = "Badges are not available for this plate";
	}
	else 
	{
		badgeWarning.innerText = "";
	}

	updateVrm(customerVrm);

	updateFooterSummary("rearplate", plate);
}


function doPlatePreview()
{
	// Can be "front" or "rear".
	side 		= g_currentPlate;
	var plate 	= "standard oblong";
	var black 	= document.getElementById("reg-3mm-black");
	var colour 	= document.getElementById("reg-3mm-colour");

	var platePreview = document.getElementById("plate-preview-container");

	if(side == "front")
	{
		plate = g_frontPlate;

		platePreview.classList.add("is-front-plate");
		platePreview.classList.remove("is-rear-plate");
	}
	else if(side == "rear")
	{
		plate = g_rearPlate;

		platePreview.classList.remove("is-front-plate");
		platePreview.classList.add("is-rear-plate");
	}

	platePreview.style.display = "block";
	platePreview.classList.remove("standardoblong");
	platePreview.classList.remove("shortplate18");
	platePreview.classList.remove("shortplate16");
	platePreview.classList.remove("shortplate14");
	platePreview.classList.remove("rangerover");
	platePreview.classList.remove("square");
	platePreview.classList.remove("motorcycle");
	platePreview.classList.remove("nofrontplate");
	platePreview.classList.remove("norearplate");

	/* Change the widths and heights to a class. */
	if(plate == "standard oblong")
	{
		platePreview.style.width = "520px";
		platePreview.style.height = "111px";

		platePreview.classList.add("standardoblong");
	}
	else if(plate == "18 inch")
	{
		platePreview.style.width = "460px";
		platePreview.style.height = "111px";

		platePreview.classList.add("shortplate18");
	}
	else if(plate == "16 inch")
	{
		platePreview.style.width = "406px";
		platePreview.style.height = "111px";

		platePreview.classList.add("shortplate16");
	}
	else if(plate == "14 inch")
	{
		platePreview.style.width = "355px";
		platePreview.style.height = "111px";

		platePreview.classList.add("shortplate14");
	}
	else if(plate == "range rover")
	{
		platePreview.style.width = "533px";
		platePreview.style.height = "152px";

		platePreview.classList.add("rangerover");
	}
	else if(plate == "4x4 square")
	{
		platePreview.style.width = "279px";
		platePreview.style.height = "228px";
		platePreview.classList.add("square");
	}
	else if(plate == "motorcycle")
	{
		platePreview.style.width = "228px";
		platePreview.style.height = "178px";
		platePreview.classList.add("motorcycle");
	}
	else if(plate == "no front plate")
	{
		platePreview.classList.add("nofrontplate");
	}
	else if(plate == "no rear plate")
	{
		platePreview.classList.add("norearplate");
	}

	updateVrm(customerVrm);

	// Run this function so the badge can be turned off if the chosen size doesn't support badges.
	changeBadge(g_badgeName, g_badgeType);

	updatePrice();
}







function validateVrm(reg)
{
    // The 9 possible patterns for UK VRMs.
    var patterns = 
    [
        '^([a-zA-Z]{2}[0-9]{2}[ ]?[a-zA-Z]{3})$',   // AA00 AAA
        '^([a-zA-Z]{1}[0-9]{1,3}[ ]?[a-zA-Z]{3})$', // A000 AAA
        '^([a-zA-Z]{3}[ ]?[0-9]{1,3}[a-zA-Z]{1})$', // AAA 000A
        '^([0-9]{4}[ ]?[a-zA-Z]{1,2})$',            // 0000 AA
        '^([0-9]{1,3}[ ]?[a-zA-Z]{1,3})$',          // 000 AAA
        '^([a-zA-Z]{1,3}[ ]?[0-9]{1,3})$',          // AAA 000
        '^([a-zA-Z]{1,2}[ ]?[0-9]{4})$',            // AA 0000
        '^([a-zA-Z]{3}[ ]?[0-9]{4})$',              // AAA 0000
        '^([0-9]{4}[ ]?[a-zA-Z]{3})$',              // 0000 AAA
    ];

    var index = null;
    var match = null;

    // Ensure string data type and remove all whitespace.
    reg = reg.toString().trim();
    reg = reg.replace(/ /g, "");

    // Loop through each pattern and break if a match is found. Save the index (the pattern) that was matched.
    for(var i = 0; i < patterns.length; i++)
    {
        match = reg.match(patterns[i]);

        if(match != null)
        {
            index = i;
            break;
        }
    }

    // If an index was found the space can be added. Otherwise it's invalid.
    if(index != null)
    {
        var space_index = null;

        if(i == 0){space_index = reg.search(/([0-9]{1}[a-zA-Z]{1})/);}  // AA00 AAA
        if(i == 1){space_index = reg.search(/([0-9]{1}[a-zA-Z]{1})/);}  // A000 AAA
        if(i == 2){space_index = reg.search(/([a-zA-Z]{1}[0-9]{1})/);}  // AAA 000A
        if(i == 3){space_index = reg.search(/([0-9]{1}[a-zA-Z]{1})/);}  // 0000 AA
        if(i == 4){space_index = reg.search(/([0-9]{1}[a-zA-Z]{1})/);}  // 000 AAA
        if(i == 5){space_index = reg.search(/([a-zA-Z]{1}[0-9]{1})/);}  // AAA 000
        if(i == 6){space_index = reg.search(/([a-zA-Z]{1}[0-9]{1})/);}  // AA 0000
        if(i == 7){space_index = reg.search(/([a-zA-Z]{1}[0-9]{1})/);}  // AAA 0000
        if(i == 8){space_index = reg.search(/([0-9]{1}[a-zA-Z]{1})/);}  // 0000 AAA
    }

    space_index++;

    // If 'space_index' has a value, insert a space at that index. If it doesn't, the reg is invalid anyway.
    if(space_index)
    {
        reg = reg.substring(0, space_index) + ' ' + reg.substring(space_index);

        return reg;
    }

    return false;
}