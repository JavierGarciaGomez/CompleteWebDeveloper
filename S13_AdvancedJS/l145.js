/* l145 advanced control flow */
console.log("*******L145 Advanced control flow*********");

function isUserValid(bool) {
  return bool ? "Valid user" : "not valid user";
}

console.log(isUserValid(true));
console.log(isUserValid(false));

// switch

console.log("*******L147 ES5 ES6*********");
//Babel
// const and let

const player = "bobby";
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
  wizardLevel = true;
}

console.log(player, experience, wizardLevel);

const obj = {
  player: "bobby",
  experience: 100,
  wizardLevel: false,
};

console.log(obj);

// Dynamic values
let nameX = "the name";

const objetc = {
  [nameX]: "john",
  [1 + 2]: "a number",
};

console.log(objetc);

const a = "Simon";
const b = true;
const c = {};

const anotherObj = {
  a,
  b,
  c,
};

console.log(anotherObj);

console.log("+++++Template Strings+++++++");

console.log(`Hello ${a}, are you fine: ${b}`);

console.log("+++++Default arguments+++++++");

function greet(name = "anonymous") {
  console.log(`Hello ${name}`);
}

greet("Javier");
greet();

console.log("+++++Symbols++++++");
let sym1 = Symbol();
let sym2 = Symbol("foo");
let sym3 = Symbol("foo");

console.log(sym1, sym2, sym3);
console.log(sym2 === sym3);

console.log("+++++Arrow functions++++++");

function add(num1, num2) {
  return num1 + num2;
}

const addArrow = (num1, num2) => num1 + num2;

console.log(addArrow(4, 4));
