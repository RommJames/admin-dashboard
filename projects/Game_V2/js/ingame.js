const KEY_RIGHT = 39
const KEY_LEFT = 37
const KEY_SPACE = 32

const GAME_WIDTH = 1050
const GAME_HEIGHT = 1014

const STATE = {
  x_pos : 0,
  y_pos : 0,
  spaceship_width: 50,
  move_left: false,
  move_right: false,
  shoot: false,
  lasers: [],
  cooldown: 0,
  enemyLasers: [],
  enemy_cooldown: 0,
  //enemies: [],
  enemy_width: 50,
  //number_of_enemies: 16,
}

let flying = document.getElementsByClassName("flying")
let bee_ctn = document.getElementsByClassName("bee-ctn")

//GENERAl FUNCTION
function setPosition($element,x,y){
  $element.style.transform = `translate(${x}px, ${y}px)`
}

function setSize($element, width){
  $element.style.width =  `${width}px`
  $element.style.height = "auto"
}

function bound(x){
  // if(x >= GAME_WIDTH-STATE.spaceship_width){
  //   STATE.x_pos = GAME_WIDTH-STATE.spaceship_width

  //   return STATE.x_pos
  // }\

  if(x<=-471){
    STATE.x_pos = -471
    return STATE.x_pos
  }else if(x>=522){
      STATE.x_pos = 522
      return STATE.x_pos
  }else{
    return x
  }
  // if(x<=522){
  //   STATE.x_pos = 522
  //   return STATE.x_pos
  // }
}

function deleteLaser(lasers, laser, $laser){
  const index = lasers.indexOf(laser)
  lasers.splice(index, 1)
  console.log('$laser',$laser)
  console.log('container',$container)
  console.log('index',index)
  console.log('laser',laser)
  console.log('lasers',lasers)
  console.log('length',lasers.length)
  $laser.remove()

}



function collideRect(rect1, rect2){
  return!(rect2.left > rect1.right || rect2.right < rect1.left || rect2.top > rect1.bottom || rect2.bottom< rect1.top)
}

//PLAYER
function createPlayer($container){
  // STATE.x_pos = GAME_WIDTH/2
  // STATE.y_pos = GAME_HEIGHT-50
  const $player = document.createElement("img");
  const $player_container = document.createElement("div")
  $player.src = "images/plane.png"
  $player_container.className = "player"
  $player_container.append($player)
  $container.appendChild($player_container);
  // setPosition($player,STATE.x_pos,STATE.y_pos)
  // setSize($player,STATE.spaceship_width)
}

if(input_name == "GOD FATHER"){

  function updatePlayer(){
    if(STATE.move_left){
      STATE.x_pos -= 3
    }

    if(STATE.move_right){
      STATE.x_pos += 3
    }

    if(STATE.shoot && STATE.cooldown == 0){
      createLaser($container, STATE.x_pos, 870)
      STATE.cooldown = 5;
    }
    const $player = document.querySelector(".player");
    setPosition($player,bound(STATE.x_pos), STATE.y_pos)
    if(STATE.cooldown > 0){
      STATE.cooldown -= 0.5
    }

    //console.log("God Father")
}
}else{
  //console.log("Normal")
  function updatePlayer(){
    if(STATE.move_left){
      STATE.x_pos -= 3
    }

    if(STATE.move_right){
      STATE.x_pos += 3
    }

    if(STATE.shoot && STATE.cooldown == 0){
      createLaser($container, STATE.x_pos, 870)
      STATE.cooldown = 30;
    }
    const $player = document.querySelector(".player");
    setPosition($player,bound(STATE.x_pos), STATE.y_pos)
    if(STATE.cooldown > 0){
      STATE.cooldown -= 0.5
    }
  }
}

//PLAYER LASER
function createLaser($container, x, y){
  const $laser = document.createElement("div")
  // $laser.src = "images/plane.png"
  $laser.className = "bullet"
  $container.appendChild($laser)
  const laser = {x, y, $laser}
  STATE.lasers.push(laser)
  setPosition($laser, x, y)
}

function updateLaser($container){
  const lasers = STATE.lasers
  for(let i=0; i<lasers.length; i++){
      const laser = lasers[i]
      laser.y -= 15
      if(laser.y < 0){
        deleteLaser(lasers, laser, laser.$laser)
      }
     setPosition(laser.$laser, laser.x, laser.y)

      const laser_rectangle = laser.$laser.getBoundingClientRect()
      for(let j=0; j < bee_ctn.length;j++){
        const enemy = bee_ctn[j]
        const enemy_rectangle = enemy.getBoundingClientRect()
        if(collideRect(enemy_rectangle, laser_rectangle)){
          deleteLaser(lasers, laser, laser.$laser)
          console.log("COLLIDE",lasers,laser,laser.$laser)          
          enemy.remove()
        }
      }
  }
}




//ENEMIES
function createEnemy($container){
  const $enemy = document.createElement("div")
  $enemy.innerHTML = `

  <div class="formation" style="left: 186px; top: 76px;">
            <div class="bee-ctn" style="left: 0; top: 240px;"><img src="images/bee_green.png" class="bee-img"></div>
            <div class="bee-ctn" style="left: 65px; top: 300px;"><img src="images/bee_green.png" class="bee-img"></div>
            <div class="bee-ctn" style="left: 65px; top: 180px;"><img src="images/bee_green.png" class="bee-img"></div>
            <div class="bee-ctn" style="left: 325px; top: 180px;"><img src="images/bee_green.png" class="bee-img"></div>
            <div class="bee-ctn" style="left: 390px; top: 180px;"><img src="images/bee_green.png" class="bee-img"></div>
            <div class="bee-ctn" style="left: 455px; top: 180px;"><img src="images/bee_green.png" class="bee-img"></div>
            <div class="bee-ctn" style="left: 455px; top: 300px;"><img src="images/bee_green.png" class="bee-img"></div>
            <div class="bee-ctn" style="left: 260px; top: 180px;"><img src="images/bee_green.png" class="bee-img"></div>
            <div class="bee-ctn" style="left: 260px; top: 120px;"><img src="images/bee_blue.png" class="bee-img"></div>
            <div class="bee-ctn" style="left: 195px; top: 180px;"><img src="images/bee_green.png" class="bee-img"></div>
            <div class="bee-ctn" style="left: 455px; top: 240px;"><img src="images/bee_green.png" class="bee-img"></div>
            <div class="bee-ctn" style="left: 195px; top: 300px;"><img src="images/bee_green.png" class="bee-img"></div>
            <div class="bee-ctn" style="left: 520px; top: 300px;"><img src="images/bee_green.png" class="bee-img"></div>
            <div class="bee-ctn" style="left: 520px; top: 180px;"><img src="images/bee_green.png" class="bee-img"></div>
            <div class="bee-ctn" style="left: 325px; top: 60px;"><img src="images/bee_red.png" class="bee-img"></div>
            <div class="bee-ctn" style="left: 325px; top: 300px;"><img src="images/bee_green.png" class="bee-img"></div>
            <div class="bee-ctn" style="left: 260px; top: 300px;"><img src="images/bee_green.png" class="bee-img"></div>
            <div class="bee-ctn" style="left: 195px; top: 240px;"><img src="images/bee_green.png" class="bee-img"></div>
            <div class="bee-ctn" style="left: 65px; top: 240px;"><img src="images/bee_green.png" class="bee-img"></div>
            <div class="bee-ctn" style="left: 390px; top: 300px;"><img src="images/bee_green.png" class="bee-img"></div>
            <div class="bee-ctn" style="left: 585px; top: 300px;"><img src="images/bee_green.png" class="bee-img"></div>
            <div class="bee-ctn" style="left: 390px; top: 60px;"><img src="images/bee_red.png" class="bee-img"></div>
            <div class="bee-ctn" style="left: 390px; top: 120px;"><img src="images/bee_blue.png" class="bee-img"></div>
            <div class="bee-ctn" style="left: 130px; top: 300px;"><img src="images/bee_green.png" class="bee-img"></div>
            <div class="bee-ctn" style="left: 520px; top: 120px;"><img src="images/bee_blue.png" class="bee-img"></div>
            <div class="bee-ctn" style="left: 260px; top: 240px;"><img src="images/bee_green.png" class="bee-img"></div>
            <div class="bee-ctn flying" style="left: 585px; top: 180px;"><img src="images/bee_green.png" class="bee-img"></div>
            <div class="bee-ctn" style="left: 130px; top: 240px;"><img src="images/bee_green.png" class="bee-img"></div>
            <div class="bee-ctn" style="left: 0; top: 300px;"><img src="images/bee_green.png" class="bee-img"></div>
            <div class="bee-ctn" style="left: 260px; top: 60px;"><img src="images/bee_red.png" class="bee-img"></div>
            <div class="bee-ctn flying" style="left: 0; top: 180px;">
                <img src="images/bee_green.png" class="bee-img">
            </div>
            <div class="bee-ctn" style="left: 130px; top: 180px;"><img src="images/bee_green.png" class="bee-img"></div>
            <div class="bee-ctn" style="left: 390px; top: 0;"><img src="images/bee_small.png" class="bee-img"></div>
            <div class="bee-ctn" style="left: 325px; top: 240px;"><img src="images/bee_green.png" class="bee-img"></div>
            <div class="bee-ctn" style="left: 585px; top: 240px;"><img src="images/bee_green.png" class="bee-img"></div>
            <div class="bee-ctn" style="left: 65px; top: 120px;"><img src="images/bee_blue.png" class="bee-img"></div>
            <div class="bee-ctn" style="left: 520px; top: 240px;"><img src="images/bee_green.png" class="bee-img"></div>
            <div class="bee-ctn" style="left: 195px; top: 120px;"><img src="images/bee_blue.png" class="bee-img"></div>
            <div class="bee-ctn" style="left: 455px; top: 120px;"><img src="images/bee_blue.png" class="bee-img"></div>
            <div class="bee-ctn" style="left: 130px; top: 60px;"><img src="images/bee_red.png" class="bee-img"></div>
            <div class="bee-ctn" style="left: 130px; top: 120px;"><img src="images/bee_blue.png" class="bee-img"></div>
            <div class="bee-ctn" style="left: 195px; top: 60px;"><img src="images/bee_red.png" class="bee-img"></div>
            <div class="bee-ctn" style="left: 390px; top: 240px;"><img src="images/bee_green.png" class="bee-img"></div>
            <div class="bee-ctn" style="left: 195px; top: 0;"><img src="images/bee_small.png" class="bee-img"></div>
            <div class="bee-ctn" style="left: 455px; top: 60px;"><img src="images/bee_red.png" class="bee-img"></div>
            <div class="bee-ctn" style="left: 325px; top: 120px;"><img src="images/bee_blue.png" class="bee-img"></div>
        </div>
  `
  $container.appendChild($enemy)
  //const enemy_cooldown = Math.floor(Math.random()*100)
 // STATE.enemies.push(enemy)
  //setSize($enemy, STATE.enemy_width)
  //setPosition($enemy, x, y);
}

function updateEnemies(){
  //  const dx = Math.sin(Date.now()/1000)*40
  //  const dy = Math.sin(Date.now()/1000)*30
  // // const enemies = STATE.enemies
  // for(let i = 0; i < bee_ctn.length; i++){
  //   const enemy = bee_ctn[i]
  //   var a = bee_ctn.x + dx
  //   var b = bee_ctn.y + dy
  //  // setPosition(enemy.$enemy, a, b)
  // }
  //createEnemyLaser($container, a, b)
}

// function createEnemyLaser($container, x, y){
//   const $enemyLaser = document.createElement("div")
//   
//   $enemyLaser.className = "bullet"
//   $container.appendChild($enemyLaser)
//   const enemyLaser = {x, y, $enemyLaser}
//   STATE.enemyLasers.push(enemyLaser)
//   setPosition($enemyLaser, x, y)
// }

// function updateEnemyLaser(){
//   const enemyLasers = STATE.enemyLasers
//   for (let i = 0; i < enemyLasers.length; i++) {
//     const enemyLaser = enemyLasers[i];
//     enemyLaser.y += 2
//     if(enemyLaser.y > GAME_HEIGHT){
//         deleteLaser(enemyLasers, enemyLaser, enemyLaser.$enemyLaser)
//     }
//     const enemyLaser_rectangle = enemyLaser.$enemyLaser.getBoundingClientRect()
//     const spaceship_rectangle = document.querySelector(".player").getBoundingClientRect()
//     if(collideRect(spaceship_rectangle,enemyLaser_rectangle)){
//       alert("Game Over")
//     }

//     setPosition(enemyLaser.$enemyLaser, enemyLaser.x + STATE.enemy_width,  enemyLaser.y+15)
//     console.log(enemyLaser.$enemyLaser, enemyLaser.x + STATE.enemy_width,  enemyLaser.y+15)
//   }
// }

// function createEnemies($container){
//   for (let i = 0; i < STATE.number_of_enemies/2; i++) {
//       createEnemy($container, i*80, 100)
//   }
//   for (let i = 0; i < STATE.number_of_enemies/2; i++) {
//     createEnemy($container, i*80, 180)
// }
// }

//INIT. GAME
const $container = document.querySelector('.main')
const $formation = document.querySelector('.formation')
createPlayer($container)
//createEnemies($container)
createEnemy($container)

//KEY PRESSES

function KeyPress(event){
  if(event.keyCode ===  KEY_RIGHT){
    STATE.move_right = true
    console.log("Right")
  }else if(event.keyCode === KEY_LEFT){
    STATE.move_left = true
    console.log("Left")
  }else if(event.keyCode === KEY_SPACE){

    STATE.shoot = true
    console.log("Shoot")
  }
  console.log(STATE.x_pos)
}

function KeyRelease(event){

  if(event.keyCode ===  KEY_RIGHT){
    STATE.move_right = false
    console.log("Right Release")
  }else if(event.keyCode === KEY_LEFT){
    STATE.move_left = false
    console.log("Left Release")
  }else if(event.keyCode === KEY_SPACE){
    console.log("Shoot Release")

    STATE.shoot = false
  }
}

//MAIN UPDATE FUNCTION

function update(){
  updatePlayer();
  updateLaser($container)
  // updateEnemies($container)
  // updateEnemyLaser()

  window.requestAnimationFrame(update)
}

//Event Listeners
window.addEventListener("keydown", KeyPress)
window.addEventListener("keyup", KeyRelease)
update()
let start = true
let ctr = 0

let randomNumber = Math.random() * 1000
let randomNumber2 = Math.random() * 1000


const $Enemylaser = document.createElement("div")
const $Enemylaser2 = document.createElement("div")
setInterval(function(){
   randomNumber = Math.random() * 1000
   randomNumber2 = Math.random() * 1000

   $Enemylaser.style.marginLeft = `${randomNumber}px`
   $Enemylaser2.style.marginLeft = `${randomNumber2}px`

  //const spaceship_rectangle = document.querySelector(".player").getBoundingClientRect()
  $Enemylaser.style.marginLeft = `${randomNumber}px`
  $Enemylaser2.style.marginLeft = `${randomNumber2}px`
    
  $Enemylaser.className = "enemyBullet"
  $Enemylaser2.className = "enemyBullet"
  $Enemylaser2.style.animationDelay = ".2s"
  $container.appendChild($Enemylaser)
  $container.appendChild($Enemylaser2)
},8000)



//const rect1 = $Enemylaser.getBoundingClientRect()
//const rect2 = $Enemylaser2.getBoundingClientRect()

//console.log(spaceship_rectangle,enemyLaser_rectangle)

// if(collideRect(spaceship_rectangle, enemyLaser_rectangle)){
//   alert("collide")
// }
window.addEventListener("load",function(){
 let win = this.setInterval(function(){

    ctr++
    console.log(ctr)
     for (let i = 0; i < flying.length; i++) {
       const element = flying[i];
       //alert(flying.length)
       if(flying.length == 1){
          if(ctr == 4){
            flying[0].style.transform = "translateX(70%) rotate(-30deg)"
            //start = false
            //console.log(start)
          }else if(ctr == 5){
            flying[0].style.transform = "translateX(55%) translateY(300%) rotate(20deg) rotateY(180deg)"
          }else if(ctr == 6){
            flying[0].style.transform = "translateX(-155%) translateY(350%) rotate(30deg) rotateY(-10deg)"
          }else if(ctr == 7){
            flying[0].style.transform = "translateX(-255%) translateY(450%) rotateX(-10deg)"
          }else if(ctr == 8){
            flying[0].style.transform = 'translate(0px, 0px) rotate(0deg)'
            ctr = 0
            //start = true
          }
       }else if(flying.length == 0){
          console.log("no flying")
       }else{
          if(ctr == 4){
            flying[1].style.transform = "translateX(-70%) rotate(30deg)"
            //start = false
            //console.log(start)
          }else if(ctr == 5){
            flying[1].style.transform = "translateX(-55%) translateY(300%) rotate(-20deg) rotateY(-180deg)"
          }else if(ctr == 6){
            flying[1].style.transform = "translateX(155%) translateY(350%) rotate(-30deg) rotateY(-10deg)"
          }else if(ctr == 7){
            flying[1].style.transform = "translateX(255%) translateY(450%) rotateX(10deg)"
          }else if(ctr == 8){
            flying[1].style.transform = 'translate(0px, 0px) rotate(0deg)'
            //ctr = 0
            //start = true
          }else if(ctr == 10){
            flying[0].style.transform = "translateX(70%) rotate(-30deg)"

            //start = false
            //console.log(start)
          }else if(ctr == 11){
            flying[0].style.transform = "translateX(55%) translateY(300%) rotate(20deg) rotateY(180deg)"
          }else if(ctr == 12){
            flying[0].style.transform = "translateX(-155%) translateY(350%) rotate(30deg) rotateY(-10deg)"
          }else if(ctr == 13){
            flying[0].style.transform = "translateX(-255%) translateY(450%) rotateX(-10deg)"
          }else if(ctr == 14){
            flying[0].style.transform = 'translate(0px, 0px) rotate(0deg)'
            ctr = 0
            //start = true
          }
       }
     }

    for (let i = 0; i < flying.length; i++) {
      flying[i].style.transition = "all 1s ease-in-out"
    }
     //flying[1].style.transform = "translate(51.121px, 231.623px) rotate(323.387deg)"
      // if(end == 'translate(51.121px, 231.623px) rotate(323.387deg)' ){
      //   alert("stop")
      // }

      
  for (let i = 0; i <= bee_ctn.length; i++) {
    //const element = bee_ctn[i];
    
    if(bee_ctn.length == 0){
     // alert("hi")
      start_layer[0].setAttribute('class','layer start-layer')
      game_layer[0].setAttribute('class','layer game-layer')      
      end_layer[0].setAttribute('class','layer end-layer current')  
      clearInterval(win)    
    }    
  }     
      
  },1000)
 

})
