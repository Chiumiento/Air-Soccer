<?php
    session_start();
    require_once __DIR__ . '/db_con.php';

    include'sessionUtli.php';

    if (!isLogged()){
        $msg = "Warning";
        header("Location: ./../index.php?errorMessage = " . $msg);
        exit;
    }

    $queryText = "SELECT * FROM Utenti WHERE Username = '" .$_SESSION['userSession']."'";
    $query = $dbCon -> query($queryText);
    $userRow = $query -> fetch_array();

?>    


<html>
 <head>
  <meta charset = "utf-8">	
  <title>Air Soccer</title>
  <link rel="stylesheet" type="text/css" href="./../CSS/Stile.css">
  <script type="text/javascript" src="./../JS/Game.js"></script>
  <script type="text/javascript" src="./../JS/BallMulti.js"></script>
  <script type="text/javascript" src="./../JS/Player.js"></script>
  <script type="text/javascript" src="./../JS/CampoMulti.js"></script>
 </head>
 <body onLoad = "begin()">
   <form method = "post" action = "set-Match.php"> 
    <div id = "body"></div> 
    <div id = "main"></div>
 	  <input id = 'HomeName' name = "HomeName" type = "text" value = "CASA" readonly = "readonly" required>
    <input id = 'GuestName' name = "GuestName" type = "text" value = "TRASFERTA" readonly = "readonly" required>
    <input id = 'Casa' name = "Casa" type = "text" value = "0" readonly = "readonly" required>
    <input id = 'Trasferta' name = "Trasferta" type = "text" value = "0" readonly = "readonly" required>
 
  	<div id = "SceltaCasa"> SCEGLI LA SQUADRA DI CASA </div>
  	<div id = "SceltaOspite"> SCEGLI LA SQUADRA OSPITE </div>

     <button type = "submit" id = "btn-set" style = "display: none;"> TERMINA PARTITA </button>
    </form>

 </body>
</html> 