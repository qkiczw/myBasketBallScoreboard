const BTN_START = document.querySelector('.btn__start');
const BTN_PAUSE= document.querySelector('.btn__pause');
const BTN_INCREASE_MINUTES = document.querySelector('.btn__increase__minutes')
const BTN_DECREASE_MINUTES = document.querySelector('.btn__decrease__minutes')
const BTN_INCREASE_SECONDS = document.querySelector('.btn__increase__seconds')
const BTN_DECREASE_SECONDS = document.querySelector('.btn__decrease__seconds')

let countDownElMinutes = document.querySelector('.countdown__timer__current--minutes');
let countDownElSeconds = document.querySelector('.countdown__timer__current--seconds');

let defaultSartMinutes = 0;
let defaultSartSeconds = 0;

countDownElMinutes.innerHTML = defaultSartMinutes < 10 ? `0${defaultSartMinutes}` : defaultSartMinutes;
countDownElSeconds.innerHTML = defaultSartSeconds < 10 ? `0${defaultSartSeconds}` : defaultSartSeconds;

let time = defaultSartMinutes * 60;


const countDownEl = document.querySelector('.countdown__time'); 


function updateCountdown() {
    BTN_START.disabled = true;
    let minutes =Math.floor(time / 60);
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    
    let seconds = time % 60;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    
    countDownElMinutes.innerHTML = minutes;
    countDownElSeconds.innerHTML = seconds;

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
BTN_INCREASE_MINUTES.addEventListener('click', function() {
    defaultSartMinutes++
    countDownElMinutes.innerHTML = defaultSartMinutes < 10 ? `0${defaultSartMinutes}` : defaultSartMinutes;
    console.log(defaultSartMinutes);
    time = defaultSartMinutes * 60;
})
BTN_DECREASE_MINUTES.addEventListener('click', function() {
    defaultSartMinutes--
    defaultSartMinutes < 0 ? defaultSartMinutes = 0 : defaultSartMinutes;
    countDownElMinutes.innerHTML = defaultSartMinutes < 10 ? `0${defaultSartMinutes}` : defaultSartMinutes;
    time = defaultSartMinutes * 60;
})
BTN_INCREASE_SECONDS.addEventListener('click', function() {
    defaultSartSeconds++
    countDownElSeconds.innerHTML = defaultSartSeconds < 10 ? `0${defaultSartSeconds}` : defaultSartSeconds;
})
BTN_DECREASE_SECONDS.addEventListener('click', function() {
    defaultSartSeconds--
    defaultSartSeconds < 0 ? defaultSartSeconds = 0 : defaultSartSeconds;
    countDownElSeconds.innerHTML = defaultSartSeconds < 10 ? `0${defaultSartSeconds}` : defaultSartSeconds;
})



