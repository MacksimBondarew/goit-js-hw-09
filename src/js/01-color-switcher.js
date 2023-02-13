const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let timerId = null;
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

buttonStart.addEventListener('click', (event) => {
    buttonStart.disabled = !event.target.value;
    buttonStop.disabled = event.target.value;
    console.log('start');
    timerId = setInterval(() => {
        body.style.backgroundColor = `${getRandomHexColor()}`;
    }, 1000);
});

buttonStop.addEventListener('click', (event) => {
    clearInterval(timerId);
    console.log('stop');
    buttonStart.disabled = event.target.value;
    buttonStop.disabled = !event.target.value;
});

