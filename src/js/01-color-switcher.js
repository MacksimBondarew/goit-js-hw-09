const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');
console.log(body);
console.log(buttonStart);
console.log(buttonStop);
let timerId = null;
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

buttonStart.addEventListener('click', (event) => {
    buttonStart.disabled = !event.target.value;
    buttonStop.disabled = event.target.value;
    timerId = setInterval(() => {
        body.style.backgroundColor = `${getRandomHexColor()}`;
        console.log('1321321');
    }, 1000);

});

buttonStop.addEventListener('click', (event) => {
    clearInterval(timerId);
    buttonStart.disabled = event.target.value;
});

