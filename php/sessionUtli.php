<?php

function isLogged(){
	if(isset($_SESSION['userSession']))
		return $_SESSION['userSession'];
	else return false;
}

?>