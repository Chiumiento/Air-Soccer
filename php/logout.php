<?php
	require_once __DIR__ . "/db_con.php";
	session_start();

	if (isset($_GET['logout'])) {
		session_destroy();
		unset($_SESSION['Username']);
		header("Location: ./../index.php");
	} else{$msg1 = "WARNING";
			header("Location: ./../index.php?errorMessage=" . $msg1);}
?>