<?php
    include_once("backend/connection.php");

    $queryAll = "Select * FROM players ORDER BY datetime_played DESC";
    $execQueryAll = mysqli_query($con, $queryAll);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aim Trainer - LeaderBoards</title>
    <link rel="shortcut icon" href="../../../media/MFI.png" type="image/x-icon">
    <link rel="stylesheet" href="../css/leaderboards.css">
</head>
<body>
    <div id="all-players-container">
        <div class="lb-title">
            <h1>List of All Players and Their Stats</h1>
        </div>
        <div id="btn-container">
                <a href="index.php" class="game-btn">Play Game</a>
                <a href="leaderboards.php" class="game-btn">View Leaderboards</a>
        </div>
        <?php        
            while ($fetchAll = mysqli_fetch_assoc($execQueryAll)) {                
                echo "<div class=\"player\">";
                    echo "<ul>";                        
                        echo "<li> <b> Player Name: </b>".$fetchAll["player_name"]."</li>";
                        echo "<li> <b> Player Difficulty: </b>".$fetchAll["player_difficulty"]."</li>";
                        echo "<li> <b> Player Score: </b>".$fetchAll["player_score"]."</li>";
                        echo "<li> <emp class=\"scroll\">".$fetchAll["player_caption"]."</emp></li>";                
                        echo "<li><b>Date and Time: </b>".$fetchAll["datetime_played"]."</li>";              
                    echo "</ul>";
                echo "</div>";                          
            }
            ?>            
    </div>

</body>
</html>