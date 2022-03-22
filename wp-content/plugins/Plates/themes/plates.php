<?php
	
	global $woocommerce;
	$product = wc_get_product(161);
	$variations = $product->get_available_variations();
	$iter = 0;
	
	$borderAfterPost;
	$borderAfterPost['krystal-r'] = 'Red Krystal';
	$borderAfterPost['krystal-g'] = 'Green krystal';
	$borderAfterPost['krystal-b'] = 'Blue krystal';
	$borderAfterPost['krystal-o'] = 'Orange krystal';
	$borderAfterPost['krystal-y'] = 'Yellow krystal';
	$borderAfterPost['krystal-c'] = 'Clear krystal';
	$borderAfterPost['4d 5mm-b'] = '4D 5MM';
	$borderAfterPost['4d 3 mm-b'] = '4D 3MM';
	$borderAfterPost['printed-r'] = 'Red Printed';
	$borderAfterPost['printed-g'] = 'Green Printed';
	$borderAfterPost['printed-b'] = 'Blue Printed';
	$borderAfterPost['printed-k'] = 'Black Printed';
	$borderAfterPost['none-b'] = 'None';
	
	$badgeAfterPost;
	$badgeAfterPost['4d-e'] = 'England 4D';
	$badgeAfterPost['4d-s'] = 'Scotland 4D';
	$badgeAfterPost['4d-w'] = 'Whales 4D';
	$badgeAfterPost['4d-u'] = 'UK 4D';
	$badgeAfterPost['gel-e'] = 'England Gel';
	$badgeAfterPost['gel-s'] = 'Scotland Gel';
	$badgeAfterPost['gel-w'] = 'Whales Gel';
	$badgeAfterPost['gel-u'] = 'UK Gel';
	$badgeAfterPost['printed-e'] = 'England Printed';
	$badgeAfterPost['printed-s'] = 'Scotland Printed';
	$badgeAfterPost['printed-w'] = 'Whales Printed';
	$badgeAfterPost['printed-u'] = 'UK Printed';
	$badgeAfterPost['none-n'] = 'None';
	
	if($_POST['front'] == "no front plate" || $_POST['rear'] == "no rear plate"){
		$cnt = 'Single';
	}else{
		$cnt = 'Both';
	}
	$added = false;	
	if($_POST['front'] != "no front plate"){
		foreach($variations as $var){
			if(strtolower($var['attributes']['attribute_character-type']) == $_POST['frKrystal']){
				if(strtolower($var['attributes']['attribute_border']) == substr($_POST['frBorder'], 0, -2)){				
					if(strtolower($var['attributes']['attribute_badge']) == substr($_POST['frBadge'], 0, -2)){		
							$txtTMP = 'REG: '.$_POST['reg'].'; Character spacing: '.$_POST['spacing'].'; Plate size: '.$_POST['front'].'; Character type: '.$_POST['frKrystal'].'; Colour: '.$_POST['frColour'].'; Border: '.$borderAfterPost[$_POST['frBorder']]."; Badge:".$badgeAfterPost[$_POST['frBadge']].';';
							$tmp = array('add_size' => array('INFO' => $txtTMP));
							
							WC()->session->set_customer_session_cookie(true);
							
							WC()->cart->add_to_cart(161, 1, $var['variation_id'], array(), $tmp);
							
							do_action('shutdown');
							$added = 1;
							$priceFront = $var['display_price'];
					}
				}
			}
		}
	}
	
	if($_POST['rear'] != "no rear plate"){
		$product = wc_get_product(262);
		$variations = $product->get_available_variations();
		foreach($variations as $var){
			if(strtolower($var['attributes']['attribute_character-type']) == $_POST['rareKrystal']){
				if(strtolower($var['attributes']['attribute_border']) == substr($_POST['rareBorder'], 0, -2)){				
					if(strtolower($var['attributes']['attribute_badge']) == substr($_POST['rareBadge'], 0, -2)){		
							$txtTMP2 = 'REG: '.$_POST['reg'].'; Character spacing: '.$_POST['spacing'].'; Plate size: '.$_POST['rear'].'; Character type: '.$_POST['rareKrystal'].'; Colour: '.$_POST['rareColour'].'; Border: '.$borderAfterPost[$_POST['rareBorder']]."; Badge:".$badgeAfterPost[$_POST['rareBadge']].';';
							$tmp = array('add_size' => array('INFO' => $txtTMP2));
							
							WC()->session->set_customer_session_cookie(true);							
							WC()->cart->add_to_cart(262, 1, $var['variation_id'], array(), $tmp);
							
							
							
							//var_dump( 675 , 1,  $var['variation_id'],array(), $tmp);
							$added = 1;
							$priceRear = $var['display_price'];
					}
				}
			}
		}
	}

	
$product = wc_get_product(161);
$variations = $product->get_available_variations();
?>
<link rel="stylesheet" href="/wp-content/plugins/Plates/themes/style/main.css">
<script src="/wp-content/plugins/Plates/themes/scripts/main.js"></script>
<script src="/wp-content/plugins/Plates/themes/scripts/html2canvas.min.js"></script>
<script>
var frontArrayHuge = <?php echo json_encode($variations); ?>;
<?php
$product2 = wc_get_product(262);
$variations2 = $product->get_available_variations();
?>
var rearArrayHuge = <?php echo json_encode($variations2); ?>;

<?php if(isset($_POST['reg'])){ ?>

setTimeout( function(){
	plateRegInput.value = '<?php echo $_POST['reg']; ?>';
	changeReg();
	frontPlateSelector.value = '<?php echo $_POST['front']; ?>';
	rarePlateSelector.value = '<?php echo $_POST['rear']; ?>';	
	changeplateSize(platePreviewRare, rarePlateSelector);
	changeplateSize(platePreview, frontPlateSelector);
	
	/*Change character type*/
	
		platePreview.classList.remove("krystal-text");
		platePreview.classList.remove("fourd-text");
		platePreview.classList.remove("gel-text");
		platePreview.classList.remove("gel-text-only");
		platePreview.classList.remove("printed-text");
		platePreview.classList.remove("gel-krystal-text");
		platePreview.classList.remove("krystal-text-2");
		platePreviewRare.classList.remove("krystal-text");
		platePreviewRare.classList.remove("fourd-text");
		platePreviewRare.classList.remove("gel-text");
		platePreviewRare.classList.remove("gel-text-only");
		platePreviewRare.classList.remove("printed-text");
		platePreviewRare.classList.remove("gel-krystal-text");
		platePreviewRare.classList.remove("krystal-text-2");
	
	let frChar = '<?php echo $_POST['frKrystal']; ?>';
	let rrChar = '<?php echo $_POST['rareKrystal']; ?>';
	if(frChar == "krystal 4d"){
		platePreview.classList.add("krystal-text");
	}
	if(rrChar == "krystal 4d"){
		platePreviewRare.classList.add("krystal-text");
	}
	if(frChar == "krystal gel"){
		platePreview.classList.add("krystal-text");
		platePreview.classList.add("gel-text");
	}
	if(rrChar == "krystal gel"){		
		platePreviewRare.classList.add("krystal-text");
		platePreviewRare.classList.add("gel-text");
	}
	if(frChar == "4d 3 mm"){
			platePreview.classList.add("fourd-text");
		}
	if(rrChar == "4d 3 mm"){
			platePreviewRare.classList.add("fourd-text");
		}
	if(frChar == "4d 5mm"){
			platePreview.classList.add("krystal-text-2");
		}
		
	if(rrChar == "4d 5mm"){
			platePreviewRare.classList.add("krystal-text-2");
		}
	if(frChar == "3d gel"){
			platePreview.classList.add("krystal-text-2");
			platePreview.classList.add("gel-text");
		}
	if(rrChar == "3d gel"){
		platePreviewRare.classList.add("krystal-text-2");
		platePreviewRare.classList.add("gel-text");
		}
	
	/*end change character type*/
	
	/*color changing*/
	
	let frChar2 = '<?php echo $_POST['frColour']; ?>';
	let rrChar2 = '<?php echo $_POST['rareColour']; ?>';
	
		platePreview.classList.remove("black-krystal");
		platePreview.classList.remove("red-krystal");
		platePreview.classList.remove("green-krystal");
		platePreview.classList.remove("blue-krystal");
		platePreview.classList.remove("orange-krystal");
		platePreview.classList.remove("yellow-krystal");
		platePreview.classList.remove("clear-krystal");
		platePreview.classList.add(frChar2 + "-krystal");
		platePreview.classList.add("krystal-text");
		platePreviewRare.classList.remove("black-krystal");
		platePreviewRare.classList.remove("red-krystal");
		platePreviewRare.classList.remove("green-krystal");
		platePreviewRare.classList.remove("blue-krystal");
		platePreviewRare.classList.remove("orange-krystal");
		platePreviewRare.classList.remove("yellow-krystal");
		platePreviewRare.classList.remove("clear-krystal");
		platePreviewRare.classList.add(rrChar2 + "-krystal");
		platePreviewRare.classList.add("krystal-text");
	
	/*end color change*/
	
	/*border change*/
		
		let frChar3 = '<?php echo $_POST['frBorder']; ?>';
		let rrChar3 = '<?php echo $_POST['rareBorder']; ?>';
		
		/*let brdrs = document.getElementsByClassName("3mm-brdr");
		for(let i = 0; i < brdrs.length; i++){
				brdrs[i].style.display = 'block';
		}
		if(frChar3 == ){
		document.getElementById("border-3mm-black").style.display = "none";
		document.getElementById("border-3mm-colour").style.display = "none";
		}
		if(rrChar3 == ){
		document.getElementById("border-3mm-black-front").style.display = "none";
		document.getElementById("border-3mm-colour-front").style.display = "none";
		}
		
		if(this.value == "krystal-r"){
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
		
	/*end border change*/
	
	
	//takeshot();
	
} , 2300);

<?php } ?>
 </script>

<div id="preloader"></div>
<div id="builderBody" onload="start">

	<?php if(isset($_POST['reg'])){ ?>
	<div class="plates-opptions plates">
		<h3>Added to basket </h3>
		<h4>Front plate £<?php echo $priceFront; ?></h4>
		<p><?php echo $txtTMP; ?></p>
		<h4>Rear plate £<?php echo $priceRear; ?></h4>
		<p><?php echo $txtTMP2; ?></p>
		<h4>Total: £<?php $ttl = number_format((float)$priceFront, 2, '.', '')+number_format((float)$priceRear, 2, '.', '');
			echo $ttl;
		?></h4>
		<a href="/cart/" class="button">View Basket</a>
		<a href="/checkout" class="button">Proceed to checkout</a>
		<a href="/product-category/accessories/" class="button">Choose Accessories</a>
	</div>
	<?php } ?>

	<div <?php if(!isset($_POST['reg'])){ ?> id="platesMobileOpts" <?php } ?> class="plates-opptions plates" <?php if(isset($_POST['reg'])){ ?> style="display: none;" <?php } ?> >
		<div id="mobileOpener">&#x2195; Options &#x2195;</div>
		<form method="post" action="<?php echo $_SERVER['REQUEST_URI']; ?>">
			<div id="mainOptions" class="optionsSections">
				<div id="mainOptionsHeader" class="optionsHeader"><h3><span><img src="https://img.icons8.com/pastel-glyph/64/000000/car--v2.png"/></span> Main options</h3></div>
				<label><h4>Your reg</h4></label>
				<input type="text" name="reg" id="plateRegInput" maxlength="9" placeholder="Your reg" required>
				<label><h4>Character spacing</h4></label>
					<select id="character-spacing-selection" name="spacing">
						<option value="road legal spacing">Road Legal Spacing</option>
						<option value="spacing as i've typed above">Space My Characters As I've Typed Above (show plates)</option>
					</select>
				<p><span style="font-size: 11px;">It is your responsibility to enter the correct spacing (DVLA requirement) into our plate builder, as this will not be automatically added.</span></p>
				<label><h4>Front plate</h4></label>
					<select id="front-plate-selection" name="front">
						<option value="standard oblong">Standard Oblong (20" x 4.3")</option>
						<option value="18 inch">18" Oblong (7 Characters Max)</option>
						<option value="16 inch">16" Oblong (6 Characters Max)</option>
						<option value="14 inch">14" Oblong (5 Characters Max)</option>
						<option value="14 inch">14" Oblong (5 Characters Max)</option>
						
						



						
						<option value="no front plate">No front plate</option>
					</select>
				<label><h4>Rear plate</h4></label>
					<select id="rear-plate-selection" name="rear">
						<option value="standard oblong">Standard Oblong (20" x 4.3")</option>
						<option value="18 inch">18" Oblong (7 Characters Max)</option>
						<option value="16 inch">16" Oblong (6 Characters Max)</option>
						<option value="14 inch">14" Oblong (5 Characters Max)</option>
						<option value="4x4 square">Square (11" x 8")</option>
						<option value="range rover">Range Rover Rear (21" x 6")</option>
						<option value="motorcycle">Motorcycle (9" x 7")</option>
						
						<option value="ft-520mm">5520MM</option>
						<option value="ft-420mm">420MM</option>
						<option value="ft-445mm432mm">445MM432MM</option>
						<option value="ft-295mm243mm">295MM243MM</option>
						
						
						<option value="no rear plate">No rear plate</option>&gt;
					</select>
			</div>
			<div id="krystalOptions" class="optionsSections">
				<div id="krystalOptionsHeader" class="optionsHeader"><h3><span><img src="https://img.icons8.com/wired/64/000000/character-animator.png"/></span> Lettering Style</h3></div>
			<label><h4>Krystal 4D</h4></label>
				<div style="width: 100%;" id="character-type" class="materials-radio">
					<label style='border: 3px solid #034694;'><img src="/wp-content/plugins/Plates/themes/style/img/character-types/krystal-character-type.jpg" alt=""><input type="radio" name="material" value="krystal 4d" checked>Krystal 4D</label>
					<label><img src="http://localhost/nomplates/wordpress/wp-content/plugins/Plates/themes/style/img/character-types/krystal-4d-gel-character-type.jpg" alt=""><input type="radio" name="material" value="krystal gel">Krystal Gel</label>
					<label><img src="http://localhost/nomplates/wordpress/wp-content/plugins/Plates/themes/style/img/character-types/4d-3mm-character-type.jpg" alt=""><input type="radio" name="material" value="4d 3 mm">Acrylic Block</label>
					<label><img src="http://localhost/nomplates/wordpress/wp-content/plugins/Plates/themes/style/img/character-types/3d-gel-character-type.jpg" alt=""><input type="radio" name="material" value="3d gel">Black Gel</label>
				</div>
			<label><h4>Krystal Colour</h4></label>
				<div class="materials-radio" id="krystal-colour">
					<label style='border: 3px solid #034694;'><img src="/wp-content/plugins/Plates/themes/style/img/character-colours/red-krystal.jpg" alt=""><input type="radio" name="krystalColour" value="red" checked>Red</label>
					<label><img src="/wp-content/plugins/Plates/themes/style/img/character-colours/green-krystal.jpg" alt=""><input type="radio" name="krystalColour" value="green">Green</label>
					<label><img src="/wp-content/plugins/Plates/themes/style/img/character-colours/blue-krystal.jpg" alt=""><input type="radio" name="krystalColour" value="blue">Blue</label>
					<label><img src="/wp-content/plugins/Plates/themes/style/img/character-colours/orange-krystal.jpg" alt=""><input type="radio" name="krystalColour" value="orange">Orange</label>
					<label><img src="/wp-content/plugins/Plates/themes/style/img/character-colours/yellow-krystal.jpg" alt=""><input type="radio" name="krystalColour" value="yellow">Yellow</label>
					<label><img src="/wp-content/plugins/Plates/themes/style/img/character-colours/clear-krystal.jpg" alt=""><input type="radio" name="krystalColour" value="white">Clear</label>
				</div>
			<label><h4>Depth</h4></label>
				<div class="materials-radio" id="krystal-depth">
					<label style='border: 3px solid #034694;'><input type="radio" name="krystalDepth" value="doublethick" checked>Double Thick</label>
					<label style='font-weight: bold;border: 1px solid #034694; '><input type="radio" name="krystalDepth" value="thick">Thick</label>
					<label style='border: 6px solid #034694;'><input type="radio" name="krystalDepth" value="triple">Triple </label>
					<label><input type="radio" name="krystalDepth" value="regular">Regular</label>
				</div>
			</div>
			<div id="bordersOptions" class="optionsSections">
				<div id="bordersOptionsHeader" class="optionsHeader"><h3><span><img src="https://img.icons8.com/ios/50/000000/ios-application-placeholder.png"/></span> Borders options</h3></div>
			<label><h4>Borders</h4></label>
				<div class="materials-radio" id="borders">
					<label style='border: 3px solid #034694;'><img src="/wp-content/plugins/Plates/themes/style/img/colours/none.svg" alt=""><input type="radio" name="border" value="none-b" checked>None</label>
					<label><img src="/wp-content/plugins/Plates/themes/style/img/border-icons/red-krystal-border.jpg" alt=""><input type="radio" name="border" value="krystal-r">Red krystal</label>
					<label><img src="/wp-content/plugins/Plates/themes/style/img/border-icons/green-krystal-border.jpg" alt=""><input type="radio" name="border" value="krystal-g">Green krystal</label>
					<label><img src="/wp-content/plugins/Plates/themes/style/img/border-icons/blue-krystal-border.jpg" alt=""><input type="radio" name="border" value="krystal-b">Blue krystal</label>
					<label><img src="/wp-content/plugins/Plates/themes/style/img/border-icons/orange-krystal-border.jpg" alt=""><input type="radio" name="border" value="krystal-o">Orange krystal</label>
					<label><img src="/wp-content/plugins/Plates/themes/style/img/border-icons/yellow-krystal-border.jpg" alt=""><input type="radio" name="border" value="krystal-y">Yellow krystal</label>
					<label><img src="/wp-content/plugins/Plates/themes/style/img/border-icons/clear-krystal-border.jpg" alt=""><input type="radio" name="border" value="krystal-c">Clear krystal</label>
					<label><img src="/wp-content/plugins/Plates/themes/style/img/border-icons/4d-5mm-border.jpg" alt=""><input type="radio" name="border" value="4d 5mm-b">4D 5MM</label>
					<label><img src="/wp-content/plugins/Plates/themes/style/img/border-icons/4d-3mm-border.jpg" alt=""><input type="radio" name="border" value="4d 3 mm-b">4D 3MM</label>
					<label><img src="/wp-content/plugins/Plates/themes/style/img/border-icons/red-printed-border.jpg" alt=""><input type="radio" name="border" value="printed-r">Red Printed</label>
					<label><img src="/wp-content/plugins/Plates/themes/style/img/border-icons/green-printed-border.jpg" alt=""><input type="radio" name="border" value="printed-g">Green Printed</label>
					<label><img src="/wp-content/plugins/Plates/themes/style/img/border-icons/blue-printed-border.jpg" alt=""><input type="radio" name="border" value="printed-b">Blue Printed</label>
					<label><img src="/wp-content/plugins/Plates/themes/style/img/border-icons/black-printed-border.jpg" alt=""><input type="radio" name="border" value="printed-k">Black Printed</label>
				</div>
			</div>
			<div id="badgesOptions" class="optionsSections">
				<div id="badgesOptionsHeader" class="optionsHeader"><h3><span><img src="https://img.icons8.com/wired/64/000000/great-britain.png"/></span> Badges options</h3></div>
			<label><h4>Badges</h4></label>
				<div class="materials-radio" id="badgesSelector">
					<label><img src="/wp-content/plugins/Plates/themes/style/img/badge-icons/england-4d.jpg" alt="England 4D"><input type="radio" name="badges" data-custom-value="fourd-eng" data-badge-type="fourd" value="4d-e">England 4D</label>
					<label><img src="/wp-content/plugins/Plates/themes/style/img/badge-icons/scotland-4d.jpg" alt="Scotland 4D"><input type="radio" name="badges" data-custom-value="fourd-sco" data-badge-type="fourd" value="4d-s">Scotland 4D</label>
					<label><img src="/wp-content/plugins/Plates/themes/style/img/badge-icons/wales-4d.jpg" alt="Whales 4D"><input type="radio" name="badges" data-custom-value="fourd-wal" data-badge-type="fourd" value="4d-w">Whales 4D</label>
					<label><img src="/wp-content/plugins/Plates/themes/style/img/badge-icons/uk-4d.jpg" alt="Whales 4D"><input type="radio" name="badges"  data-custom-value="fourd-uk" data-badge-type="fourd" value="4d-u">UK 4D</label>
					<label><img src="/wp-content/plugins/Plates/themes/style/img/badge-icons/england-gel.jpg" alt="Whales 4D"><input type="radio" name="badges" data-custom-value="threed-eng" data-badge-type="gel" value="gel-e">England gel</label>
					<label><img src="/wp-content/plugins/Plates/themes/style/img/badge-icons/scotland-gel.jpg" alt="Whales 4D"><input type="radio" name="badges" data-custom-value="threed-sco" data-badge-type="gel" value="gel-s">Scotland gel</label>
					<label><img src="/wp-content/plugins/Plates/themes/style/img/badge-icons/wales-gel.jpg" alt="Whales 4D"><input type="radio" name="badges" data-custom-value="threed-wal" data-badge-type="gel" value="gel-w">Whales gel</label>
					<label><img src="/wp-content/plugins/Plates/themes/style/img/badge-icons/uk-gel.jpg" alt="Whales 4D"><input type="radio" name="badges" data-custom-value="threed-uk" data-badge-type="gel" value="gel-u">UK Gel</label>
					<label><img src="/wp-content/plugins/Plates/themes/style/img/badge-icons/england-printed.jpg" alt="Whales 4D"><input type="radio" name="badges" data-custom-value="printed-eng" data-badge-type="printed" value="printed-e">England printed</label>
					<label><img src="/wp-content/plugins/Plates/themes/style/img/badge-icons/scotland-printed.jpg" alt="Whales 4D"><input type="radio" name="badges" data-custom-value="printed-sco" data-badge-type="printed" value="printed-s">Scotland printed</label>
					<label><img src="/wp-content/plugins/Plates/themes/style/img/badge-icons/wales-printed.jpg" alt="Whales 4D"><input type="radio" name="badges" data-custom-value="printed-wal" data-badge-type="printed" value="printed-w">Whales printed</label>
					<label><img src="/wp-content/plugins/Plates/themes/style/img/badge-icons/uk-printed.jpg" alt="Whales 4D"><input type="radio" name="badges" data-custom-value="printed-uk" data-badge-type="printed" value="printed-u">UK printed</label>
					<label style='border: 3px solid #034694;'><img src="/wp-content/plugins/Plates/themes/style/img/colours/none.svg" alt="None"><input type="radio"  name="badges" value="none-n" checked>None</label>
				</div>
			</div>
			<input type="hidden" class="hiddenRare" name="rareReg" value="NOM">
			<input type="hidden" class="hiddenRare" name="rareSpacing" value="road legal spacing">
			<input type="hidden" class="hiddenRare" name="rareSize" value="standard oblong">
			<input type="hidden" class="hiddenRare" name="rareKrystal" value="krystal 4d">
			<input type="hidden" class="hiddenRare" name="rareColour" value="red">
			<input type="hidden" class="hiddenRare" name="rareBorder" value="none-b">
			<input type="hidden" class="hiddenRare" name="rareBadge" value="none-n">
			
			<input type="hidden" class="hiddenFR" name="frReg" value="NOM">
			<input type="hidden" class="hiddenFR" name="frSpacing" value="road legal spacing">
			<input type="hidden" class="hiddenFR" name="frSize" value="standard oblong">
			<input type="hidden" class="hiddenFR" name="frKrystal" value="krystal 4d">
			<input type="hidden" class="hiddenFR" name="frColour" value="red">
			<input type="hidden" class="hiddenFR" name="frBorder" value="none-b">
			<input type="hidden" class="hiddenFR" name="frBadge" value="none-n">
			<input type="submit" value="Order">
		</form>
	</div>
	
	
	

	
	
	<div id="mainCanvas" class="plates-view plates">
		<div class="panelOnPreview">
			<button id="frontViewToggler">Front</button>
			<button id="3dViewToggler">3d</button>
			<button id="asideViewToggler">Aside</button>
			
		</div>
		<div class="panelOnPreview whatToModify" <?php if(isset($_POST['reg'])){ ?> style="display: none;" <?php } ?> >
				<div id="modifySelector" class="">					
					<label><input type="radio" name="mod" value="front">Front</label>
					<label><input type="radio" name="mod" value="rear">Rear</label>
					<label><input type="radio" name="mod" value="both" checked>Both</label>
				</div>
		</div>
		<div class="previews">
			<div id="platePreview" class="plates-layer-01">
				<div class="letter-wrapper">
					<div id="plate" class="front-plate">
						<div class="plate1"></div>
					</div>
					<div class="black">
						<div id="plates-reg1" class="letters reg1">YOUR REG</div>
						<div id="plates-reg2" class="letters reg2">YOUR REG</div>
						<div id="plates-reg3" class="letters reg3">YOUR REG</div>
					</div>
					<div class="colour">
						<div style="top: 0px; right:0px" id="plates-reg-color1" class="letters reg1">YOUR REG</div>
						<div style="top: 1px; right:0px" id="plates-reg-color2" class="letters reg2">YOUR REG</div>
						<div style="top: 2px; right:0px" id="plates-reg-color3" class="letters reg3">YOUR REG</div>
						<div style="top: 3px; right:0px" id="plates-reg-color4" class="letters reg4">YOUR REG</div>
						<div style="top: 4px; right:0px" id="plates-reg-color5" class="letters reg5">YOUR REG</div>
					</div>
					<div id="border-3mm-black-front" >
						<div class="border1 borders-pes" ></div>
						<div class="border2 borders-pes" ></div>
						<div class="border3 borders-pes" ></div>
						<div class="border4 borders-pes 3mm-brdr-fr" ></div>
						<div class="border5 borders-pes 3mm-brdr-fr" ></div>
						<div class="border6 borders-pes mm-brdr-fr" ></div>
					</div>
					<div id="border-3mm-colour-front" class="" >
						<div class="border1 borders-pes krystal-border-colour"></div>
						<div class="border2 borders-pes krystal-border-colour printOfffront"></div>
						<div class="border3 borders-pes krystal-border-colour printOfffront"></div>
						<div class="border4 borders-pes krystal-border-colour printOfffront"></div>
						<div class="border5 borders-pes krystal-border-colour printOfffront"></div>
						<div class="border6 borders-pes krystal-border-colour printOfffront"></div>
					</div>
					<div id="badge" class="fourd fourd-eng">
						<div class="badge1 badge-pes" ></div>
						<div class="badge2 badge-pes" ></div>
						<div class="badge3 badge-pes" ></div>
						<div class="badge4 badge-pes" ></div>
					</div>
					<div id="badge-fourd-bottom">
						<div class="badge1 badge-pes" ></div>
						<div class="badge2 badge-pes" ></div>
						<div class="badge3 badge-pes" ></div>
						<div class="badge4 badge-pes" ></div>
					</div>
				</div>
			</div>
		</div>
		<div class="previews">
			<div id="platePreviewRare" class="plates-layer-01">
				<div class="letter-wrapper">
					<div id="plate-rare" class="front-plate">
						<div class="plate1"></div>
					</div>
					<div class="black">
						<div id="plates-reg-rare1" class="letters reg1">YOUR REG</div>
						<div id="plates-reg-rare2" class="letters reg2">YOUR REG</div>
						<div id="plates-reg-rare3" class="letters reg3">YOUR REG</div>
					</div>
					<div class="colour">
						<div style="top: 0px; right:0px" id="plates-reg-color-rear1" class="letters reg1">YOUR REG</div>
						<div style="top: 1px; right:0px" id="plates-reg-color-rear2" class="letters reg2">YOUR REG</div>
						<div style="top: 2px; right:0px" id="plates-reg-color-rear3" class="letters reg3">YOUR REG</div>
						<div style="top: 3px; right:0px" id="plates-reg-color-rear4" class="letters reg4">YOUR REG</div>
						<div style="top: 4px; right:0px" id="plates-reg-color-rear5" class="letters reg5">YOUR REG</div>
					</div>
					<div id="border-3mm-black" >
						<div class="border1 borders-pes" ></div>
						<div class="border2 borders-pes" ></div>
						<div class="border3 borders-pes" ></div>
						<div class="border4 borders-pes 3mm-brdr" ></div>
						<div class="border5 borders-pes 3mm-brdr" ></div>
						<div class="border6 borders-pes 3mm-brdr" ></div>
					</div>
					<div id="border-3mm-colour" class="" >
						<div class="border1 borders-pes krystal-border-colour"></div>
						<div class="border2 borders-pes krystal-border-colour printOff"></div>
						<div class="border3 borders-pes krystal-border-colour printOff"></div>
						<div class="border4 borders-pes krystal-border-colour printOff"></div>
						<div class="border5 borders-pes krystal-border-colour printOff"></div>
						<div class="border6 borders-pes krystal-border-colour printOff"></div>
					</div>
					<div id="badge2" class="fourd fourd-eng">
						<div class="badge1 badge-pes" ></div>
						<div class="badge2 badge-pes" ></div>
						<div class="badge3 badge-pes" ></div>
						<div class="badge4 badge-pes" ></div>
					</div>
					<div id="badge-fourd-bottom2">
						<div class="badge1 badge-pes" ></div>
						<div class="badge2 badge-pes" ></div>
						<div class="badge3 badge-pes" ></div>
						<div class="badge4 badge-pes" ></div>
					</div>
				</div>
				
				
			</div>
		</div>
		<div id="description" <?php if(isset($_POST['reg'])){ ?> style="display: none;" <?php } ?> >
			<h3>Front plate</h3>
				<p></p>
			<h3>Rear plate</h3>
				<p></p>
			<h3>Total price</h3>
		</div>
	</div>
	<div class="clear"></div>
</div>