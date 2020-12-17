// Arrows
const nums = [1, 2, 4, 5, 6, 864, 44];
nums.forEach((num) => console.log(num));

// Classes
class HelloWorld {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  printInFormat() {
    console.log(` The Value of a is ${this.a} and
    value of b is ${this.b}`);
  }
}

const classOb = new HelloWorld(10, 20);
classOb.printInFormat();

// Template String
console.log('To print a new line \n this is a way to do.');

// String Interpolation
console.log(`5*2 is ${5 * 2}`);

// Destructuring
const [a, b, c] = [1, 2, 3];
console.log(a, b, c);

// Spread Operator
const arr = [1, 2, 3, 4, 555, 666];
console.log(...arr);

// Rest Parameters
function restDemo(...args) {
  let sum = 0;
  // eslint-disable-next-line no-restricted-syntax
  for (const arg of args) sum += arg;
  return `The sum is ${sum}`;
}
console.log(restDemo(1, 2, 3, 4));

// Iterators
const str = 'hello';
const iter = str[Symbol.iterator]();
// eslint-disable-next-line no-constant-condition
while (true) {
  const res = iter.next();
  if (res.done) break;
  console.log(res.value);
}

// Generators
// function* logGenerator(i) {
//   while (i < 3) {
//     console.log(i++, yield);
//   }
// }
// const gen = logGenerator(0);
// gen.next();
// gen.next('Log started');
// gen.next('Log running');
// gen.next('Log ended');

// using yield
function* anotherGen(i) {
  yield i + 10;
  yield i + 30;
  yield i + 40;
}

function* funGen(i) {
  yield i;
  yield* anotherGen(i);
  yield i + 1;
}

const gen1 = funGen(1);
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());
