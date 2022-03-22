var plateReg, plateReg2, plateReg3, plateReg4, plateReg5, plateReg6, plateRegColour, plateRegColour2, plateRegColour3, plateRegColour4, plateRegColour5, plateRegColour6;
var plateRegRare, plateRegRare2, plateRegRare3, plateRegRare4, plateRegRare5, plateRegRare6, plateRegRearColour, plateRegRearColour2, plateRegRearColour3, plateRegRearColour4, plateRegRearColour5, plateRegRearColour6;
var plateRegInput;
var frontPlateSelector;
var rarePlateSelector;
var platePreview;
var platePreviewRare;
var characterTypes;
var krystalColourSelector;
var krystalDepthSelector;
var borderSelector;
var frToggler, dToggler, asideToggler;
var modificatorSelected;
var badgeSelected;
var mainOptionsOpener, krystalOptionsOpener, borderOptionsOpener, badgesOptionsOpener;
var mainOptionsBlock, krystalOptionsBlock, borderOptionsBlock, badgesOptionsBlock;

var mobOpener;
var mobOptions;

var frontParameters = new Array('NOM', 'road legal spacing', 'standard oblong', 'krystal 4d', 'red', 'none-b', 'none-n');
var rearParameters = new Array('NOM', 'road legal spacing', 'standard oblong', 'krystal 4d', 'red', 'none-b', 'none-n');

var hiddenRare, hiddenFR;

setTimeout(start, 2000);
function start(){
	console.log('loaded');
	plateReg = document.getElementById('plates-reg1');
	plateReg2 = document.getElementById('plates-reg2');
	plateReg3 = document.getElementById('plates-reg3');
	plateReg4 = document.getElementById('plates-reg4');
	plateReg5 = document.getElementById('plates-reg5');
	plateReg6 = document.getElementById('plates-reg6');
	plateRegColour = document.getElementById('plates-reg-color1');
	plateRegColour2 = document.getElementById('plates-reg-color2');
	plateRegColour3 = document.getElementById('plates-reg-color3');
	plateRegColour4 = document.getElementById('plates-reg-color4');
	plateRegColour5 = document.getElementById('plates-reg-color5');
	plateRegColour6 = document.getElementById('plates-reg-color6');
	plateRegRare = document.getElementById('plates-reg-rare1');
	plateRegRare2 = document.getElementById('plates-reg-rare2');
	plateRegRare3 = document.getElementById('plates-reg-rare3');
	plateRegRare4 = document.getElementById('plates-reg-rare4');
	plateRegRare5 = document.getElementById('plates-reg-rare5');
	plateRegRare6 = document.getElementById('plates-reg-rare6');
	plateRegRearColour = document.getElementById('plates-reg-color-rear1');
	plateRegRearColour2 = document.getElementById('plates-reg-color-rear2');
	plateRegRearColour3 = document.getElementById('plates-reg-color-rear3');
	plateRegRearColour4 = document.getElementById('plates-reg-color-rear4');
	plateRegRearColour5 = document.getElementById('plates-reg-color-rear5');
	plateRegRearColour6 = document.getElementById('plates-reg-color-rear6');
	plateRegInput = document.getElementById('plateRegInput');
	frontPlateSelector = document.getElementById('front-plate-selection');
	rarePlateSelector = document.getElementById('rear-plate-selection');
	
	platePreview = document.getElementById('platePreview');
	platePreviewRare = document.getElementById('platePreviewRare');

	platePreviewRotate = document.querySelector('#plate.front-plate div');
	platePreviewRareRotate = document.querySelector('#plate-rare.front-plate div');
	plateLettersRotate = document.querySelectorAll('.letters');
	plateBordersRotate = document.querySelectorAll('.borders-pes');
	plateBadgeRotate = document.querySelectorAll('.badge-pes');
	
	characterTypes 	= document.getElementById("character-type").children;
	krystalColourSelector = document.getElementById("krystal-colour").children;
	krystalDepthSelector = document.getElementById("krystal-depth").children;
	badgeSelected = document.getElementById("badgesSelector").children;
	borderSelector = document.getElementById("borders").children;
	modificatorSelected = document.getElementById('modifySelector');
	mainOptionsOpener = document.getElementById('mainOptionsHeader');
	mainOptionsBlock = document.getElementById('mainOptions');
	krystalOptionsOpener = document.getElementById('krystalOptionsHeader');
	krystalOptionsBlock = document.getElementById('krystalOptions');
	borderOptionsOpener = document.getElementById('bordersOptionsHeader');
	borderOptionsBlock = document.getElementById('bordersOptions');
	badgesOptionsOpener = document.getElementById('badgesOptionsHeader');
	badgesOptionsBlock = document.getElementById('badgesOptions');
	mobOpener = document.getElementById('mobileOpener');
	mobOptions = document.getElementById('platesMobileOpts');
	hiddenRare = document.getElementsByClassName('hiddenRare');
	hiddenFR = document.getElementsByClassName('hiddenFR');
	
	
	frToggler = document.getElementById("frontViewToggler");
	dToggler = document.getElementById("3dViewToggler");
	asideToggler = document.getElementById("asideViewToggler");
	
	frToggler.addEventListener('click', function(){ changeView('front');});
	dToggler.addEventListener('click', function(){ changeView('3d');});
	asideToggler.addEventListener('click', function(){ changeView('aside');});
	mobOpener.addEventListener('click', mobileMenu);
	
	mainOptionsOpener.addEventListener('click', function(){ openOptions(mainOptionsBlock);});
	krystalOptionsOpener.addEventListener('click', function(){ openOptions(krystalOptionsBlock);});
	borderOptionsOpener.addEventListener('click', function(){ openOptions(borderOptionsBlock);});
	badgesOptionsOpener.addEventListener('click', function(){ openOptions(badgesOptionsBlock);});
	
	
	
	
	//document.getElementById('screenLoad').addEventListener('click', takeshot);
	
	for(var i = 0; i < characterTypes.length; i++)
	{
		characterTypes[i].getElementsByTagName("input")[0].addEventListener("change", changeCharacterType, false);		
	}
	for(var i = 0; i < krystalColourSelector.length; i++)
	{
		krystalColourSelector[i].getElementsByTagName("input")[0].addEventListener("change", changeCharacterColour, false);		
	}
	for(var i = 0; i < krystalDepthSelector.length; i++)
	{
		krystalDepthSelector[i].getElementsByTagName("input")[0].addEventListener("change", changeCharacterDepth, false);		
	}
	for(var i = 0; i < borderSelector.length; i++)
	{
		borderSelector[i].getElementsByTagName("input")[0].addEventListener("change", changeBorder, false);		
	}
	for(var i = 0; i < badgeSelected.length; i++)
	{
		badgeSelected[i].getElementsByTagName("input")[0].addEventListener("change", function(){changeBadge(this.getAttribute("data-custom-value"), this.getAttribute("data-badge-type"), this.value, this);}, false);		
	}
	
	plateRegInput.addEventListener('input', changeReg);
	frontPlateSelector.addEventListener('change', function(){
		changeplateSize(platePreview, frontPlateSelector);
		});
	rarePlateSelector.addEventListener('change', function(){
		changeplateSize(platePreviewRare, rarePlateSelector);
		});
		
	document.getElementById("border-3mm-black").style.display = "none";
	document.getElementById("border-3mm-colour").style.display = "none";
	document.getElementById("border-3mm-black-front").style.display = "none";
	document.getElementById("border-3mm-colour-front").style.display = "none";
	
	openOptions(mainOptionsBlock);
	changeTable();
	changeView('3d')
	document.getElementById('builderBody').style.display = 'block';
	document.getElementById('preloader').style.display = 'none';
};
var lkk = false;
function mobileMenu(){		
	mobOptions.style.top == '100%' ? mobOptions.style.top = '390px' : mobOptions.style.top = '100%';
	if(!lkk){
		mobOptions.style.top = '390px';
		lkk = true;
	}	
}

function parametersChange(n, v, fr){
	if(fr == 'f'){
		frontParameters[n] = v;
		hiddenFR[n].value = v;
	}else if(fr == 'r'){
		rearParameters[n] = v;
		hiddenRare[n].value = v;
	}
}

function closeAllOptions(){
	mainOptionsBlock.style.maxHeight = "75px";
	krystalOptionsBlock.style.maxHeight = "75px";
	borderOptionsBlock.style.maxHeight = "75px";
	badgesOptionsBlock.style.maxHeight = "75px";
}

function openOptions(n){
	if(n.style.maxHeight == "2300px"){
		n.style.maxHeight = "75px";
	}else{
		closeAllOptions();
		n.style.maxHeight = "2300px";
	}
}

function changeBadge(badgeName, badgeType, customLabel, k){
	console.log(k);
	let mm = k.parentElement.parentElement;
	for(let i = 0; i < mm.children.length; i++){
		mm.children[i].style.border = '1px solid #CCC';
	}	
	k.parentElement.style.border = '3px solid #034694';
	
	var frBdg = document.getElementById("badge");
	var rearBdg = document.getElementById("badge2");
	var a = customLabel;
	if(checkModificator() == 'front' || checkModificator() == 'both'){
		parametersChange(6, customLabel, 'f');
	}
	if(checkModificator() == 'rear' || checkModificator() == 'both'){
		parametersChange(6, customLabel, 'r');
	}
	if(a == 'none-n'){
		if(checkModificator() == 'front' || checkModificator() == 'both'){
			frBdg.style.display = 'none';
			document.getElementById("badge-fourd-bottom").style.display = 'none';
			platePreview.classList.remove(badgeName);
				platePreview.classList.remove("badge");
			
		}
		if(checkModificator() == 'both' || checkModificator() == 'rear'){
			rearBdg.style.display = 'none';
			document.getElementById("badge-fourd-bottom2").style.display = 'none';
			platePreviewRare.classList.remove(badgeName);
				platePreviewRare.classList.remove("badge");
		}
	}else{
			if(checkModificator() == 'front' || checkModificator() == 'both'){
				frBdg.style.display = 'block';
				document.getElementById("badge-fourd-bottom").style.display = 'block';
			}
			if(checkModificator() == 'both' || checkModificator() == 'rear'){
				rearBdg.style.display = 'block';
				document.getElementById("badge-fourd-bottom2").style.display = 'block';
			}
			
			if(checkModificator() == 'front' || checkModificator() == 'both'){
				
				
				
				// Add the badge name to the class list.
				frBdg.classList.remove("fourd-eng");
				frBdg.classList.remove("fourd-sco");
				frBdg.classList.remove("fourd-wal");
				frBdg.classList.remove("fourd-uk");
				frBdg.classList.remove("threed-eng");
				frBdg.classList.remove("threed-sco");
				frBdg.classList.remove("threed-wal");
				frBdg.classList.remove("threed-uk");
				frBdg.classList.remove("printed-eng");
				frBdg.classList.remove("printed-sco");
				frBdg.classList.remove("printed-wal");
				frBdg.classList.remove("printed-uk");
				
				
	
				frBdg.classList.remove("fourd-badge");
				frBdg.classList.remove("gel-badge");
				frBdg.classList.remove("printed-badge");	
				frBdg.classList.add(badgeType + "-badge");

				// Add the badge type to the class list.
				frBdg.classList.remove("fourd");
				frBdg.classList.remove("gel");
				frBdg.classList.remove("printed");
				frBdg.classList.add(badgeType);
				frBdg.classList.add(badgeName);
				platePreview.classList.add(badgeName);
				platePreview.classList.add("badge");

				
				
			}
			if(checkModificator() == 'both' || checkModificator() == 'rear'){
				// Add the badge name to the class list.
				rearBdg.classList.remove("fourd-eng");
				rearBdg.classList.remove("fourd-sco");
				rearBdg.classList.remove("fourd-wal");
				rearBdg.classList.remove("fourd-uk");
				rearBdg.classList.remove("threed-eng");
				rearBdg.classList.remove("threed-sco");
				rearBdg.classList.remove("threed-wal");
				rearBdg.classList.remove("threed-uk");
				rearBdg.classList.remove("printed-eng");
				rearBdg.classList.remove("printed-sco");
				rearBdg.classList.remove("printed-wal");
				rearBdg.classList.remove("printed-uk");
				
				//frBdg.classList.add("badge");
	
				rearBdg.classList.remove("fourd-badge");
				rearBdg.classList.remove("gel-badge");
				rearBdg.classList.remove("printed-badge");	
				rearBdg.classList.add(badgeType + "-badge");

				// Add the badge type to the class list.
				rearBdg.classList.remove("fourd");
				rearBdg.classList.remove("gel");
				rearBdg.classList.remove("printed");
				rearBdg.classList.add(badgeType);
				rearBdg.classList.add(badgeName);
				
				platePreviewRare.classList.add(badgeName);
				platePreviewRare.classList.add("badge");
			}
	}
	changeTable();
	
}

function changeBorder(){	

	let mm = this.parentElement.parentElement;
	for(let i = 0; i < mm.children.length; i++){
		mm.children[i].style.border = '1px solid #CCC';
	}	
	this.parentElement.style.border = '3px solid #034694';

	if(checkModificator() == 'both' || checkModificator() == 'rear'){
		document.getElementById("border-3mm-black").style.display = "block";
		document.getElementById("border-3mm-colour").style.display = "block";
		document.getElementById("border-3mm-black").style.transform = "translate(0px, 0px)";
		
		document.getElementById("border-3mm-colour").classList.remove('red-krystal-border-colour');
		document.getElementById("border-3mm-colour").classList.remove('green-krystal-border-colour');
		document.getElementById("border-3mm-colour").classList.remove('blue-krystal-border-colour');
		document.getElementById("border-3mm-colour").classList.remove('orange-krystal-border-colour');
		document.getElementById("border-3mm-colour").classList.remove('yellow-krystal-border-colour');
		document.getElementById("border-3mm-colour").classList.remove('clear-krystal-border-colour');
		document.getElementById("border-3mm-colour").classList.remove('black-krystal-border-colour');
		
	let brdrs2 = document.getElementsByClassName("printOff");
		for(let i = 0; i < brdrs2.length; i++){
				brdrs2[i].style.display = 'block';
		}
	let brdrs3 = document.getElementsByClassName("3mm-brdr");
				for(let i = 0; i < brdrs3.length; i++){
						brdrs3[i].style.display = 'none';
				}	
	}
	if(checkModificator() == 'front' || checkModificator() == 'both'){
		document.getElementById("border-3mm-black-front").style.display = "block";
		document.getElementById("border-3mm-colour-front").style.display = "block";
		document.getElementById("border-3mm-black-front").style.transform = "translate(0px, 0px)";
		
		document.getElementById("border-3mm-colour-front").classList.remove('red-krystal-border-colour');
		document.getElementById("border-3mm-colour-front").classList.remove('green-krystal-border-colour');
		document.getElementById("border-3mm-colour-front").classList.remove('blue-krystal-border-colour');
		document.getElementById("border-3mm-colour-front").classList.remove('orange-krystal-border-colour');
		document.getElementById("border-3mm-colour-front").classList.remove('yellow-krystal-border-colour');
		document.getElementById("border-3mm-colour-front").classList.remove('clear-krystal-border-colour');
		document.getElementById("border-3mm-colour-front").classList.remove('black-krystal-border-colour');
		
		let brdrs23 = document.getElementsByClassName("printOfffront");
		for(let i = 0; i < brdrs23.length; i++){
				brdrs23[i].style.display = 'block';
		}
		let brdrs3 = document.getElementsByClassName("3mm-brdr-fr");
				for(let i = 0; i < brdrs3.length; i++){
						brdrs3[i].style.display = 'block';
				}	
	}
	
	
	if(checkModificator() == 'front' || checkModificator() == 'both'){
		parametersChange(5, this.value, 'f');
	}
	if(checkModificator() == 'rear' || checkModificator() == 'both'){
		parametersChange(5, this.value, 'r');
	}
	
	
	let brdrs = document.getElementsByClassName("3mm-brdr");
		for(let i = 0; i < brdrs.length; i++){
				brdrs[i].style.display = 'block';
		}
	if(this.value == "none-b"){
		if(checkModificator() == 'both' || checkModificator() == 'rear'){
		document.getElementById("border-3mm-black").style.display = "none";
		document.getElementById("border-3mm-colour").style.display = "none";
		}
		if(checkModificator() == 'front' || checkModificator() == 'both'){
		document.getElementById("border-3mm-black-front").style.display = "none";
		document.getElementById("border-3mm-colour-front").style.display = "none";
		}
		
	}else if(this.value == "krystal-r"){
		if(checkModificator() == 'both' || checkModificator() == 'rear'){
			document.getElementById("border-3mm-colour").classList.add('red-krystal-border-colour');
		}
		if(checkModificator() == 'front' || checkModificator() == 'both'){		
			document.getElementById("border-3mm-colour-front").classList.add('red-krystal-border-colour');
		}
	}
	else if(this.value == "krystal-g"){
		if(checkModificator() == 'both' || checkModificator() == 'rear'){
			document.getElementById("border-3mm-colour").classList.add('green-krystal-border-colour');
		}
		if(checkModificator() == 'front' || checkModificator() == 'both'){
			document.getElementById("border-3mm-colour-front").classList.add('green-krystal-border-colour');		
		}
	}
	else if(this.value == "krystal-b"){
		
		if(checkModificator() == 'both' || checkModificator() == 'rear'){
			document.getElementById("border-3mm-colour").classList.add('blue-krystal-border-colour');		
		}
		if(checkModificator() == 'front' || checkModificator() == 'both'){
			document.getElementById("border-3mm-colour-front").classList.add('blue-krystal-border-colour');
		}
	}
	else if(this.value == "krystal-o"){
		
		if(checkModificator() == 'both' || checkModificator() == 'rear'){
			document.getElementById("border-3mm-colour").classList.add('orange-krystal-border-colour');
		}
		if(checkModificator() == 'front' || checkModificator() == 'both'){
			document.getElementById("border-3mm-colour-front").classList.add('orange-krystal-border-colour');		
		}
	}
	else if(this.value == "krystal-y"){		
		if(checkModificator() == 'both' || checkModificator() == 'rear'){
			document.getElementById("border-3mm-colour").classList.add('yellow-krystal-border-colour');
		}
		if(checkModificator() == 'front' || checkModificator() == 'both'){		
			document.getElementById("border-3mm-colour-front").classList.add('yellow-krystal-border-colour');
		}
	}
	else if(this.value == "krystal-c"){
		
		if(checkModificator() == 'both' || checkModificator() == 'rear'){
			document.getElementById("border-3mm-colour").classList.add('clear-krystal-border-colour');
		}
		if(checkModificator() == 'front' || checkModificator() == 'both'){
			document.getElementById("border-3mm-colour-front").classList.add('clear-krystal-border-colour');
		}
	}
	else if(this.value == "4d 5mm-b"){		
		if(checkModificator() == 'both' || checkModificator() == 'rear'){
			document.getElementById("border-3mm-black").style.transform = "translate(-3px, 3px)";
			document.getElementById("border-3mm-black").style.display = "block";		
			document.getElementById("border-3mm-colour").style.display = "none";
		}
		if(checkModificator() == 'front' || checkModificator() == 'both'){		
			document.getElementById("border-3mm-black-front").style.transform = "translate(-3px, 3px)";		
			document.getElementById("border-3mm-black-front").style.display = "block";
			document.getElementById("border-3mm-colour-front").style.display = "none";
		}	
	}
	else if(this.value == "4d 3 mm-b"){		
		if(checkModificator() == 'both' || checkModificator() == 'rear'){
			document.getElementById("border-3mm-black").style.display = "block";
			document.getElementById("border-3mm-colour").style.display = "none";
			document.getElementById("border-3mm-black").style.transform = "translate(-3px, 3px)";
			let brdrs = document.getElementsByClassName("3mm-brdr");
				for(let i = 0; i < brdrs.length; i++){
						brdrs[i].style.display = 'none';
				}
		}
		if(checkModificator() == 'front' || checkModificator() == 'both'){		
			document.getElementById("border-3mm-black-front").style.transform = "translate(-3px, 3px)";
			document.getElementById("border-3mm-black-front").style.display = "block";
			document.getElementById("border-3mm-colour-front").style.display = "none";
			let brdrs3 = document.getElementsByClassName("3mm-brdr-fr");
				for(let i = 0; i < brdrs3.length; i++){
						brdrs3[i].style.display = 'none';
				}			
		}		
		
	}
	else if(this.value == "printed-r"){		
		if(checkModificator() == 'both' || checkModificator() == 'rear'){
			document.getElementById("border-3mm-colour").classList.add('red-krystal-border-colour');
			document.getElementById("border-3mm-black").style.display = "none";
			document.getElementById("border-3mm-colour").style.display = "block";		
			let brdrs2 = document.getElementsByClassName("printOff");
			for(let i = 0; i < brdrs2.length; i++){
					brdrs2[i].style.display = 'none';
			}		
		}
		if(checkModificator() == 'front' || checkModificator() == 'both'){			
			document.getElementById("border-3mm-colour-front").classList.add('red-krystal-border-colour');		
			document.getElementById("border-3mm-black-front").style.display = "none";
			document.getElementById("border-3mm-colour-front").style.display = "block";		
			let brdrs23 = document.getElementsByClassName("printOfffront");
			for(let i = 0; i < brdrs23.length; i++){
					brdrs23[i].style.display = 'none';
			}		
		}		
	}
		else if(this.value == "printed-g"){			
			if(checkModificator() == 'both' || checkModificator() == 'rear'){
				document.getElementById("border-3mm-colour").classList.add('green-krystal-border-colour');		
				document.getElementById("border-3mm-black").style.display = "none";
				document.getElementById("border-3mm-colour").style.display = "block";		
				let brdrs2 = document.getElementsByClassName("printOff");
				for(let i = 0; i < brdrs2.length; i++){
						brdrs2[i].style.display = 'none';
				}
		}
		if(checkModificator() == 'front' || checkModificator() == 'both'){
			document.getElementById("border-3mm-colour-front").classList.add('green-krystal-border-colour');		
			document.getElementById("border-3mm-black-front").style.display = "none";
			document.getElementById("border-3mm-colour-front").style.display = "block";
			let brdrs23 = document.getElementsByClassName("printOfffront");
			for(let i = 0; i < brdrs23.length; i++){
					brdrs23[i].style.display = 'none';
			}
		}		
	}
	else if(this.value == "printed-b"){		
		if(checkModificator() == 'both' || checkModificator() == 'rear'){
			document.getElementById("border-3mm-colour").classList.add('blue-krystal-border-colour');		
			document.getElementById("border-3mm-black").style.display = "none";
			document.getElementById("border-3mm-colour").style.display = "block";		
			let brdrs2 = document.getElementsByClassName("printOff");
			for(let i = 0; i < brdrs2.length; i++){
					brdrs2[i].style.display = 'none';
			}
		}
		if(checkModificator() == 'front' || checkModificator() == 'both'){
			document.getElementById("border-3mm-colour-front").classList.add('blue-krystal-border-colour');		
			document.getElementById("border-3mm-black-front").style.display = "none";
			document.getElementById("border-3mm-colour-front").style.display = "block";
			let brdrs23 = document.getElementsByClassName("printOfffront");
			for(let i = 0; i < brdrs23.length; i++){
					brdrs23[i].style.display = 'none';
			}
		}
	}else if(this.value == "printed-k"){		
		if(checkModificator() == 'both' || checkModificator() == 'rear'){
			document.getElementById("border-3mm-colour").classList.add('black-krystal-border-colour');		
			document.getElementById("border-3mm-black").style.display = "none";
			document.getElementById("border-3mm-colour").style.display = "block";		
			let brdrs2 = document.getElementsByClassName("printOff");
			for(let i = 0; i < brdrs2.length; i++){
					brdrs2[i].style.display = 'none';
			}		
		}
		if(checkModificator() == 'front' || checkModificator() == 'both'){
			document.getElementById("border-3mm-colour-front").classList.add('black-krystal-border-colour');		
			document.getElementById("border-3mm-black-front").style.display = "none";
			document.getElementById("border-3mm-colour-front").style.display = "block";		
			let brdrs23 = document.getElementsByClassName("printOfffront");
			for(let i = 0; i < brdrs23.length; i++){
					brdrs23[i].style.display = 'none';
			}
		}	
	}
	changeTable();
}

function changeView(n){
	
	if(window.screen.width > 1023){
		frToggler.style.opacity = 1;
		dToggler.style.opacity = 1;
		asideToggler.style.opacity = 1;
		console.log(window.screen.width);
		var scal;
		if(window.screen.width > 1400){
			scal = '1.6';
		}else if(window.screen.width > 1025 && window.screen.width < 1400 ){
			scal = '1.2';
		}else{
			scal = '0.5';
		}
		if(n == 'front'){
			platePreviewRotate.style.transform = 'rotate3d(1, 0, 0, -329deg) rotate3d(0, 1, 0, 0deg) rotate3d(0, 0, 1, 0deg) scale('+scal+')';
			platePreviewRareRotate.style.transform = 'rotate3d(1, 0, 0, -329deg) rotate3d(0, 1, 0, 0deg) rotate3d(0, 0, 1, 0deg) scale('+scal+')';

			//plateLetters.style.transform = 'rotate3d(1, 0, 0, -329deg) rotate3d(0, 1, 0, 0deg) rotate3d(0, 0, 1, 0deg) scale('+scal+')';

			plateLettersRotate.forEach((element)=> {
				element.style.transform = 'rotate3d(1, 0, 0, -329deg) rotate3d(0, 1, 0, 0deg) rotate3d(0, 0, 1, 0deg) scale('+scal+')';
			});
			plateBordersRotate.forEach((element)=> {
				element.style.transform = 'rotate3d(1, 0, 0, -329deg) rotate3d(0, 1, 0, 0deg) rotate3d(0, 0, 1, 0deg) scale('+scal+')';
			});
			plateBadgeRotate.forEach((element)=> {
				element.style.transform = 'rotate3d(1, 0, 0, -329deg) rotate3d(0, 1, 0, 0deg) rotate3d(0, 0, 1, 0deg) scale('+scal+')';
			});
			frToggler.style.opacity = 0.8;

		}else if(n == '3d'){
			platePreviewRotate.style.transform = 'rotate3d(1, 0, 0, -309deg) rotate3d(0, 1, 0, 0deg) rotate3d(0, 0, 1, -21deg) scale('+scal+')';
			platePreviewRareRotate.style.transform = 'rotate3d(1, 0, 0, -309deg) rotate3d(0, 1, 0, 0deg) rotate3d(0, 0, 1, -21deg) scale('+scal+')';
		    //plateLetters.style.transform = 'rotate3d(1, 0, 0, -309deg) rotate3d(0, 1, 0, 0deg) rotate3d(0, 0, 1, -21deg) scale('+scal+')';
		    plateLettersRotate.forEach((element)=> {
				element.style.transform = 'rotate3d(1, 0, 0, -309deg) rotate3d(0, 1, 0, 0deg) rotate3d(0, 0, 1, -21deg) scale('+scal+')';
			});
			plateBordersRotate.forEach((element)=> {
				element.style.transform = 'rotate3d(1, 0, 0, -309deg) rotate3d(0, 1, 0, 0deg) rotate3d(0, 0, 1, -21deg) scale('+scal+')';
			});
			plateBadgeRotate.forEach((element)=> {
				element.style.transform = 'rotate3d(1, 0, 0, -309deg) rotate3d(0, 1, 0, 0deg) rotate3d(0, 0, 1, -21deg) scale('+scal+')';
			});
			dToggler.style.opacity = 0.8;
		}else if(n == 'aside'){
			console.log(scal);
			platePreviewRotate.style.transform = 'rotate3d(1, 0, 0, -299deg) rotate3d(0, 1, 0, 0deg) rotate3d(0, 0, 1, 36deg) scale('+scal+')';
			platePreviewRareRotate.style.transform = 'rotate3d(1, 0, 0, -299deg) rotate3d(0, 1, 0, 0deg) rotate3d(0, 0, 1, 36deg) scale('+scal+')';
			//plateLetters.style.transform = 'rotate3d(1, 0, 0, -299deg) rotate3d(0, 1, 0, 0deg) rotate3d(0, 0, 1, 36deg) scale('+scal+')';
			plateLettersRotate.forEach((element)=> {
				element.style.transform = 'rotate3d(1, 0, 0, -299deg) rotate3d(0, 1, 0, 0deg) rotate3d(0, 0, 1, 36deg) scale('+scal+')';
			});
			plateBordersRotate.forEach((element)=> {
				element.style.transform = 'rotate3d(1, 0, 0, -299deg) rotate3d(0, 1, 0, 0deg) rotate3d(0, 0, 1, 36deg) scale('+scal+')';
			});
			plateBadgeRotate.forEach((element)=> {
				element.style.transform = 'rotate3d(1, 0, 0, -299deg) rotate3d(0, 1, 0, 0deg) rotate3d(0, 0, 1, 36deg) scale('+scal+')';
			});
			asideToggler.style.opacity = 0.8;
		}
	}
	
}

function changeCharacterDepth(){
	let mm = this.parentElement.parentElement;
	for(let i = 0; i < mm.children.length; i++){
		mm.children[i].style.border = '1px solid #CCC';
	}	
    this.parentElement.style.border = '3px solid #034694';
    

    var depth = this.value;
	var depthList = ['thick','doublethick','regular','triple'];
	for(let i = 0; i < depthList.length; i++){
		platePreview.classList.remove("ft-depth-"+depthList[i]);
		platePreviewRare.classList.remove("ft-depth-"+depthList[i]);
	}
	platePreview.classList.add("ft-depth-"+depth);
    platePreviewRare.classList.add("ft-depth-"+depth);
	
	
	
}

function changeCharacterColour(){
	
	let mm = this.parentElement.parentElement;
	for(let i = 0; i < mm.children.length; i++){
		mm.children[i].style.border = '1px solid #CCC';
	}	
	this.parentElement.style.border = '3px solid #034694';
	
	var label = this.value;
	var colour = this.value.toLowerCase();
	
	if(checkModificator() == 'front' || checkModificator() == 'both'){
		parametersChange(4, this.value, 'f');
	}
	if(checkModificator() == 'rear' || checkModificator() == 'both'){
		parametersChange(4, this.value, 'r');
	}
	
if(checkModificator() == 'both' || checkModificator() == 'front'){
	platePreview.classList.remove("black-krystal");
	platePreview.classList.remove("red-krystal");
	platePreview.classList.remove("green-krystal");
	platePreview.classList.remove("blue-krystal");
	platePreview.classList.remove("orange-krystal");
	platePreview.classList.remove("yellow-krystal");
	platePreview.classList.remove("white-krystal");
	platePreview.classList.remove("clear-krystal");
	platePreview.classList.add(colour + "-krystal");
	platePreview.classList.add("krystal-text");
	}
		if(checkModificator() == 'rear' || checkModificator() == 'both'){
	platePreviewRare.classList.remove("black-krystal");
	platePreviewRare.classList.remove("red-krystal");
	platePreviewRare.classList.remove("green-krystal");
	platePreviewRare.classList.remove("blue-krystal");
	platePreviewRare.classList.remove("orange-krystal");
	platePreviewRare.classList.remove("yellow-krystal");
	platePreviewRare.classList.remove("white-krystal");
	platePreviewRare.classList.remove("clear-krystal");
	platePreviewRare.classList.add(colour + "-krystal");
	platePreviewRare.classList.add("krystal-text");
		}
		changeTable();
}

function checkModificator(){
	var que;	
	for(let i = 0; i < modificatorSelected.children.length; i++){
		 if(modificatorSelected.children[i].children[0].checked){
			que = modificatorSelected.children[i].children[0].value;
		 }
	}
	return que;
}

function changeCharacterType(){	
	let mm = this.parentElement.parentElement;
	for(let i = 0; i < mm.children.length; i++){
		mm.children[i].style.border = '1px solid #CCC';
	}	
	this.parentElement.style.border = '3px solid #034694';
	
	if(checkModificator() == 'both' || checkModificator() == 'front'){
		platePreview.classList.remove("krystal-text");
		platePreview.classList.remove("fourd-text");
		platePreview.classList.remove("gel-text");
		platePreview.classList.remove("gel-text-only");
		platePreview.classList.remove("printed-text");
		platePreview.classList.remove("gel-krystal-text");
		platePreview.classList.remove("krystal-text-2");
	}
	if(checkModificator() == 'rear' || checkModificator() == 'both'){
		platePreviewRare.classList.remove("krystal-text");
		platePreviewRare.classList.remove("fourd-text");
		platePreviewRare.classList.remove("gel-text");
		platePreviewRare.classList.remove("gel-text-only");
		platePreviewRare.classList.remove("printed-text");
		platePreviewRare.classList.remove("gel-krystal-text");
		platePreviewRare.classList.remove("krystal-text-2");
	}
	
	if(checkModificator() == 'front' || checkModificator() == 'both'){
		parametersChange(3, this.value, 'f');
	}
	if(checkModificator() == 'rear' || checkModificator() == 'both'){
		parametersChange(3, this.value, 'r');
	}
	
	if(this.value == "krystal 4d" || this.value == "krystal gel"){
		document.getElementById('krystal-colour').style.display = 'block';
	}else{
		document.getElementById('krystal-colour').style.display = 'none';
	}
	
	if(this.value == "krystal 4d")
	{
		// Show the options for krystal text colour.
		if(checkModificator() == 'both' || checkModificator() == 'front'){
			platePreview.classList.add("krystal-text");
			
		}
		if(checkModificator() == 'rear' || checkModificator() == 'both'){
			platePreviewRare.classList.add("krystal-text");
		}

		
	}else if(this.value == "krystal gel")
	{
		// Show the options for krystal text colour.
		if(checkModificator() == 'both' || checkModificator() == 'front'){
		platePreview.classList.add("krystal-text");
		platePreview.classList.add("gel-text");
		}
		if(checkModificator() == 'rear' || checkModificator() == 'both'){		
		platePreviewRare.classList.add("krystal-text");
		platePreviewRare.classList.add("gel-text");
		}

	}else if(this.value == "4d 3 mm")
	{
		if(checkModificator() == 'both' || checkModificator() == 'front'){
			platePreview.classList.add("fourd-text");
		}
		if(checkModificator() == 'rear' || checkModificator() == 'both'){
			platePreviewRare.classList.add("fourd-text");
		}
	}else if(this.value == "4d 5mm")
	{
		if(checkModificator() == 'both' || checkModificator() == 'front'){
			platePreview.classList.add("krystal-text-2");
		}
		
		if(checkModificator() == 'rear' || checkModificator() == 'both'){
			platePreviewRare.classList.add("krystal-text-2");
		}
		
	}else if(this.value == "3d gel")
	{
		if(checkModificator() == 'both' || checkModificator() == 'front'){
			platePreview.classList.add("krystal-text-2");
			platePreview.classList.add("gel-text");
		}
		if(checkModificator() == 'rear' || checkModificator() == 'both'){
		platePreviewRare.classList.add("krystal-text-2");
		platePreviewRare.classList.add("gel-text");
		}
	}
	changeTable();
}

//display Reg in viewport
function changeReg(){
	console.log(plateRegInput.value);
	if(plateReg !== null){plateReg.innerHTML = '<div>'+plateRegInput.value+'</div>';};
	if(plateReg2 !==null){plateReg2.innerHTML = '<div>'+plateRegInput.value+'</div>';};
	if(plateReg3 !==null){plateReg3.innerHTML = '<div>'+plateRegInput.value+'</div>';};
	if(plateReg4 !==null){plateReg4.innerHTML = '<div>'+plateRegInput.value+'</div>';};
	if(plateReg5 !==null){plateReg5.innerHTML = '<div>'+plateRegInput.value+'</div>';};
	if(plateReg6 !==null){plateReg6.innerHTML = '<div>'+plateRegInput.value+'</div>';};
	if(plateRegColour !==null){plateRegColour.innerHTML = '<div>'+plateRegInput.value+'</div>';};
	if(plateRegColour2 !==null){plateRegColour2.innerHTML = '<div>'+plateRegInput.value+'</div>';};
	if(plateRegColour3 !==null){plateRegColour3.innerHTML = '<div>'+plateRegInput.value+'</div>';};
	if(plateRegColour4 !==null){plateRegColour4.innerHTML = '<div>'+plateRegInput.value+'</div>';};
	if(plateRegColour5 !==null){plateRegColour5.innerHTML = '<div>'+plateRegInput.value+'</div>';};
	if(plateRegColour6 !==null){plateRegColour6.innerHTML = '<div>'+plateRegInput.value+'</div>';};
	if(plateRegRare !==null){plateRegRare.innerHTML = '<div>'+plateRegInput.value+'</div>';};
	if(plateRegRare2 !==null){plateRegRare2.innerHTML = '<div>'+plateRegInput.value+'</div>';};
	if(plateRegRare3 !==null){plateRegRare3.innerHTML = '<div>'+plateRegInput.value+'</div>';};
	if(plateRegRare4 !==null){plateRegRare4.innerHTML = '<div>'+plateRegInput.value+'</div>';};
	if(plateRegRare5 !==null){plateRegRare5.innerHTML = '<div>'+plateRegInput.value+'</div>';};
	if(plateRegRare6 !==null){plateRegRare6.innerHTML = '<div>'+plateRegInput.value+'</div>';};
	if(plateRegRearColour !==null){plateRegRearColour.innerHTML = '<div>'+plateRegInput.value+'</div>';};
	if(plateRegRearColour2 !==null){plateRegRearColour2.innerHTML = '<div>'+plateRegInput.value+'</div>';};
	if(plateRegRearColour3 !==null){plateRegRearColour3.innerHTML = '<div>'+plateRegInput.value+'</div>';};
	if(plateRegRearColour4 !==null){plateRegRearColour4.innerHTML = '<div>'+plateRegInput.value+'</div>';};
	if(plateRegRearColour5 !==null){plateRegRearColour5.innerHTML = '<div>'+plateRegInput.value+'</div>';};
	if(plateRegRearColour6 !==null){plateRegRearColour6.innerHTML = '<div>'+plateRegInput.value+'</div>';};


	// plateReg.innerHTML = '<div>'+plateRegInput.value+'</div>';
	// plateReg2.innerHTML = '<div>'+plateRegInput.value+'</div>';
	// plateReg3.innerHTML = '<div>'+plateRegInput.value+'</div>';
	// plateReg4.innerHTML = '<div>'+plateRegInput.value+'</div>';
	// plateReg5.innerHTML = '<div>'+plateRegInput.value+'</div>';
	// plateReg6.innerHTML = '<div>'+plateRegInput.value+'</div>';
	// plateRegColour.innerHTML = '<div>'+plateRegInput.value+'</div>';
	// plateRegColour2.innerHTML = '<div>'+plateRegInput.value+'</div>';
	// plateRegColour3.innerHTML = '<div>'+plateRegInput.value+'</div>';
	// plateRegColour4.innerHTML = '<div>'+plateRegInput.value+'</div>';
	// plateRegColour5.innerHTML = '<div>'+plateRegInput.value+'</div>';
	// plateRegColour6.innerHTML = '<div>'+plateRegInput.value+'</div>';
	// plateRegRare.innerHTML = '<div>'+plateRegInput.value+'</div>';
	// plateRegRare2.innerHTML = '<div>'+plateRegInput.value+'</div>';
	// plateRegRare3.innerHTML = '<div>'+plateRegInput.value+'</div>';
	// plateRegRare4.innerHTML = '<div>'+plateRegInput.value+'</div>';
	// plateRegRare5.innerHTML = '<div>'+plateRegInput.value+'</div>';
	// plateRegRare6.innerHTML = '<div>'+plateRegInput.value+'</div>';
	// plateRegRearColour.innerHTML = '<div>'+plateRegInput.value+'</div>';
	// plateRegRearColour2.innerHTML = '<div>'+plateRegInput.value+'</div>';
	// plateRegRearColour3.innerHTML = '<div>'+plateRegInput.value+'</div>';
	// plateRegRearColour4.innerHTML = '<div>'+plateRegInput.value+'</div>';
	// plateRegRearColour5.innerHTML = '<div>'+plateRegInput.value+'</div>';
	// plateRegRearColour6.innerHTML = '<div>'+plateRegInput.value+'</div>';
	
	parametersChange(0, plateRegInput.value, 'f');
	parametersChange(0, plateRegInput.value, 'r');
	
	changeTable();
	
}

function changeTable(){
	let titles = new Array("Reg", 'Letter Spacing', "Size", 'Material', 'Colour', 'Border', 'Badge');
	document.getElementById('description').innerHTML = '';
	document.getElementById('description').innerHTML += '<h3>Front plate</h3>';
	document.getElementById('description').innerHTML += '<p>';
	for(let i = 0; i < frontParameters.length; i++){
		document.getElementById('description').innerHTML += '<span style="font-weight: 900;">'+titles[i]+'</span>'+": "+frontParameters[i]+"; ";
	}
	document.getElementById('description').innerHTML += '</p>'
	
	for(let i = 0; i < frontArrayHuge.length; i++){		
		if(frontArrayHuge[i]['attributes']['attribute_character-type'].toLowerCase()  == frontParameters[3]){
			if(frontArrayHuge[i]['attributes']['attribute_border'].toLowerCase() == frontParameters[5].slice(0, -2)){
				if(frontArrayHuge[i]['attributes']['attribute_badge'].toLowerCase() == frontParameters[6].slice(0, -2)){
					if(document.getElementById('description') != null){
						document.getElementById('description').innerHTML += '<h4>£'+frontArrayHuge[i]['display_price']+'</h4>';
					}
				}
			}
		}
	}
	
	document.getElementById('description').innerHTML += '<h3>Rear plate</h3>';
	document.getElementById('description').innerHTML += '<p>';
	for(let i = 0; i < rearParameters.length; i++){
		document.getElementById('description').innerHTML += '<span style="font-weight: 900;">'+titles[i]+'</span>'+": "+rearParameters[i]+"; ";
	}
	document.getElementById('description').innerHTML += '</p>';
	
	for(let i = 0; i < rearArrayHuge.length; i++){		
		if(rearArrayHuge[i]['attributes']['attribute_character-type'].toLowerCase()  == rearParameters[3]){
			if(rearArrayHuge[i]['attributes']['attribute_border'].toLowerCase() == rearParameters[5].slice(0, -2)){
				if(rearArrayHuge[i]['attributes']['attribute_badge'].toLowerCase() == rearParameters[6].slice(0, -2)){
					document.getElementById('description').innerHTML += '<h4>£'+rearArrayHuge[i]['display_price']+'</h4>';
				}
			}
		}
	}
	
	
}

function changeplateSize(r, k){
	changeTable();
	//r.style.display = "block";
	r.classList.remove("standardoblong");
	r.classList.remove("shortplate18");
	r.classList.remove("shortplate16");
	r.classList.remove("shortplate14");
	r.classList.remove("rangerover");
	r.classList.remove("square");
	r.classList.remove("motorcycle");
	r.classList.remove("nofrontplate");
	r.classList.remove("norearplate");
	
	var ft_fields = ['ft-520mm','ft-420mm','ft-445mm432mm','ft-295mm243mm'];
	for(var i = 0;i<ft_fields.length;i++){
		r.classList.remove(ft_fields[i]);
	}	
	
	plateRegInput.maxLength = 9;
	
	if(k.name == 'front'){
		parametersChange(2, k.value, 'f');
	}
	if(k.name == 'rear'){
		parametersChange(2, k.value, 'r');
	}
	
	
	if(k.value == "ft-295mm243mm"){
		r.style.width = "295px";
		r.style.height = "126px";
		
		
		r.classList.add("ft-295mm243mm");
	}
	
	if(k.value == "ft-420mm"){
		r.style.width = "420px";
		r.style.height = "126px";
		
		
		r.classList.add("ft-420mm");
	}
	
	if(k.value == "ft-520mm"){
		r.style.width = "520px";
		r.style.height = "126px";
		
		
		r.classList.add("ft-520mm");
	}
	
	
	
	
	if(k.value == "ft-445mm432mm"){
		r.style.width = "445px";
		r.style.height = "126px";
		
		
		r.classList.add("ft-445mm432mm");
	}
	if(k.value == "standard oblong")
	{
		r.style.width = "520px";
		r.style.height = "126px";
		
		
		r.classList.add("standardoblong");
	}
	else if(k.value == "18 inch")
	{
		r.style.width = "460px";
		r.style.height = "126px";
		plateRegInput.maxLength = 7;
		r.classList.add("shortplate18");
	}
	else if(k.value == "16 inch")
	{
		r.style.width = "406px";
		r.style.height = "126px";
		plateRegInput.maxLength = 6;

		r.classList.add("shortplate16");
	}
	else if(k.value == "14 inch")
	{
		r.style.width = "355px";
		r.style.height = "126px";
		plateRegInput.maxLength = 5;

		r.classList.add("shortplate14");
	}
	else if(k.value == "range rover")
	{
		r.style.width = "533px";
		r.style.height = "168px";

		r.classList.add("rangerover");
	}
	else if(k.value == "4x4 square")
	{
		r.style.width = "279px";
		r.style.height = "239px";
		r.classList.add("square");
		var rearBdg = document.getElementById("badge2");
		rearBdg.style.display = 'none';
		document.getElementById("badge-fourd-bottom2").style.display = 'none';
		platePreviewRare.classList.remove("badge");
	}
	else if(k.value == "motorcycle")
	{
		r.style.width = "228px";
		r.style.height = "189px";
		r.classList.add("motorcycle");
		var rearBdg = document.getElementById("badge2");
		rearBdg.style.display = 'none';
		document.getElementById("badge-fourd-bottom2").style.display = 'none';
		platePreviewRare.classList.remove("badge");
	}
	else if(k.value == "no front plate")
	{
		r.classList.add("nofrontplate");
	}
	else if(k.value == "no rear plate")
	{
		r.classList.add("norearplate");
	}
	changeTable();
}

// Define the function 
        // to screenshot the div
        function takeshot() {
			setTimeout(function(){
				let div =
					document.getElementById('mainCanvas');
	  
				// Use the html2canvas
				// function to take a screenshot
				// and append it
				// to the output div
				html2canvas(div).then(
					function (canvas) {
						document
						.getElementById('description')
						.appendChild(canvas);
					})
			}, 1200);
		}