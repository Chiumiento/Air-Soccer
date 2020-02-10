<?php
	session_start();
	require_once __DIR__ . '/db_con.php';
?>

<html>
<head>

	<title> VU-Statistiche </title>

	<link rel="stylesheet" href="./../css/statistiche.css" type="text/css" media="screen">

</head>

<body class='sfondo'>

	<header class="header">
			<a href='Account.php' class="header_home">Home</a>
	</header>

	<section class="statistiche">

							<h2 class="hstst"> Statistiche delle Squadre </h2>


							<section class='TabellaStatistiche'>			

									<table>
										<thead>
									        <tr>
									                <td> Squadra </td>
									                <td> PartiteGiocate </td>
									                <td> Vittorie </td>
									                <td> Pareggi </td> 
									                <td> Sconfitte </td>												
									        </tr>
									        </thead>
									     <tbody>
												<?php

														$queryText = ("SELECT * FROM Statistiche");
														$query2 = $dbCon->query($queryText);
														while($cicle=$query2->fetch_array()){
														    echo " 
														         <tr>
														                <td>".$cicle['Squadra']."</td>
														                
														                <td>".$cicle['PartiteGiocate']."</td> 
														          		
														         		<td>".$cicle['Vittorie']."</td>
														                
														                <td>".$cicle['Pareggi']."</td> 
														          		
														          		<td>".$cicle['Sconfitte']."</td> 
														          		 
														         </tr>";
														         }
												?>
										</tbody>
									</table>

							</section>

				</section>



</body>
</html>