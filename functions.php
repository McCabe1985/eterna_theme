<?php

function eterna_files()
{
    wp_enqueue_style('eterna_stylesheet', get_theme_file_uri('/assets/styles/styles.css'));
}

add_action('wp_enqueue_scripts', 'eterna_files');
