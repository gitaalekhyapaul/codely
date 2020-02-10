
window.onload = () => {
    document.getElementById('home').scrollIntoView()
    let str = "Codely."
    let i = 0
    const terminalDash = document.querySelector(".terminal")   
    const heading = document.querySelector(".header") 
    var typeWriter = setInterval(() => {
        
        heading.innerHTML = heading.innerHTML + str.charAt(i)
        i = i + 1
        if(i === 8){
            clearInterval(typeWriter)
        }       
    }, 250);
    setInterval(() =>{

    terminalDash.style.visibility = (terminalDash.style.visibility == 'hidden' ? '' : 'hidden');
    }, 750)
}
const whyButton = () => {
    document.getElementById('why-us').scrollIntoView()
}
const whatsNew = () => {
    document.getElementById('whats-new').scrollIntoView()
}
const practiceTime = () => {
    document.getElementById('practiceTime').scrollIntoView()
}
const hamBurger = () => {
    document.getElementById('practiceTime').scrollIntoView()
}

const inputArray = document.querySelectorAll("input")
var ansArray = ["for","check-if","then","else","throw"]
const startButton = document.querySelector(".startButton")
const checkResult = document.querySelector(".checkButton")
const result = document.querySelector(".result");

const startQuiz = startButton.addEventListener("click", () => {
    for( let i = 0 ; i< 5; i++){
        inputArray[i].value = ''
    }
    result.innerHTML = ''
})
const checkAnswer = checkResult.addEventListener("click", () => {
    let flag = 1
    for(let i = 0; i < 5; i++){
        if(inputArray[i].value !== ansArray[i] ){
            flag = 0
        }
    }
    if(flag === 0){
        result.style.color = 'rgb(255,0,0)'
        result.innerHTML = "Result: FAIL"
    }
    else{
        result.style.color = 'rgb(0,255,0)'
        result.innerHTML = "Result: PASS"
    }
})