	<?php
	session_start();
	require_once __DIR__ . '/db_con.php';  

	if(isset($_POST['btn-singup'])) {

		
		$uName = $_POST['username2'];
		$uPass = $_POST['password'];
		$uConfPw= $_POST['confpassword'];

		$uName = $dbCon->real_escape_string($uName);
		$uPass = $dbCon->real_escape_string($uPass);
		$uConfPw = $dbCon->real_escape_string($uConfPw);

		$check_user = $dbCon->query("SELECT username FROM utenti WHERE username='$uName'");
		$HowUser = $check_user->num_rows;

if($uConfPw==$uPass){
	if($HowUser==0)
					{

						$queryText = "INSERT INTO utenti(username, password) 
									  VALUES('$uName','$uPass')";

						$rslt=$dbCon->query($queryText);

						if($rslt)
														{
															header("Location: ./../index.php");
														}
						else{
								$msg = "errore durante la registrazione!";
								header("Location: registrazione.php?errorMessage=" . $msg);
							}
					}

				else{
						$msg = "nome utente occupato!";
						header("Location:registrazione.php?errorMessage=" . $msg);
					}
		}
else{
						$msg = "Errore conferma password!";
						header("Location:registrazione.php?errorMessage=" . $msg);
	}
		$dbCon->close();

	}
?>







