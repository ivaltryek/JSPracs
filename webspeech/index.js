import { handleResult } from './handlers';
import { colorsByLength, isDark } from './colors';

const colorsEl = document.querySelector('.colors');

function displayColors(colors) {
  return colors
    .map(
      (color) => `<span class="color ${color} ${
        isDark(color) ? 'dark' : ''
      }" style="background: ${color};">${color}</span>`
    )
    .join('');
}

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

function start() {
  if (!window.SpeechRecognition) {
    console.log(' Does not support in your browser. ');
    return;
  }
  console.log('Starting..');
  const recognition = new window.SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.onresult = handleResult;
  recognition.start();
}

start();
colorsEl.innerHTML = displayColors(colorsByLength);
