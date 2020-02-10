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
        <title>Home</title>
        <meta charset = "utf-8">
        <link rel="stylesheet" href="./../css/prepartita.css" type="text/css" media="screen">
 </head>
 
 <body>
    
    <a id = "logout" href = "logout.php?logout"> Logout </a>
    
    <?php
        if($userRow["Username"]==""){
                session_destroy();
                unset($_SESSION['Username']);
                header("Location: ./../index.php");
            }else{
                echo '<h1 id="user">' . $userRow['Username'] . ' </h1>';
            }
    ?>        

    <section class='Tabella'>           

                                    <table>
                                        <thead>
                                            <tr>
                                                    <td>UTENTE</td>
                                                    
                                                    <td>VITTORIE</td>

                                                    <td>SCONFITTE</td>
                        
                                            </tr>
                                         </thead>

                                         <tbody>
                                            <?php

                                                    $queryText = ("SELECT * FROM Utenti");
                                                    $query=$dbCon->query($queryText);
                                                    while($cicle=$query->fetch_array()){
                                                        echo " 
                                                             <tr>

                                                                    <td>".$cicle['Username']."</td>
                                                                   
                                                                    
                                                                    <td>".$cicle['Vittorie']."</td>


                                                                    <td>".$cicle['Sconfitte']."</td>

                                                              </tr>";
                                                             }
                                            ?>
                                            </tbody>
                                    </table>

                    </section> 
      <div id = "tipo"> SCEGLI IL TIPO DI PARTITA </div>
       

    <form name = "MultiPlayer" class = "MultiPlayer" action = "MultiPlayer.php" method = "post">
        <button id = 'vs1'>1 VS 1</button>
    </form>

    <form name = "SinglePlayer" class = "SinglePlayer" action = "SinglePlayer.php" method = "post">
        <button id = 'vsCPU'>1 VS CPU</button>
    </form>

  
 </body>
</html>