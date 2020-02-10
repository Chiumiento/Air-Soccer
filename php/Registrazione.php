<?php
	session_start();
	include '/db_con.php';

?> 
<html>
<head>
	<meta charset = "utf-8">
	<title> AS-Registrati </title>
	<link rel="stylesheet" href="./../css/registra.css" type="text/css" media="screen">
</head>
<body class="sfondo">
		<header class="header">
			<a href='./../index.php' class="header_home">Login</a>
		</header>

		<form class="form_registrazione" method="post" action="creaccount.php">

				<div class="registrati">
				
					<label id="username">Username</label>
            		<input type="text" placeholder="Username" name="username2"  required>
				

				
					<label id="password">Password</label>
            		<input type="text" placeholder="Password" name="password"  required>
				

				
					<label id="confermapassword">Conferma Password</label>
            		<input type="text" placeholder="Conferma Password" name="confpassword"  required>


          			<button type="submit" name="btn-singup"> REGISTRATI </button>
        		
      		</div>
		</form>
</body>
</html>