let draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.container');
const singleContainer = document.querySelector('.container');
let deleteBtns = document.querySelectorAll('.delete');
const items = document.querySelectorAll('.input');
let inputs = [...document.querySelectorAll('.draggable input')];
let used = document.querySelectorAll('.used');
const itemArr = [];
let uniques = [];

function reAssign() {
  draggables.forEach((d, i) => {
    console.log('removing dataset.num');
    d.firstElementChild.dataset.num = '';
    d.firstElementChild.dataset.num = i + 1;
    d.firstElementChild.setAttribute('placeholder', i + 1);
  });
}

setInterval(() => {
  draggables = document.querySelectorAll('.draggable');
  inputs = [...document.querySelectorAll('.draggable input')];
  deleteBtns = document.querySelectorAll('.delete');
  used = [...document.querySelectorAll('.used')];
  console.log('Used', ...used);
  reAssign();

  // console.log('Updated');
}, 1500);

console.log(items);

function removePlaceholders() {
  for (let i = 0; i <= draggables.length; i++) {
    console.log('removing placeholders');
    console.log(draggables);
    draggables[i].firstElementChild.removeAttribute('placeholder');
  }
}

function sortInputs() {
  inputs.forEach((inp) => {
    console.log(inp.dataset.num);
    inp.placeholder = inp.dataset.num;
  });
  for (let i = 0; i <= draggables.length; i++) {
    console.log('Adding placeholders');
    if (i === 0) {
      // draggables[i].textContent= '1';
      // draggables[i].firstElementChild.setAttribute('value', '1.');
      draggables[i].firstElementChild.setAttribute('placeholder', '1.');
      draggables[i].firstElementChild.dataset.num = '1';
    } else if (draggables[i] !== undefined) {
      // draggables[i].textContent = `${i + 1}`;
      // draggables[i].firstElementChild.setAttribute('value', `${i + 1}.`);
      draggables[i].firstElementChild.setAttribute('placeholder', `${i + 1}.`);
      draggables[i].firstElementChild.dataset.num = `${i + 1}`;
    }
  }

  // console.log('SortInput is done!');
}

function sortPriorities() {
  // eslint-disable-next-line no-restricted-syntax
  for (const i in items) {
    if (items[i].nodeType == 1) {
      itemArr.push(items[i]);
    }
  }
  uniques = [...new Set(itemArr)];
  // console.log(...uniques);
  // eslint-disable-next-line no-nested-ternary
  // uniques.sort((a, b) => (a.placeholder === b.placeholder ? 0
  //   : (a.placeholder > b.placeholder ? 1 : -1)));
  // for (let i = 0; i < uniques.length; i++) {
  //   singleContainer.appendChild(uniques[i]);
  // }
}
// Select the node that will be observed for mutations
// const targetNode = document.querySelector('.container');

// Options for the observer (which mutations to observe)
// const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
// const callback = (mutationsList, observer) => {
// Use traditional 'for loops' for IE 11
// eslint-disable-next-line no-restricted-syntax
//   for (const mutation of mutationsList) {
//     if (mutation.type === 'childList') {
//       console.log('A child node has been added or removed.');
//       sortInputs();
//     } else if (mutation.type === 'attributes') {
//       console.log(`The ${mutation.attributeName} attribute was modified.`);
//       // setTimeout(() => sortInputs(), 2000);
//     }
//   }
// };

// const observer = new MutationObserver(callback).observe(targetNode, config);

// Start observing the target node for configured mutations

// console.log(draggables[0].firstElementChild);
draggables.forEach((draggable) => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging');
  });

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging');
  });
});

function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if (offset < 0 && offset > closest.offset) {
      return { offset, element: child };
    }
    return closest;
  }, { offset: Number.NEGATIVE_INFINITY }).element;
}

containers.forEach((container) => {
  container.addEventListener('dragover', (e) => {
    let afterElementPlaceholder;
    e.preventDefault();
    const afterElement = getDragAfterElement(container, e.clientY);
    console.log('after element', afterElement);
    const draggable = document.querySelector('.dragging');

    if (afterElement !== undefined) {
      afterElementPlaceholder = afterElement.firstElementChild.value;
    }
    // eslint-disable-next-line prefer-const
    let draggablePlaceholder = draggable.firstElementChild.value;

    // const tempHolder = afterElementPlaceholder;
    // afterElementPlaceholder = draggablePlaceholder;
    // draggablePlaceholder = tempHolder;

    // console.log(afterElement.firstElementChild.placeholder);
    // console.log(draggable.firstElementChild.placeholder);

    // const draggableClone = draggable.cloneNode(true);
    // const afterElementClone = afterElement.cloneNode(true);
    // draggableClone.firstElementChild.placeholder = afterElement.firstElementChild.placeholder;
    // afterElementClone.firstElementChild.placeholder = draggable.firstElementChild.placeholder;
    if (afterElement !== undefined) {
      afterElement.firstElementChild.placeholder = draggablePlaceholder;
    }
    draggable.firstElementChild.placeholder = afterElementPlaceholder;
    console.log(draggable.firstElementChild.placeholder);

    if (afterElement == null) {
      container.appendChild(draggable);
    } else {
      container.insertBefore(draggable, afterElement);
    }
    sortInputs();
  });
});

function deleteItem(e) {
  const clickedBtn = e.currentTarget;
  console.log(clickedBtn);
  const data = clickedBtn.closest('.draggable');
  const drags = document.querySelectorAll('.draggable');
  if (drags.length > 5) {
    clickedBtn.closest('.draggable').remove();
    sortInputs();
  } else {
    data.firstElementChild.value = '';
  }
}

function disableOtherItems(e) {
  const mouseentered = e.currentTarget;
  // const drags = document.querySelectorAll('.draggable');

  // console.log(mouseentered);
  // console.log('drag clicked');
  for (let i = 0; i < draggables.length; i++) {
    if (draggables[i] !== mouseentered) {
      draggables[i].firstElementChild.disabled = true;
    } else {
      console.log(draggables[i].firstElementChild);
      draggables[i].firstElementChild.disabled = false;
    }
  }
}

function addSkillTextBox(e) {
  console.log(e.currentTarget.placeholder, 'event console');
  const p = document.createElement('p');
  p.classList.add('draggable');
  p.draggable = true;
  const skillTextBox = `
      <input class="input" type="text" data-num="" placeholder="" />
      <button class="delete">&times;</button>
  `;
  p.innerHTML = skillTextBox;
  inputs.filter((val) => {
    // if (val.placeholder % 3 === 0) {
    //   // if (e.currentTarget.placeholder === i + 1) {
    //   //   console.log('3rd clicked');
    //   // }
    // }
    // draggables.forEach((d, i) => {
    //   console.log('removing dataset.num');
    //   d.firstElementChild.dataset.num = i;
    // });
    if (val.placeholder % 3 === 0 && e.currentTarget.placeholder === val.placeholder) {
      console.log(val);
      console.log('valplaceholder', val.placeholder);
      singleContainer.insertAdjacentElement('beforeend', p);
      val.classList.add('used');
      // removePlaceholders();
      sortInputs();
    }
  });
}

setInterval(() => {
  draggables.forEach((draggable) => {
    draggable.addEventListener('mouseenter', disableOtherItems);
  });

  inputs.forEach((input) => {
    input.addEventListener('focusin', addSkillTextBox, true);
  });

  deleteBtns.forEach((deleteBtn) => {
    deleteBtn.addEventListener('click', deleteItem);
  });

  used.forEach((u) => {
    u.removeEventListener('focusin', addSkillTextBox, true);
  });
  // console.log('Updating listneres');
}, 1500);

sortInputs();
