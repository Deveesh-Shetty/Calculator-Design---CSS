<<<<<<< HEAD
function printNumber(number){
    let text = document.getElementById("calculator-screen").textContent
    click = 0
    document.getElementById("calculator-screen").innerHTML = text + number
    if(change!=0){
        document.getElementById("calculator-screen").innerHTML = number
        change = 0
        }
}

click = 0
function operatorFunction(operator){
    let text = document.getElementById("calculator-screen").textContent
    click += 1
    if(click==1){
        if(operator == "add"){
            document.getElementById("calculator-screen").innerHTML = text + "+"
        }
        else if(operator == "sub"){
            document.getElementById("calculator-screen").innerHTML = text + "-"
        }
        else if(operator == "mul"){
            document.getElementById("calculator-screen").innerHTML = text + "*"
        }
        else if(operator == "divs"){
            document.getElementById("calculator-screen").innerHTML = text + "/"
        }
        else if(operator == "mods"){
            document.getElementById("calculator-screen").innerHTML = text + "%"
        }
        else if(operator == "dec"){
            document.getElementById("calculator-screen").innerHTML = text + "."
        }
        else if(operator == "sqr"){
            document.getElementById("calculator-screen").innerHTML = text * text
            click = 0
        }
        else if(operator == "cube"){
            document.getElementById("calculator-screen").innerHTML = text * text * text
            click = 0
        }
        else if(operator == "exp"){
            document.getElementById("calculator-screen").innerHTML = text + "**"
        }
        else if(operator == "sqrt"){
            document.getElementById("calculator-screen").innerHTML = Math.sqrt(text)
            click = 0
        }
        else if(operator == "bksp"){
            let newText = text.slice(0, -1)
            document.getElementById("calculator-screen").innerHTML = newText
            click = 0
        }
        else if(operator == "AC"){
            document.getElementById("calculator-screen").innerHTML = ""
            click = 0
        }
        change = 0
    }
}

let change = 0
function isEqualsTo(){
    let text = document.getElementById("calculator-screen").textContent
    let answer = eval(text)
    document.getElementById("calculator-screen").innerHTML = answer
    change = 1
}

let onClick = 0
function plusMinus() {
    onClick += 1
    let text = document.getElementById("calculator-screen").textContent
    if(onClick%2!=0){
        document.getElementById("calculator-screen").innerHTML = "-" + text
    }
    else{
        let newText = text.replace("-","")
        document.getElementById("calculator-screen").innerHTML = newText
    }
}


=======
function numberOne() {
    let text = document.getElementById("calculator-screen").textContent
    click = 0
    document.getElementById("calculator-screen").innerHTML = text + "1"
    if(change!=0){
    document.getElementById("calculator-screen").innerHTML = "1"
    change = 0
    }
}
function numberTwo() {
    let text = document.getElementById("calculator-screen").textContent
    click = 0
    document.getElementById("calculator-screen").innerHTML = text + "2"
    if(change!=0){
        document.getElementById("calculator-screen").innerHTML = "2"
        change = 0
        }
}
function numberThree() {
    let text = document.getElementById("calculator-screen").textContent
    click = 0
    document.getElementById("calculator-screen").innerHTML = text + "3"
    if(change!=0){
        document.getElementById("calculator-screen").innerHTML = "3"
        change = 0
        }
}
function numberFour() {
    let text = document.getElementById("calculator-screen").textContent
    click = 0
    document.getElementById("calculator-screen").innerHTML = text + "4"
    if(change!=0){
        document.getElementById("calculator-screen").innerHTML = "4"
        change = 0
        }
}
function numberFive() {
    let text = document.getElementById("calculator-screen").textContent
    click = 0
    document.getElementById("calculator-screen").innerHTML = text + "5"
    if(change!=0){
        document.getElementById("calculator-screen").innerHTML = "5"
        change = 0
        }
}
function numberSix() {
    let text = document.getElementById("calculator-screen").textContent
    click = 0
    document.getElementById("calculator-screen").innerHTML = text + "6"
    if(change!=0){
        document.getElementById("calculator-screen").innerHTML = "6"
        change = 0
        }
}
function numberSeven() {
    let text = document.getElementById("calculator-screen").textContent
    click = 0
    document.getElementById("calculator-screen").innerHTML = text + "7"
    if(change!=0){
        document.getElementById("calculator-screen").innerHTML = "7"
        change = 0
        }
}
function numberEight() {
    let text = document.getElementById("calculator-screen").textContent
    click = 0
    document.getElementById("calculator-screen").innerHTML = text + "8"
    if(change!=0){
        document.getElementById("calculator-screen").innerHTML = "8"
        change = 0
        }
}
function numberNine() {
    let text = document.getElementById("calculator-screen").textContent
    click = 0
    document.getElementById("calculator-screen").innerHTML = text + "9"
    if(change!=0){
        document.getElementById("calculator-screen").innerHTML = "9"
        change = 0
        }
}
function numberZero() {
    let text = document.getElementById("calculator-screen").textContent
    click = 0
    document.getElementById("calculator-screen").innerHTML = text + "0"
    if(change!=0){
        document.getElementById("calculator-screen").innerHTML = "0"
        change = 0
        }
}
function numberDoubleZero() {
    let text = document.getElementById("calculator-screen").textContent
    click = 0
    document.getElementById("calculator-screen").innerHTML = text + "00"
    if(change!=0){
        document.getElementById("calculator-screen").innerHTML = "00"
        change = 0
        }
}
function allClear() {
    click = 0
    document.getElementById("calculator-screen").innerHTML = ""
}
let onClick = 0
function plusMinus() {
    onClick += 1
    let text = document.getElementById("calculator-screen").textContent
    if(onClick%2!=0){
        document.getElementById("calculator-screen").innerHTML = "-" + text
    }
    else{
        let newText = text.replace("-","")
        document.getElementById("calculator-screen").innerHTML = newText
    }
}
function backSpace() {
    let text = document.getElementById("calculator-screen").textContent
    let newText = text.slice(0, -1)
    document.getElementById("calculator-screen").innerHTML = newText
}
click = 0
function decimal(){
    click += 1
    if(click==1){
        let text = document.getElementById("calculator-screen").textContent
        document.getElementById("calculator-screen").innerHTML = text + "."
    }
}
function addition(){
    click += 1
    value = "+"
    if(click==1){
        let text = document.getElementById("calculator-screen").textContent
        document.getElementById("calculator-screen").innerHTML = text + "+"
        change = 0
    }
}
function subtraction(){
    click += 1
    if(click==1){
        let text = document.getElementById("calculator-screen").textContent
        document.getElementById("calculator-screen").innerHTML = text + "-"
        change = 0
    }
}
function multiplication(){
    click += 1
    if(click==1){
        let text = document.getElementById("calculator-screen").textContent
        document.getElementById("calculator-screen").innerHTML = text + "*"
        change = 0
    }
}
function division(){
    click += 1
    if(click==1){
        let text = document.getElementById("calculator-screen").textContent
        document.getElementById("calculator-screen").innerHTML = text + "/"
        change = 0
    }
}
function moduloDivision(){
    click += 1
    if(click==1){
        let text = document.getElementById("calculator-screen").textContent
        document.getElementById("calculator-screen").innerHTML = text + "%"
        change = 0
    }
}
function squareRoot(){
        let text = document.getElementById("calculator-screen").textContent
        document.getElementById("calculator-screen").innerHTML = Math.sqrt(text)
}
function exponent() {
    click += 1
    if(click==1){
        let text = document.getElementById("calculator-screen").textContent
        document.getElementById("calculator-screen").innerHTML = text + "**"
    }
}
function square(){
        let text = document.getElementById("calculator-screen").textContent
        document.getElementById("calculator-screen").innerHTML = text * text
}
function cube(){
        let text = document.getElementById("calculator-screen").textContent
        document.getElementById("calculator-screen").innerHTML = text * text * text
}

let change = 0
function isEqualsTo(){
    let text = document.getElementById("calculator-screen").textContent
    let answer = eval(text)
    document.getElementById("calculator-screen").innerHTML = answer
    change = 1
    console.log("Inside" + change)
}


>>>>>>> 2a917e9076d60f5e454cc453f6db654e585a1637
