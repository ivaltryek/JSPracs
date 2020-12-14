const cardButtons = document.querySelectorAll('.card button');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

// when a button is clicked, grab the data we want for the modal and open it
function handleCardButtonClick(event) {
  const button = event.currentTarget;
  const card = button.closest('.card');
  const imgSrc = card.querySelector('img').src;
  const desc = card.dataset.description;
  const name = card.querySelector('h2').textContent;

  modalInner.innerHTML = `
    <img width="600" height="600" src="${imgSrc.replace(
    '200',
    '600'
  )}" alt="${name}">
    <p>${desc}</p>
`;

  modalOuter.classList.add('open');
  console.log(modalInner);
}

function closeModal() {
  modalOuter.classList.remove('open');
}

cardButtons.forEach((button) => button.addEventListener('click', handleCardButtonClick));

modalOuter.addEventListener('click', (event) => {
  const isOutside = !event.target.closest('.modal-inner');
  if (isOutside) {
    closeModal();
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
});
