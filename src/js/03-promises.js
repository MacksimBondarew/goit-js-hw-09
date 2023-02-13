import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css'; 

const searchElements = element => document.querySelector(element);
const form = searchElements('.form');
const step = searchElements('[name="step"]');
const amount = searchElements('[name="amount"]');
const delayPromise = searchElements('[name="delay"]');


function createPromise(position, delayPromiseNumber) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delayPromiseNumber});
      } else {
        reject({ position, delayPromiseNumber});
      }
    }, delayPromiseNumber);
  })
};

function submitCreatePromiseAmountDelapStep(event) {
  event.preventDefault();

  let delayPromiseNumber = +delayPromise.value;
  const stepNumber = +step.value;
  const amountNumber = +amount.value;
  

  for (let position = 1; position <= amountNumber; position++) {
    createPromise(position, delayPromiseNumber)
    .then(({ position, delayPromiseNumber}) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delayPromiseNumber}ms`);
    })
    .catch(({position, delayPromiseNumber}) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delayPromiseNumber}ms`);
    });
    delayPromiseNumber += stepNumber;
  }
}
form.addEventListener('submit', submitCreatePromiseAmountDelapStep);