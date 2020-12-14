console.log(' It works ');
const terms = document.querySelector('.terms-and-conditions');
const acceptBtn = document.querySelector('.accept');

function observerCallback(payload) {
  console.log(payload);
  if (payload[0].intersectionRatio === 1) {
    console.log(terms.lastElementChild);
    acceptBtn.disabled = false;
    // eslint-disable-next-line no-use-before-define
    observer.unobserve(terms.lastElementChild);
  }
}

const observer = new IntersectionObserver(observerCallback, {
  root: terms,
  threshold: 1,
});

observer.observe(terms.lastElementChild);
