<?php

function home() {

    global $CONFIG;

    $view = $CONFIG['view_path'] . '/home.php';

    include $view;
}

function contact() {
    echo 'test2';
    include __DIR__ . '/../views/contact.php';
}

?>