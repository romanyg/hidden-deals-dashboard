<?php
/**
 * Plugin Name: Hidden Deals Dashboard
 */

add_action('admin_menu', function () {
    add_menu_page(
        'Hidden Deals',
        'Hidden Deals',
        'manage_options',
        'hidden-deals',
        'hidden_deals_page'
    );
});

function hidden_deals_page() {
    echo '<div id="root"></div>';
}

add_action('admin_enqueue_scripts', function ($hook) {
    if ($hook !== 'toplevel_page_hidden-deals') return;

    wp_enqueue_script(
        'hidden-deals-app',
        plugin_dir_url(__FILE__) . 'build/index.js',
        array(),
        null,
        true
    );

    wp_enqueue_style(
        'hidden-deals-style',
        plugin_dir_url(__FILE__) . 'build/index.css'
    );
});
