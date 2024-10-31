// Get the Target Circles
let targetCircle = document.getElementById("target-circle");
let playerScore = document.getElementById("playerScore"); //player score container
let score = 0;
playerScore.innerHTML = score
let gameStartCondition = 0;
let gameIntervalCondition = "";
let checkTargetSize = "";

// Postion Randomizer
let checkPositive = Math.round(Math.random() * 1) - 1;
let topTarget = Math.round(Math.random() * 40);
let rightTarget = Math.round(Math.random() * 40);
let bottomTarget = Math.round(Math.random() * 40);
let leftTarget = Math.round(Math.random() * 40);

// Start Button - Game Start
gameBtn.addEventListener("click", function(){
    if(difficultySelector.selectedIndex != 0){
        console.log("Game Start Now!");
        difficultySelector.setAttribute("disabled", true);
        gameBtn.setAttribute("disabled", true);
        gameBtn.setAttribute("class", "game-btn disabled-btn");
        gameBtn.setAttribute("title", "The game has been started");
        gameStart();        
    }    
})


// Target Circle per Click
function gameStart(){
    targetCircle.addEventListener("click", function(){
        addScore();
    });    
    
    appearTarget();
}

function addScore(){    

    if(selectedChances > 0){
        score++        
        playerScore.innerHTML = score       
    }    

    checkSelectorDisabled();    
}

// Target Appearance

function appearTarget(){
    targetCircle.style.transform = "scale(0)";
    targetCircle.style.opacity = "0%";
    checkTargetSize = 0;

    gameIntervalCondition = setInterval(() => {
        checkPositive = Math.round(Math.random() * 1) -1;
        if(checkPositive == 0){
            checkPositive = 1
        }
        topTarget = Math.round(Math.random() * 40) * checkPositive;
        rightTarget = Math.round(Math.random() * 40) * checkPositive;
        bottomTarget = Math.round(Math.random() * 40) * checkPositive;
        leftTarget = Math.round(Math.random() * 40) * checkPositive;

        if(checkTargetSize == 0){
            targetCircle.style.transform = "scale(1)";
            targetCircle.style.opacity = "100%";
            targetCircle.style.top = topTarget + "%";
            targetCircle.style.right = rightTarget + "%";
            targetCircle.style.bottom = bottomTarget + "%";
            targetCircle.style.left = leftTarget + "%";
            console.log("Top: " + topTarget + "\n Right: " + rightTarget + "\n Bottom: " + bottomTarget + "\n Left: " + leftTarget + "\n Check Positive: " + checkPositive);
            checkTargetSize = 1;
        }else if(checkTargetSize == 1){
            selectedChances--;
            numberChances.innerHTML = selectedChances;        
            targetCircle.style.transform = "scale(0)";
            targetCircle.style.opacity = "0%";
            checkTargetSize = 0
        }else{
            alert("Problem Occurs.");
            window.location.reload()
        }        

        if(selectedChances == 0){
            console.log("stop game")
            clearInterval(gameIntervalCondition);
            gameOver();            
            gameStartContainer.setAttribute("class", "containerTransition");
        }
        
    }, selectedVisible * 1000);    
}

// For Security / Avoid Cheating Purposes
function checkSelectorDisabled(){    
    if(difficultySelector.getAttribute("disabled") == null){
        alert("Cheater! Problem Occurs.")
        window.location.reload()
    }
}

// Game Over Panel
let hostname = window.location.hostname;

let gameOverContainer = document.getElementById("game-over-container");
// gameOver() //remove this
// gameOverContainer.style.position = "absolute";// remove this
function gameOver(){
    gameOverContainer.innerHTML =
    `
    <div class="over-panel">
            <div class="over-title">
                <h1>Game Over</h1>
            </div>                
            <div class="over-details">
                <ul>
                    <li><b>Player Name: </b> ${finalName}</li>
                    <li><b>Difficulty: </b> ${selectedDifficulty}</li>
                    <li><b>Score: </b> ${score} </li>
                </ul>
            </div>            
            <div class="over-btn">                
                <a href="./index.html" class="game-btn"> Restart Game </a>
            </div>
    </div>       
    `
    
}
