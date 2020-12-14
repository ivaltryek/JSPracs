const todoForm = document.querySelector('.todo');
const list = document.querySelector('.list');
let items = [];

function handleSubmit(e) {
  e.preventDefault();
  const name = e.currentTarget.item.value;
  console.log(name);
  // eslint-disable-next-line no-useless-return
  if (!name) return;
  const item = {
    name,
    id: Date.now(),
    complete: false,
  };
  items.push(item);
  e.target.reset();
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
  const html = items.map((item) => `
  <li class="todo-item">
  <input type="checkbox" value=${item.id} ${item.complete ? 'checked' : ''}>
  <span class="itemName">${item.name}</span>
  <button aria-label="Remove ${item.name}" value=${item.id}>&times;</button>
  </li>`)
    .join('');
  list.innerHTML = html;
}

function copyToLocalStorage() {
  localStorage.setItem('items', JSON.stringify(items));
}

function getDataFromLocalStorage() {
  const storageItems = JSON.parse(localStorage.getItem('items'));
  if (items.length) {
    items.push(...storageItems);
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
  }
}

function deleteTodo(id) {
  items = items.filter((item) => item.id !== id);
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markCompleteTodo(id) {
  const todo = items.find((item) => item.id === id);
  todo.complete = !todo.complete;
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

todoForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', copyToLocalStorage);
list.addEventListener('click', (e) => {
  const id = parseInt(e.target.value, 10);
  if (e.target.matches('button')) deleteTodo(id);
  if (e.target.matches('input[type="checkbox"]')) markCompleteTodo(id);
});

getDataFromLocalStorage();
