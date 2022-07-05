var currentNumber = document.querySelector('span#currentNumber');
var currentNumberRet = 0;
// var incrementDecrement = ""


// function inicio(){
//     var valueStart = document.querySelector('input#value')  
//     return currentNumberRet = Number(valueStart)
// }
// function calc(){
//     var valueCalc = document.querySelector('input#calc')
//     return incrementDecrement = Number(valueCalc)
// }
function increment(){
    currentNumberRet = ++currentNumberRet;
        if(currentNumberRet >= 1){
            currentNumber.style.color = 'blue'
            currentNumber.style.border = "2px solid blue"
        }else if(currentNumberRet <= -1){
            currentNumber.style.color = 'red'
            currentNumber.style.border = "2px solid red"
        }else{
            currentNumber.style.color = 'black'
            currentNumber.style.border = "2px solid black"
        }
    currentNumber.innerHTML = currentNumberRet;
}
function decrement(){
    currentNumberRet = --currentNumberRet;
        if(currentNumberRet >= 1){
            currentNumber.style.color = 'blue'
            currentNumber.style.border = "2px solid blue"
        }else if(currentNumberRet <= -1){
            currentNumber.style.color = 'red'
            currentNumber.style.border = "2px solid red"
        }else{
            currentNumber.style.color = 'black'
            currentNumber.style.border = "2px solid black"
        }
    currentNumber.innerHTML = currentNumberRet;
}