<?php

$playerName = $_POST["playerName"];
$playerDifficulty = $_POST["playerDifficulty"];
$playerScore = $_POST["playerScore"];
$playerCaption = $_POST["caption"];
$dbHost = $_POST["siteHost"];
$_SESSION["myHost"] = $dbHost;
$dbusername = "root";
$dbpassword = "";
$dbname = "aimtrainer";
$date = date('Y-m-d H:i:s');

$con = mysqli_connect($dbHost, $dbusername, $dbpassword, $dbname);

// Insert to LeaderBoards
$query = "INSERT INTO players(player_name, player_difficulty, player_score, player_caption, datetime_played) VALUES ('$playerName', '$playerDifficulty','$playerScore', '$playerCaption', '$date')";

$execQuery = mysqli_query($con, $query);

if($execQuery){
    header("location: ../");
}

// if($con){
//     echo "Connection Success!";
// }


echo "Player Name: ". $playerName."<br>";
echo "Player Difficulty: ".$playerDifficulty."<br>";
echo "Player Score: ".$playerScore."<br>";
echo "Player Caption: ".$playerCaption."<br>";
echo "Web Host: ".$dbHost."<br>";

echo "Under Maintenance :) ";


?>