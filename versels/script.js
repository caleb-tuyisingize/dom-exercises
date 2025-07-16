
const answer = document.querySelector(".answer");
const answero = document.querySelector(".answero");
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




let solution = ""; 
let sol = 0;
operators.forEach(a => a.addEventListener("click", function(e){
  
    const sign =e.target.innerText;
    if(sign === "+"){
    //   const toBeOpperated = numberHolder.split(/[/+/-/×/÷/=/]/).Number();
     numberHolder += "+";
    }else if(sign === '-'){
     numberHolder += "-";
    }else if(sign === '×'){
     numberHolder += "*";
    }else if(sign === '÷'){
     numberHolder += "/";  
    }else{
        numberHolder += sign;
    }
  console.log(numberHolder)
  updateDisplay();
}));



// OPPERATIONS
// equal.addEventListener("click", function(){
    
    
//     console.log(toBeOpperated);
// })



buttons.forEach(a => a.addEventListener("click",function (e){

   const text = e.target.innerText;
   if(text === 'CE'){
     answer.innerHTML = "";
     numberHolder ="";
     solution = "";
    }else if(text === '%'){
    numberHolder += "/100";
    }else{
        numberHolder += text;
    }
    console.log(text);
}));


equal.addEventListener("click", function(){
    try{
        if(numberHolder.endsWith("=")){
            numberHolder = numberHolder.slice(0,-1);
        }
        solution += numberHolder;
        answero.innerHTML = solution;
        const result = eval(numberHolder);
        numberHolder = result.toString();
        updateDisplay();

    }catch(error){
      numberHolder = "";
      console.error(error);
    }
})
function updateDisplay(){
    answer.textContent = numberHolder;
}