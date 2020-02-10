<?php
	session_start();
	require_once __DIR__ . '/db_con.php';  

	$Team1 = $_POST['HomeName'];
	$Team2 = $_POST['GuestName'];
	$scoreCasa =$_POST['Casa'];
	$scoreTrasferta =$_POST['Trasferta'];
	


if($scoreCasa>$scoreTrasferta){
		$Team1 = $dbCon->real_escape_string($Team1);
		$Team2 = $dbCon->real_escape_string($Team2);

			$queryText1 = "UPDATE Utenti 
						  SET Vittorie=Vittorie+1 
						  WHERE Username='" .$_SESSION['userSession']. "'";

			

}


if($scoreCasa<$scoreTrasferta){
		$Team1 = $dbCon->real_escape_string($Team1);
		$Team2 = $dbCon->real_escape_string($Team2);

			$queryText1 = "UPDATE Utenti 
						  SET Sconfitte=Sconfitte+1 
						  WHERE Username='" .$_SESSION['userSession']. "'";

			

}			


// invio la query
		$result1 = $dbCon->query($queryText1);

// controllo l'esito
if (!$result1) {
	die("Errore nella query $query: " . mysql_error());
}

else{
	$msg ="QUery eseguita correttamente";
	header("Location:Prepartita.php?errorMessage=" . $msg);
	}


$dbCon->close();
?>