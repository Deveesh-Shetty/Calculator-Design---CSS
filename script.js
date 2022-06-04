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


