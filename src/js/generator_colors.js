import refs from './refs.js'
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function setRendomColor(colors) {
  let colorChange = colors[randomIntegerFromInterval(0, colors.length - 1)];
  refs.body.style.backgroundColor = colorChange;
  console.log(colorChange);
}

let intervalId = null;

function onStartClick() {
  intervalId = setInterval(setRendomColor, 1000, colors);
  refs.butStart.disabled = true;
}

function onStopClick() {
  refs.butStart.disabled = false;
  clearInterval(intervalId);
}

export { onStartClick, onStopClick };