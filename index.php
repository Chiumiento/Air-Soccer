<?php
	session_start();
	include './php/db_con.php';

	if (isset($_SESSION['userSession'])) {
		header("Location: ./php/Prepartita.php");
		exit;
	}
?> 

<html>
<head>
	<title> Air Soccer </title>
	<meta charset="utf-8">
	<link rel="stylesheet" href="./css/style.css" type="text/css" media="screen">
</head>

<body class="sfondo">
	<header class="header">
			<a href='./php/Registrazione.php' class="header_home">Crea Account</a>
			 <a href="./html/regolamento.html" class="header_item">Regolamento</a>
	</header>
	<section class="form_login">
		<div class="login_form">
			<form name="login" method="post" action="./php/login.php">
				<div class="username">
						<label>Username</label>
							<input type="text" placeholder="Username" name="username1" required>
				</div>

				<div class="password">
						<label>Password</label>
							<input type="password" placeholder="Password" name="password" required>
				</div>
					
				
					<button type="submit" name="btn-login"> ENTRA </button>
				
			</form>
		</div>
	</section>
</body>
</html>