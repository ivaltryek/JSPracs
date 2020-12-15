// Basics Of Webpack -  First Step!
// To run- npx webpack
/* Part of the basics of Webpack start */
/*

function component() {
  const el = document.createElement('div');
  el.innerHTML = _.join(['Hello', 'Webpack']);
  return el;
}

document.body.appendChild(component());
Part of the basics Webpack ends  */
import './style.css';
import _ from 'lodash';
import Icon from './icon.png';

function component() {
  const el = document.createElement('div');
  el.innerHTML = _.join(['Hello', 'Webpack']);
  el.classList.add('hello');

  const myIcon = new Image();
  myIcon.src = Icon;
  el.appendChild(myIcon);
  return el;
}
document.body.appendChild(component());
