<?php
	session_start();
	require_once __DIR__ . '/db_con.php';
	include 'sessionUtli.php';

if (isset($_SESSION['userSession'])) {
		header("Location: Prepartita.php");
		exit;
	}


	if (isset($_POST['btn-login'])) {
		$user =	$_POST['username1'];
		$password = $_POST['password'];
		
		//filtro per SQLinjection
		$user = $dbCon->real_escape_string($user);
		$password = $dbCon->real_escape_string($password);
		
		$queryText = "SELECT * 
				      FROM utenti
			          WHERE BINARY Username = '" . $user . "' 
				            AND BINARY Password = '" . $password . "'";

 		$query = $dbCon->query($queryText);
		$userRow = $query->fetch_array();
		$count = $query->num_rows;



		if ($count == 1){
			$_SESSION['userSession'] = $userRow['Username']; 
			header("Location: Prepartita.php");
		}else{
			$msg1 = "Nome utente o Password non validi!";
			header("Location: ./../index.php?errorMessage=" . $msg1);
		}
		$dbCon->close();
	}
?>