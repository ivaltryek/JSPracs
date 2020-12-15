function wait(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function randomNumberGenerator(min = 20, max = 150, randomNumber = Math.random()) {
  return Math.floor(randomNumber * (max - min) + min);
}

function draw(el) {
  console.log(el, 'el');
  let index = 1;
  const text = el.textContent;
  console.log(text);
  const { typeMin, typeMax } = el.dataset;
  console.log(el.dataset);
  async function drawLetter() {
    el.textContent = text.slice(0, index);
    index += 1;
    const amountOfTimeToWait = randomNumberGenerator(typeMin, typeMax);
    await wait(amountOfTimeToWait);
    if (index <= text.length) {
      drawLetter();
    }
  }
  drawLetter();
}

document.querySelectorAll('[data-type]').forEach(draw);
