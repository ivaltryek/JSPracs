const jokeBtn = document.querySelector('.getJoke');
const jokeBtnSpan = jokeBtn.querySelector('.jokeText');
const jokeHolder = document.querySelector('.joke p');
const loader = document.querySelector('.loader');
const apiUrl = 'https://icanhazdadjoke.com';
const btnText = [
  'Ugh.',
  'omg dad.',
  'you are the worst',
  'seriously',
  'stop it.',
  'please stop',
  'that was the worst one'
];

async function getJoke() {
  loader.classList.remove('hidden');
  const res = await fetch(`${apiUrl}`, {
    headers: {
      Accept: 'application/json',
    }
  });

  const data = await res.json();
  console.log(data);
  loader.classList.add('hidden');
  return data.joke;
}

function randomItemFromArray(arr, not) {
  const item = arr[Math.floor(Math.random() * arr.length)];
  if (item === not) {
    console.log('we used that one last time, look again');
    // eslint-disable-next-line no-unused-vars
    return randomItemFromArray(arr, not);
  }
  return item;
}


async function handleClick() {
  const joke = await getJoke();
  jokeHolder.textContent = joke;
  jokeBtnSpan.textContent = randomItemFromArray(
    btnText,
    jokeBtnSpan.textContent
  );
}

jokeBtn.addEventListener('click', handleClick);