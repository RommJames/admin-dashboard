<?php
    include_once("backend/connection.php");

    $queryEasy = "Select * FROM players WHERE player_difficulty = 'Easy' ORDER BY player_score DESC LIMIT 5";
    $execQueryEasy = mysqli_query($con, $queryEasy);

    $queryIntermediate = "Select * FROM players WHERE player_difficulty = 'Intermediate' ORDER BY player_score DESC LIMIT 5";
    $execQueryIntermediate = mysqli_query($con, $queryIntermediate);

    $queryAdvance = "Select * FROM players WHERE player_difficulty = 'Advance' ORDER BY player_score DESC LIMIT 5";
    $execQueryAdvance = mysqli_query($con, $queryAdvance);

    $queryAll = "Select * FROM players ORDER BY player_score DESC LIMIT 5"; // LIMIT 5";
    $execQueryAll = mysqli_query($con, $queryAll);

    $recentPlayed = "Select * FROM players ORDER BY datetime_played DESC;";
    $execRecentPlayed = mysqli_query($con, $recentPlayed);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aim Trainer - Leaderboards</title>
    <link rel="shortcut icon" href="../../../media/MFI.png" type="image/x-icon">
    <link rel="stylesheet" href="../css/leaderboards.css">
</head>
<body>
    <div class="lb-title">
        <h1>Leaderboards for Each Category</h1>
    </div>
    <div id="leaderboards-container">        
        <div id="recently-played">
            <h2>Recently Played</h2>
            
               
                    <?php
                    $fetchRecentPlayers = mysqli_fetch_assoc($execRecentPlayed);
                    if(isset($fetchRecentPlayers)){
                        echo "<div class=\"player\">";
                        echo "<ul>";
                        echo "<li><b>Name: </b>".$fetchRecentPlayers["player_name"]."</li>";
                        echo "<li><b>Difficulty: </b>".$fetchRecentPlayers["player_difficulty"]."</li>";
                        echo "<li><b>Score: </b>".$fetchRecentPlayers["player_score"]."</li>";
                        echo "<li><emp class=\"scroll\">".$fetchRecentPlayers["player_caption"]."</emp></li>";
                        echo "<li><b>Date and Time: </b>".$fetchRecentPlayers["datetime_played"]."</li>";
                        echo "</ul>";
                        echo "</div>";
                    }else{
                        echo "<i style=\"text-align: center;display: block;\"> No data was found. No one is playing yet. </i>";
                    }                    
                    ?>                                                                                                                             
        </div>
        <div id="top5overall">
            <h2>Top 5 Overall</h2>
            <div>
            <?php
                $ctrAll = 1;
                $allRemaining = 0;
            while ($fetchAll = mysqli_fetch_assoc($execQueryAll)) {                
                echo "<div class=\"player\">";
                    echo "<ul>";
                        echo "<li><b>Rank: </b>".$ctrAll;
                        echo "<li> <b> Player Name: </b>".$fetchAll["player_name"]."</li>";
                        echo "<li> <b> Player Difficulty: </b>".$fetchAll["player_difficulty"]."</li>";
                        echo "<li> <b> Player Score: </b>".$fetchAll["player_score"]."</li>";
                        echo "<li> <i>".$fetchAll["player_caption"]."</i></li>";                
                    echo "</ul>";
                echo "</div>";
                $ctrAll++;                
            }

            $allRemaining = 6 - $ctrAll;

            if($allRemaining < 5){
                for($i = 1; $i <= $allRemaining; $i++){                    
                    echo "<div class=\"player\">
                    <ul>
                        <li><b>Rank: </b>".$ctrAll."</li>                        
                        <li><b>Name: </b></li>
                        <li><b>Difficulty: </b></li>
                        <li><b>Score: </b></li>
                        <li>
                            <i> </i>
                        </li>                    
                    </ul>
                </div>";
                $ctrAll++;
                }
            }
            
            ?>                        
            </div>            
        </div>
        <div id="top5easy">
            <h2>Top 5 Easy</h2>
            <?php
                $ctrEasy = 1;
                $easyRemaining = 0;
            while ($fetchEasy = mysqli_fetch_assoc($execQueryEasy)) {                
                echo "<div class=\"player\">";
                    echo "<ul>";
                        echo "<li><b>Rank: </b>".$ctrEasy;
                        echo "<li> <b> Player Name: </b>".$fetchEasy["player_name"]."</li>";
                        echo "<li> <b> Player Difficulty: </b>".$fetchEasy["player_difficulty"]."</li>";
                        echo "<li> <b> Player Score: </b>".$fetchEasy["player_score"]."</li>";
                        echo "<li> <i>".$fetchEasy["player_caption"]."</i></li>";                
                    echo "</ul>";
                echo "</div>";
                $ctrEasy++;                
            }

            $easyRemaining = 6 - $ctrEasy;            

            if($easyRemaining < 5){
                for($i = 1; $i <= $easyRemaining; $i++){                    
                    echo "<div class=\"player\">
                    <ul>
                        <li><b>Rank: </b>".$ctrEasy."</li>                        
                        <li><b>Name: </b></li>
                        <li><b>Difficulty: </b></li>
                        <li><b>Score: </b></li>
                        <li>
                            <i> </i>
                        </li>                    
                    </ul>
                </div>";
                $ctrEasy++;
                }
            }
            
            ?>                        
            
        </div>
        <div id="top5intermediate">
            <h2>Top 5 Intermediate</h2>
            <?php
                $ctrIntermediate = 1;
                $intermediateRemaining = 0;
            while ($fetchIntermediate = mysqli_fetch_assoc($execQueryIntermediate)) {                
                echo "<div class=\"player\">";
                    echo "<ul>";
                        echo "<li><b>Rank: </b>".$ctrIntermediate;
                        echo "<li> <b> Player Name: </b>".$fetchIntermediate["player_name"]."</li>";
                        echo "<li> <b> Player Difficulty: </b>".$fetchIntermediate["player_difficulty"]."</li>";
                        echo "<li> <b> Player Score: </b>".$fetchIntermediate["player_score"]."</li>";
                        echo "<li> <i> ".$fetchIntermediate["player_caption"]."</i></li>";                
                    echo "</ul>";
                echo "</div>";
                $ctrIntermediate++;                
            }

            $intermediateRemaining = 6 - $ctrIntermediate;            

            if($intermediateRemaining < 5){
                for($i = 1; $i <= $intermediateRemaining; $i++){                    
                    echo "<div class=\"player\">
                    <ul>
                        <li><b>Rank: </b>".$ctrIntermediate."</li>                        
                        <li><b>Name: </b></li>
                        <li><b>Difficulty: </b></li>
                        <li><b>Score: </b></li>
                        <li>
                            <i> </i>
                        </li>                    
                    </ul>
                </div>";
                $ctrIntermediate++;
                }
            }
            
            ?>                        
        </div>
        <div id="top5advance">
            <h2>Top 5 Advance</h2>
            <?php
                $ctrAdvance = 1;
                $advanceRemaining = 0;
            while ($fetchAdvance = mysqli_fetch_assoc($execQueryAdvance)) {                
                echo "<div class=\"player\">";
                    echo "<ul>";
                        echo "<li><b>Rank: </b>".$ctrAdvance;
                        echo "<li> <b> Player Name: </b>".$fetchAdvance["player_name"]."</li>";
                        echo "<li> <b> Player Difficulty: </b>".$fetchAdvance["player_difficulty"]."</li>";
                        echo "<li> <b> Player Score: </b>".$fetchAdvance["player_score"]."</li>";
                        echo "<li> <i>".$fetchAdvance["player_caption"]."</i></li>";                
                    echo "</ul>";
                echo "</div>";
                $ctrAdvance++;                
            }

            $advanceRemaining = 6 - $ctrAdvance;            

            if($advanceRemaining < 5){
                for($i = 1; $i <= $advanceRemaining; $i++){                    
                    echo "<div class=\"player\">
                    <ul>
                        <li><b>Rank: </b>".$ctrAdvance."</li>                        
                        <li><b>Name: </b></li>
                        <li><b>Difficulty: </b></li>
                        <li><b>Score: </b></li>
                        <li>
                            <i> </i>
                        </li>                    
                    </ul>
                </div>";
                $ctrAdvance++;
                }
            }
            
            ?>                        
        </div>
        <div id="btn-container">
            <a href="index.php" class="game-btn">Play Game</a>
            <a href="allPlayers.php" class="game-btn">View All Players</a>
        </div>
    </div>        
</body>
</html>