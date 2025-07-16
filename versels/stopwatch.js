const hours  = document.querySelector(".hours");
const minutes = document.querySelector(".mins");
const seconds = document.querySelector(".secs");

const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");

const audix = new Audio("../Yee Fanta - UBUHANUZI Freestyle.mp3")

let time = 60;
let interval = null;
const minTime = 0;
function updateDisplay(){
    const hoursNew = String(Math.floor(time / 3600)).padStart(1, "1");
    const minutesNew = String(Math.floor((time % 3600)/ 60)).padStart(0, "59");
    const secondsNew = String(time %60).padStart(0, "60");

    hours.textContent = hoursNew;
    minutes.textContent = minutesNew;
    seconds.textContent = secondsNew;
}

start.addEventListener("click", function(){
    console.log(minutes);
    if(time > minTime){
        
        if(interval) return;
        interval = setInterval(()=>{
            time--;
            updateDisplay();
        },1000);
    }else{
        clearInterval(interval);
        interval =null;

        document.querySelector(".alet").classList.toggle("review");
        audix.play();
    }
});

reset.addEventListener("click", function(){
    clearInterval(interval);
        interval = null;
        time = 60;
        updateDisplay();
  
    
});
pause.addEventListener("click", function(){
    clearInterval(interval);
    interval = null;
  
})