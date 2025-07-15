
const answer = document.querySelector(".answer");
const buttons = document.querySelectorAll(".pursa-value");
// console.log(buttons);
const operations = document.querySelectorAll(".numbers button");
const operators = document.querySelectorAll(".operations button")
const equal = document.getElementById("equal");

console.log(operators)
let numberHolder = "";

// numbers
operations.forEach(a => a.addEventListener("click", function(e){
  numberHolder += e.target.innerText;
  console.log(numberHolder)
  updateDisplay();
}));
 
operators.forEach(a => a.addEventListener("click", function(e){
    
  numberHolder += e.target.innerText;
  console.log(numberHolder)
  updateDisplay();
}));
// OPPERATIONS
equal.addEventListener("click", function(){
    const toBeOpperated = numberHolder.split(/[/+/-/×/÷/=/]/);
    
    console.log(toBeOpperated);
})



// buttons.forEach(a => a.addEventListener("click",function (e){
//    const text = e.target.innerText;
//    answer.innerHTML = text;
//     console.log(text);
// }));

function updateDisplay(){
    answer.textContent = numberHolder;
}