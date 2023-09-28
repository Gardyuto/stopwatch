const screen = document.querySelector(".screen")
const startT = document.querySelector(".start");
const stopT = document.querySelector(".stop")
const reset = document.querySelector(".reset")

let seconds = 0;
let minutes = 0;
let hours = 0;



let timer;

function interval() {
    if (seconds >= 60) {
        seconds = 0;
        minutes++

    }
    if (minutes >= 60) {
        minutes = 0;
        hours++
    }

    let h = hours;
    let m = minutes;
    let s = seconds;



    if (h <= 9) h = '0' + h
    if (m <= 9) m = '0' + m
    if (s <= 9) s = '0' + s
    screen.innerHTML = h + ":" + m + ":" + s
    seconds++
     
}

function f_start() {
    if(timer) return;

    timer = setInterval(interval, 1000)
}

function f_stop() {
    clearInterval(timer)
    timer = null;
}

function f_reset(){
     seconds = 0;
     minutes = 0;
     hours = 0;
    screen.textContent = '00:00:00'
}
reset.onclick = f_reset
startT.onclick = f_start;
stopT.onclick = f_stop

interval()





