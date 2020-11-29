
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];


const refs = {
  butStart: document.querySelector('button[data-action="start"]'),
  butStop: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector('body'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export function setRendomColor(colors) {
  let colorChange = colors[randomIntegerFromInterval(0, colors.length - 1)];
  refs.body.style.backgroundColor = colorChange;
  console.log(colorChange);
}

let intervalId = null;

export function onStartClick() {
  intervalId = setInterval(setRendomColor, 1000, colors);
  refs.butStart.disabled = true;
}

export function onStopClick() {
  refs.butStart.disabled = false;
  clearInterval(intervalId);
  }
