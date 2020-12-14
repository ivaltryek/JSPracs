const canvas = document.querySelector(`#sketchCanvas`);
const ctx = canvas.getContext(`2d`);
const shakeBtn = document.querySelector(`.shake`);

ctx.lineJoin = `round`;
ctx.lineCap = `round`;
ctx.lineWidth = 10;

const width = canvas.width;
const height = canvas.height;

ctx.beginPath(); // To draw
ctx.moveTo(200, 200);
ctx.lineTo(200, 200);
ctx.stroke();
