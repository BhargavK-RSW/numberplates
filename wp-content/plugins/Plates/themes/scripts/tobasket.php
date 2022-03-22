<?php
global $woocommerce;
$woocommerce->cart->add_to_cart(13); // you can pass a number here
header("Location: /");
?>