<?php
require "../private/includes/controllers.php";
// require "../private/includes/dbConnect.php";

if ( ! isset( $_GET['page'] ) ) {
	header( 'Status: 404' );
	echo '404 Page Not Found';
	exit;
}

switch ($_GET['page']) {
    case 'home':
    home();
    break;
}

