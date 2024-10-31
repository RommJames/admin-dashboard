// Get Input Name and Buttons
let playerName = document.getElementById("player_name");
let btnEnterName = document.getElementById("enter-name-btn");
let btnViewLeader = document.getElementById("view-leader-btn");
let clearSpaces = "";
let finalName = "";
let nameLength = "";
let maxLength = 10;
// Game Start Button
let gameBtn = document.getElementById("start-game-btn");
// Get InnerHTML Info Containers
let nameContainer = document.getElementById("name-container");

// Check Enter Name
// Validations

playerName.onkeyup = function(){    
    clearSpaces = playerName.value.split(" ").join("")

    nameLength = clearSpaces.length

    if(nameLength > maxLength){
        clearSpaces = clearSpaces.substring(0, maxLength);
    }

    playerName.value = clearSpaces

    if(clearSpaces != ""){
        playerName.removeAttribute("class");
        playerName.style.border = "none";
        playerName.style.borderBottom = "2px solid black";
    }else{
        playerName.setAttribute("class", "inputError");
        playerName.style.border = "2px solid rgb(207, 9, 9)"

    }
}

//Start Game Container
let startGameContainer = document.getElementById("start-game-container");
// Game Start Container
let gameStartContainer = document.getElementById("game-start-container");

btnEnterName.addEventListener("click", function(){
    
    if(clearSpaces == ""){        

        playerName.setAttribute("class", "inputError");
        playerName.style.border = "2px solid rgb(207, 9, 9)"

    }else{
        playerName.removeAttribute("class");
        playerName.style.border = "none";
        playerName.style.borderBottom = "2px solid black";
        finalName = clearSpaces;
        // Game Panel
        nameContainer.innerHTML = finalName
        console.log("move to game")
        console.log("Created by Romm James Cuya :) ");
        
        startGameContainer.setAttribute("class", "containerTransition");
        gameStartContainer.style.display = "block";
    }

})

// Dynamic Difficulty Options
let difficultySelector = document.getElementById("game-difficulty");
let difDesc = document.getElementById("dif-desc"); //Target Size and visible value infos
let chancesInfo = document.getElementById("chances-info");
let numberChances = document.getElementById("numberChances");
let selectedDifficulty = "";
let selectedSize = "";
let selectedChances = "";
let selectedVisible = "";
let overallScore = "";

for(let dif of difficulty){

    difficultySelector.innerHTML += 
    `
    <option value="${dif.dValue}">
        ${dif.name}
    </option>
    `

}

difficultyInfo(0);

difficultySelector.addEventListener("change", function(e){    
    difficultyInfo(e.target.selectedIndex)
})

function difficultyInfo(i){
    let targetCircle = document.getElementById("target-circle");
    let _targetSize = "";
    let _visible = "";
    let _remaining = "";
    let _numberChances = ""    

    _targetSize = difficulty[i].targetSize
    _visible = difficulty[i].visible
    _remaining = difficulty[i].remaining
    overallScore = _remaining;

    if(i != 0){
        let sWords = "";

        _visible > 1 || _visible < 1 && _visible > 0 ? sWords = "seconds" : sWords = "second";

        difDesc.innerHTML = `-- <i> Target's Size </i> <b> ${_targetSize} px </b>, <i> visible </i> for <b> ${_visible} ${sWords} </b> --`        

        gameBtn.removeAttribute("disabled");
        gameBtn.removeAttribute("title");
        gameBtn.setAttribute("class", "game-btn")
        targetCircle.style.height = _targetSize + "px"
        targetCircle.style.width = _targetSize + "px"
        targetCircle.style.background = "black"
        targetCircle.innerHTML = ""

                
    }else{
        difDesc.innerHTML = ""
        _remaining = "15 to 30";

        gameBtn.setAttribute("disabled", true);
        gameBtn.setAttribute("class", "game-btn disabled-btn");
        gameBtn.setAttribute("title", "disabled button, please choose difficulty.");
        targetCircle.style.background = "transparent" 
        // targetCircle.style.height = "none"       
        targetCircle.style.width = "200px"
        targetCircle.innerHTML = "<label for=\"game-difficulty\">Please Choose Difficulty.</label>"
    }

    numberChances.innerHTML = _remaining;
    selectedChances = _remaining;
    selectedVisible = _visible;
    selectedDifficulty = difficulty[i].name;
    chancesInfo.innerHTML = ` For each target circle that appears, click it to get a score. You have <i> ${_remaining} chances to aim and hit</i> the target. Click the target as fast and as many times as possible until you run out of chances. Goodluck!`    
    
}



