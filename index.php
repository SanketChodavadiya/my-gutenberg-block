<?php
/*
Plugin Name: My G Block
Plugin URI:
Description:
Author: Sanket Chodavadiya
Version: 1.0
Author URI:
*/

defined( 'ABSPATH' ) || exit;

function my_g_block_border_block() {
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}
	wp_register_script(
		'my-g-block',
		plugins_url( 'block.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'block.js' )
	);
	wp_register_style(
		'my-g-block-editor',
		plugins_url( 'editor.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
	);
	wp_register_style(
		'my-g-block',
		plugins_url( 'style.css', __FILE__ ),
		array( ),
		filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
	);
	register_block_type( 'my-g-block/border-block-editable', array(
		'style' => 'my-g-block',
		'editor_style' => 'my-g-block-editor',
		'editor_script' => 'my-g-block',
	) );
	if ( function_exists( 'wp_set_script_translations' ) ) {
		wp_set_script_translations( 'border-block', 'my-g-block' );
	}


}
add_action( 'init', 'my_g_block_border_block' );

