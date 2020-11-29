import './css/styles.css';
import refs from './js/refs.js'
import { onStartClick, onStopClick } from './js/generator_colors.js';

  
refs.butStart.addEventListener('click', onStartClick);
refs.butStop.addEventListener('click', onStopClick);