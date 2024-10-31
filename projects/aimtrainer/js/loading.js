let aimLogo = document.getElementsByClassName("aim-logo")[0];
// Valid is to avoid bypassing loading / Start screen
let valid;

setTimeout(() => {

    document.onclick = function(){
        enterGame()
    }

    document.onkeypress = function(){
        enterGame()
    }

    aimLogo.setAttribute("class", "aim-logo aim-logo-hover");

}, 4700);

// Enter Game
function enterGame(){
    
    // alert(
    //     `Sorry, it's not ready to play yet. :(\n----------------------------------\nUnder Maintenance.
    //     `
    // )

    window.location.href = "./game/index.html"

    // valid = localStorage.setItem("valid", "valid");
}

// Aim Logo Hover Effect
// let angle = 0;
// let option = "0";

// aimLogo.addEventListener("mouseover", function(e){         

//     e.target.style.transition = "transition: all 0.3s ease-in-out;"        
//     if(angle == 360){
//         option = "1";
//     }else if(angle == 0){
//         option = "0";
//     };
//     switch(option){
//         case "0":         
//             angle += 90;            
//             break;
//         case "1":            
//             angle -= 90;            
//             break;
//         default:
//             break;
//     }

//     aimLogo.style.transform = "rotate(" + angle + "deg)";
//     alert(angle);
// })