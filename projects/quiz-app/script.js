let Q_Data = [
    {
        question: 'What does the online advertising metric RPM measure?',
        a: 'Revenue per 1,000 impressions',
        b: 'Revenue per 1,000,000 impressions',
        c: 'Revenue per 1,000 clicks',
        d: 'Revenue per 1,000,000 clicks',
        correct: 'a'
    },{
        question: 'Which adjective describes a Wi-Fi system with multiple routers?',
        a: 'Mesh',
        b: 'Net',
        c: 'Web',
        d: 'Ring',
        correct: 'a'
    },{
        question: 'Which component might have an x64 architecture?',
        a: 'RAM',
        b: 'SSD',
        c: 'HDD',
        d: 'CPU',
        correct: 'd'
    },{
        question: 'What was DNSSEC created?',
        a: 'To simplify DNS management',
        b: 'To make DNS lookups faster',
        c: 'To improve DNS security',
        d: 'To make DNS compatible with IP6',
        correct: 'c'
    },{
        question: "Software testing performed by users unfamiliar with an app's source code is called what?",
        a: 'Outer Ring Testing',
        b: 'Black Box Testing',
        c: 'Low Level Testing',
        d: 'Open Scale Testing',
        correct: 'b'
    },{
        question: "A popular general-purpose scripting language that is especially suited to web development. Fast, flexible and pragmatic",
        a: 'CSS',
        b: 'Javascript',
        c: 'PHP',
        d: 'HTML',
        correct: 'c'
    },{
        question: "a standardized system for tagging text files to achieve font, color, graphic, and hyperlink effects on World Wide Web pages.",
        a: 'CSS',
        b: 'Javascript',
        c: 'PHP',
        d: 'HTML',
        correct: 'd'
    },{
        question: "A style sheet language used for describing the presentation of a document written in a markup language such as HTML.",
        a: 'CSS',
        b: 'Javascript',
        c: 'PHP',
        d: 'HTML',
        correct: 'a'
    },{
        question: "An object-oriented computer programming language commonly used to create interactive effects within web browsers.",
        a: 'CSS',
        b: 'Javascript',
        c: 'PHP',
        d: 'HTML',
        correct: 'b'
    }
]

let question_txt = document.getElementById("question")
let a_ans = document.getElementById("a_ans")
let b_ans = document.getElementById("b_ans")
let c_ans = document.getElementById("c_ans")
let d_ans = document.getElementById("d_ans")
let randomnumber = Math.floor(Math.random() * Q_Data.length)
let answer = document.querySelectorAll('.answer')
let score_id = document.getElementById("score")
let q_ans = ""
let score = 0
let btn = document.getElementById("btn")

let msg = document.getElementById("msg")
let time = 0


let Q_current = 0

let array = []

while(Q_Data.length !== 0){
    let random = Math.floor(Math.random() * Q_Data.length)
    array.push(Q_Data[random])
    Q_Data.splice(random, 1)
}

Q_Data = array

console.log(Q_Data)

function Random(){

    if(randomnumber == randomnumber){
        randomnumber = Math.floor(Math.random() * Q_Data.length)    
    }
    randomnumber = Math.floor(Math.random() * Q_Data.length)
    console.log(randomnumber + " hi")

}
   
    Random()

    let Q_random = randomnumber

function Deselect(){
     answer.forEach(data=>{
         data.checked = false
     })
}

function Btn(){
   
    Selectans()
    //Random()

    //console.log(Q_random)
    //let Q_random = randomnumber
    let Q_current_Data = Q_Data[Q_current]
    //console.log(hi)    
    if(Q_current_Data.correct == q_ans){
        score++
        console.log(score)
        score_id.innerHTML = score

        time = setTimeout(function(){
            msg.style.display = "none"
         },3000);
         msg.style.background = "#4fd163"
         msg.innerHTML = "Correct"
         msg.style.display = "inherit"
         
    }else if(q_ans == ""){
        time = setTimeout(function(){
            msg.style.display = "none"
         },3000);         
         msg.style.background = "#e66767"
         msg.innerHTML = "Please Answer"
         msg.style.display = "inherit"
         color = "#e55039"

    }else{

        time = setTimeout(function(){
            msg.style.display = "none"
         },3000);
         msg.style.background = "#c23616"
         msg.innerHTML = "Wrong"
         msg.style.display = "inherit"
         color = "#e55039"

    }

    if(q_ans != ""){
        Q_current++
        console.log("answer" + q_ans)          
        Deselect()
        q_ans = ""
    }

    
       
    if(Q_current < Q_Data.length){
        Q_load()
    }else{

        let ul = document.getElementById("ul")

         time = setTimeout(function(){
            msg.style.display = "none"
            
         },5000);         

        msg.style.display = "flex"
        msg.innerHTML = "You finished the questions"
        btn.innerHTML = "Restart Game"
        btn.style.background = "#e66767"    
        ul.remove()      
        question.innerHTML = `You score ${score} / ${Q_Data.length}`
        
        btn.addEventListener("click" ,function(){
            location.reload()
        })

        }            

}
Q_load()

function Selectans(){
    
    answer.forEach(element => {
        if(element.checked){
            q_ans = element.id
        }
    })

    //return undefined

   // console.log(q_ans)
}


function Q_load(){
    //randomnumber
    //console.log(randomnumber)       
    let Q_current_Data = Q_Data[Q_current]    
    
    console.log(Q_current_Data.correct)
    question_txt.innerHTML = Q_current_Data.question
    a_ans.innerHTML = Q_current_Data.a
    b_ans.innerHTML = Q_current_Data.b
    c_ans.innerHTML = Q_current_Data.c
    d_ans.innerHTML = Q_current_Data.d

}