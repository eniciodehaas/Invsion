<?php
require "./private/includes/controllers.php";
// require "./private/includes/dbConnect.php";

$CONFIG = require('./private/includes/config.php');

switch ($_GET['page']) {
    case '':
        home();
        break;
    case 'home':
        home();
        break;
    case 'contact':
        echo 'test';
        contact();
        break;
    default:
        header( 'Status: 404' );
        echo '404 Page Not Found';
        exit;
    break;
}

