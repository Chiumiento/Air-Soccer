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
						  WHERE Squadra='$Team1'";

			$queryText2 = "UPDATE Statistiche 
						  SET Vittorie=Vittorie+1 
						  WHERE Squadra='$Team1'";

			$queryText3 = "UPDATE Statistiche 
						  SET PartiteGiocate=PartiteGiocate+1 
						  WHERE Squadra='$Team2'";

			$queryText4 = "UPDATE Statistiche 
						  SET Sconfitte=Sconfitte+1 
						  WHERE Squadra='$Team2'";

			$result1 = $dbCon->query($queryText1);
			$result2 = $dbCon->query($queryText2);
			$result3 = $dbCon->query($queryText3);
			$result4 = $dbCon->query($queryText4);

}



if($scoreCasa==$scoreTrasferta){
	if($esito==0){
		$accountcoin=$accountcoin+($puntata*$qtaX);
	}

		$Team1 = $dbCon->real_escape_string($Team1);
		$Team2 = $dbCon->real_escape_string($Team2);

			$queryText1 = "UPDATE Statistiche 
						  SET PartiteGiocate=PartiteGiocate+1 
						  WHERE Squadra='$Team1'";

			$queryText2 = "UPDATE Statistiche 
						  SET Pareggi=Pareggi+1 
						  WHERE Squadra='$Team1'";

			$queryText3 = "UPDATE Statistiche 
						  SET PartiteGiocate=PartiteGiocate+1 
						  WHERE Squadra='$Team2'";

			$queryText4 = "UPDATE Statistiche 
						  SET Pareggi=Pareggi+1 
						  WHERE Squadra='$Team2'";

			$result1 = $dbCon->query($queryText1);
			$result2 = $dbCon->query($queryText2);
			$result3 = $dbCon->query($queryText3);
			$result4 = $dbCon->query($queryText4);
}

if($scoreCasa<$scoreTrasferta){
	if($esito==2){
		$accountcoin=$accountcoin+($puntata*$qta2);
	}
		$Team1 = $dbCon->real_escape_string($Team1);
		$Team2 = $dbCon->real_escape_string($Team2);

			$queryText1 = "UPDATE Statistiche 
						  SET PartiteGiocate=PartiteGiocate+1 
						  WHERE Squadra='$Team1'";

			$queryText2 = "UPDATE Statistiche 
						  SET Vittorie=Vittorie+1 
						  WHERE Squadra='$Team2'";

			$queryText3 = "UPDATE Statistiche 
						  SET PartiteGiocate=PartiteGiocate+1 
						  WHERE Squadra='$Team2'";

			$queryText4 = "UPDATE Statistiche 
						  SET Sconfitte=Sconfitte+1 
						  WHERE Squadra='$Team1'";

			$result1 = $dbCon->query($queryText1);
			$result2 = $dbCon->query($queryText2);
			$result3 = $dbCon->query($queryText3);
			$result4 = $dbCon->query($queryText4);
			
}

			$queryText = "UPDATE Utente 
						  SET Crediti='$accountcoin' 
						  WHERE CodFiscale = '" .$_SESSION['userSession']. "' ";
		


// invio la query
		$result = $dbCon->query($queryText);

// controllo l'esito
if (!$result) {
	die("Errore nella query $query: " . mysql_error());
}

else{
	$msg ="QUery eseguita correttamente";
	header("Location:Account.php?errorMessage=" . $msg);
	}



$dbCon->close();
?>