const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let timerId = null;
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

buttonStart.addEventListener('click', (event) => {
    buttonStart.disabled = true;
    buttonStop.disabled = false;
    timerId = setInterval(() => {
        body.style.backgroundColor = `${getRandomHexColor()}`;
    }, 1000);
});

buttonStop.addEventListener('click', (event) => {
    clearInterval(timerId);
    buttonStart.disabled = false;
    buttonStop.disabled = true;
});

