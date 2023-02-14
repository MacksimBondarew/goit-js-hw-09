// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

const getElement = data => document.querySelector(data);
const start = document.querySelector('[data-start]');
const daysElement = getElement('[data-days]');
const hoursElement = getElement('[data-hours]');
const minutesElement = getElement('[data-minutes]');
const secondsElement = getElement('[data-seconds]');
const input = getElement('#datetime-picker');
const field = document.querySelectorAll('.field');
const timer = getElement('.timer');
timer.style.display = 'flex';
field.forEach (item => {
    item.firstElementChild.style.fontSize = '24px';
    item.lastElementChild.style.fontSize = '24px';
    item.lastElementChild.style.marginRight = '24px';
})


start.disabled = true;

let timerId = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        selectedDate = selectedDates[0];
        currentDate = new Date();
        if (selectedDate > currentDate) {
            start.disabled = false;
            start.addEventListener('click', () => {
                timerId = setInterval(() => {
                    start.disabled = true;

                    const date = new Date(input.value).getTime();
                    const now = new Date().getTime();
                    const timeDiference = date - now;

                    const { days, hours, minutes, seconds} = convertMs(timeDiference);
                    addNubmer(days, hours, minutes, seconds);

                    if (timeDiference < 1000) {
                        clearInterval(timerId);
                        start.disabled = false;
                    }
                }) 
            });
        } else {
            start.disabled = true;
            Notiflix.Notify.failure( "Please choose a date in the future");
        };
    },
};
function addNubmer(days, hours, minutes, seconds) {
    daysElement.innerHTML = days < 10 ? addZero(days) : days;
    minutesElement.innerHTML = minutes < 10 ? addZero(minutes) : minutes;
    hoursElement.innerHTML = hours < 10 ? addZero(hours) : hours;
    secondsElement.innerHTML = seconds < 10 ? addZero(seconds) : seconds;
}

//Add zero if one цифра

function addZero(event) {
    return String(event).padStart(2, '0');
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    
    return { days, hours, minutes, seconds };
}

flatpickr(input, options);