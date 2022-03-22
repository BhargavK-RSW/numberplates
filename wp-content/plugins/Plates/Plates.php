<?php
/**
* Plugin Name: Plates
* Plugin URI: http://www.merfius.com
* Description: Plugin for creating custom plates
* Version: 0.1
* Author: Merfius
* Author URI: http://www.merfius.com
**/
/*  Copyright 2021  Maksym Matsiuk  (email: merf.cccp@gmail.com)

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; either version 2 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program; if not, write to the Free Software
    Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/

register_activation_hook( __FILE__, 'my_plugin_create_db' );

add_action( 'admin_menu', 'register_my_page' );
function register_my_page(){
	add_menu_page( 'Plates', 'Plates', 'edit_others_posts', 'plates-options', 'platesOption', plugins_url( 'myplugin/images/icon.png' ), 6 );
	add_submenu_page( 'plates-options', 'All Charachteristics', 'Charachteristics', 'edit_others_posts', 'chars', 'chars', 1);
  // add_submenu_page( 'camp-options', 'Calendar', 'Calendar', 'edit_others_posts', 'calendar', 'calendar');
}

function platesOption(){
    readfile(plugins_url('Plates/themes/index.php'));
}
function chars(){
    readfile(plugins_url('Plates/themes/options.php'));
}




function regshort(){

	$regpage = include("themes/plates.php");
	return $regpage;

}
add_shortcode( "platesReg" , "regshort" );

function my_plugin_create_db() {


}
