const BTN_START = document.querySelector('.btn__start');
const BTN_PAUSE= document.querySelector('.btn__pause');
let countDownElMinutes = document.querySelector('.countdown__timer__current--minutes');
let countDownElSeconds = document.querySelector('.countdown__timer__current--seconds');

let defaultSartMinutes = 0;
let defaultSartSeconds = 0;

countDownElMinutes.innerHTML = defaultSartMinutes < 10 ? `0${defaultSartMinutes}` : defaultSartMinutes;
countDownElSeconds.innerHTML = defaultSartSeconds < 10 ? `0${defaultSartSeconds}` : defaultSartSeconds;


const startingMinutes = 0.10;
let time = startingMinutes * 60;


const countDownEl = document.querySelector('.countdown__time'); 


function updateCountdown() {
    BTN_START.disabled = true;
    let minutes =Math.floor(time / 60);
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    
    let seconds = time % 60;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    
    countDownElMinutes.innerHTML = minutes;
    countDownElSeconds.innerHTML = seconds;

    // countDownEl.innerHTML = `${minutes}:${seconds}`;
    time--;

    console.log(time)
    if(time < 0) {
        console.log('koniec czasu');
        clearInterval(startCountign);
    }
}

BTN_START.addEventListener('click', function() {
     startCountign = setInterval(updateCountdown, 1000);
})

BTN_PAUSE.addEventListener('click', function() {
    clearInterval(startCountign);
    BTN_START.disabled = false;
})


