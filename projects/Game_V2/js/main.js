// VARIABLES

//---BUTTONS
let btn_start = document.getElementsByClassName('btn-start')
let btn_restart = document.getElementsByClassName('btn-restart')

//---LAYERS
let start_layer = document.getElementsByClassName('start-layer')
let game_layer = document.getElementsByClassName('game-layer')
let end_layer = document.getElementsByClassName('end-layer')

//---INPUTS
let player_name = document.getElementById('player-name')
let input_name = localStorage.getItem('input_name')
//---TIME, LIFE, AND NAME
let time_display = document.getElementsByClassName('time-display')
let player_display = document.getElementsByClassName('player-display')
let time = 0
let mins = 0
let timer

//FORM
let start_form = document.getElementById("start-form")
// start_form.addEventListener('submit',function(){
//     //GET FORM DATA
//     let data = new FormData()
//     data.append("name", document.getElementById("player-name").value)

//     //AJAX
//     let xhr = new XMLHttpRequest()
//     xhr.open("POST", "handler.php")
//     xhr.onload = function(){
//         console.log(this.response)
//     }
//     xhr.send(data)

//     //PREVENT HTML FORM SUBMIT
//     return false
// })


//localStorage.removeItem("input_name")
//VALIDATION FOR THE CURRENT PAGE
    if(input_name == null){
        start_layer[0].setAttribute('class','layer start-layer current')
        game_layer[0].setAttribute('class','layer game-layer')
    }else{        
        start_layer[0].setAttribute('class','layer start-layer')
        game_layer[0].setAttribute('class','layer game-layer current')
    }

// BEFORE STARTING THE GAME
player_display[0].innerHTML = input_name
timer = setInterval(() => {
    time++
    if(time < 10){
       
        time_display[0].innerHTML = `0${mins}:0${time}`
    }else if(time >= 10 && time <= 59){
        time_display[0].innerHTML = `0${mins}:${time}`
    }else if(time >= 60){
        time = 0
        if(mins < 10){
            mins++
            time_display[0].innerHTML = `0${mins}:0${time}`
        }else if(mins >= 10){
            mins++
            time_display[0].innerHTML = `${mins}:${time}`
        }else if(mins == 60){
            clearInterval(timer)
        }
    }
}, 1000);

setTimeout(()=>{
    for (let i = 0; i < bee_ctn.length; i++) {
        const element = bee_ctn[i];
        element.style.animation = "enemy_entrance_even 2s 0 ease-in-out"        
    }
},2000)

btn_start[0].addEventListener('click', function(){
    if(player_name.value.length == 0){
        player_name.style.border = "2px solid red"
        
    }else if(player_name.value.length < 3 || player_name.value.length > 20){
        alert('player_name.length')
        player_name.style.border = "2px solid red"
    }else{

        player_display[0].innerHTML = input_name
        location.reload()
        
        localStorage.setItem('input_name',player_name.value)  
    }    
})


//RESTART
btn_restart[0].addEventListener('click',function(){
    localStorage.removeItem("input_name")
    location.reload()
})
