<?php
add_action( 'wp_enqueue_scripts', 'enqueue_parent_styles' );
 	
add_action( 'wp_enqueue_scripts', 'enqueue_scripts' );
function enqueue_scripts(){
	wp_enqueue_script( 'js', get_stylesheet_directory_uri() . '/javascript/js.js', false);
	wp_enqueue_script('js');
}
function enqueue_parent_styles() {
   wp_enqueue_style( 'parent-style', get_template_directory_uri().'/style.css' );
}
?>