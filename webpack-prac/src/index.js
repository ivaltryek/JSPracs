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
import './style.css'; // Part of asset management
import _ from 'lodash';
// import Icon from './icon.png'; // Part of asset management
import print from './print'; // Part of output management

function component() {
  const el = document.createElement('div');
  const btn = document.createElement('button');
  el.innerHTML = _.join(['Hello', 'Webpack']);
  el.classList.add('hello');
  btn.innerHTML = 'Click to call print and check console.';
  btn.onclick = print;
  // const myIcon = new Image();
  // myIcon.src = Icon;
  // Part of asset management el.appendChild(myIcon);
  el.appendChild(btn);
  return el;
}
document.body.appendChild(component());
