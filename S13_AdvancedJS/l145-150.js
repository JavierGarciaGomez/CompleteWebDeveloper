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

console.log("*******L148 Exercise 3*********");

console.log("*******L149 Advanced Functions *********");

const first = (name = "anonymous") => {
  const greet = `Hello ${name}`;
  const second = () => {
    console.log(greet);
  };
  return second;
};

const newFunc = first();
newFunc();

console.log("+++++Closure++++++");

const firstF = () => {
  const greet = "Hi";
  const second = () => {
    console.log(greet);
  };
  return second;
};

// even that greet is in not in the scope of newerFunc or even in the second, its goint to be saved and use it

// Closure: a function ran, the function is executed. It's never going to be executed agai, but it's going to remeber the references to those variable, so the child scope always has access to the parent scope.

const newerFunc = firstF();
newerFunc();

console.log("+++++Currying++++++");
const multyply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
// the second parameter is the function of the function
let result = curriedMultiply(4)(9);
console.log(result);

const multiplyBy5 = curriedMultiply(5);

result = multiplyBy5(9);
console.log(result);

console.log("+++++Compose++++++");
const compose = (f, g) => (a) => f(g(a));
const addOne = (num) => num + 1;
// f and g is addOne, a is 5. So is something like addOne(addOne(5))
result = compose(addOne, addOne)(5);

console.log(result);

// Avoiding side effects, functional purity

console.log("*******L151 Advanced Arrays *********");
const array = [1, 2, 3, 4];
const emptyArray = [];
console.log("+++++forEach++++++");
const newArray = array.forEach((element) => {
  emptyArray.push(element * 2);
});

console.log(array);
console.log(emptyArray);

console.log("+++++map++++++");

const mapArray = array.map((num) => num * 3);

console.log(mapArray);

console.log("+++++filter++++++");
const filteredArray = array.filter((num) => num % 2 === 0);
console.log(filteredArray);

console.log("+++++reduce++++++");
const reducedArray = array.reduce((acc, num) => acc * num);
console.log(reducedArray);

console.log("*******L152 Advanced Objects *********");
console.log("++++++Reference type+++++++");
const testArray = [1, 2];
const testArray2 = [1, 2];

const testObject = { value: 10 };
const testObject2 = { value: 20 };
const testObject3 = testObject;

console.log(testArray === testArray2);
console.log(testObject === testObject2);

console.log("testObject === testObject3");

console.log("++++++Context+++++++");
console.log(
  "context tell us were we are: 'THIS'. This is the object environment right now"
);
console.log(this);

const testObject4 = {
  name: "testObject",
  printThis() {
    console.log(this);
  },
};

testObject4.printThis();

console.log("++++++Instantiation+++++++");
console.log("a copy of the object and reuse the code");
class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi, I'm ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
  }
  play() {
    console.log(`WEEEE I'm a ${this.type}, and my name is ${this.name}`);
  }
}

const player1 = new Player("john", "sorcerer");
console.log(player1.introduce());

const player2 = new Wizard("jim", "healer");
player2.play();

console.log("*******L155 Passed by reference and passed by value *********");
let numx = 5;
let numy = 6;
numy++;
console.log(numx);
console.log(numy);

let obj1 = { name: "Yao", pass: "pass" };
let obj2 = obj1;
let obj3 = Object.assign({}, obj1);

obj2.pass = "changedPass";
obj3.pass = "anotherPass";

console.log(obj1, obj2, obj3);
// password is changed in both, because is the same object and the parameter is passed by reference

console.log("*******L156 Type Coertion *********");
console.log('"1" == 1', 1 == "1");
console.log('"1" === 1', 1 === "1");

console.log("*******L158 ES7 *********");
console.log("++++++includes()+++++++");
console.log('Hello.includes("o")', "Hello".includes("o"));
let pets = ["cat", "dog", "bat"];
console.log("pets array", pets);
console.log('pets.includes("bat")', pets.includes("bat"));

console.log("++++++exponential operator+++++++");
console.log("4**3", 4 ** 3);

console.log("*******L160 ES8 *********");
console.log("++++++.padStart(10), .padEnd(10)+++++++");
console.log("padStart", "text".padStart(10) + ".");
console.log("padEnd", "text".padEnd(10) + ".");

console.log("++++++Object.values, Object.entries+++++++");

let obja = {
  key1: "user1",
  key2: "user2",
  key3: "user3",
};

Object.keys(obja).forEach((key, index) =>
  console.log("key, obj", key, obja[key])
);

Object.values(obja).forEach((value) => console.log(value));

Object.entries(obja).forEach((value) => console.log(value));

console.log("*******L163 ES10 *********");
console.log("++++flat()+++++");

const flatArray = [1, 2, [4, 5, [2, 4], 2], 4];
console.log(flatArray.flat(2));

console.log("++++trimStart(), trimEnd()+++++");

console.log("*******L165 Advanced loops *********");
console.log("++++for of loop+++++");
const basket = ["apple", "banana", "orange"];
for (item of basket) {
  console.log(item);
}

console.log("++++for in loop+++++");

const detailedBasket = {
  apple: 5,
  orange: 3,
  grape: 2,
};

for (fruit in detailedBasket) {
  console.log(fruit.value);
}

console.log("*******L167 ES11 *********");
console.log("++++ BigInt ++++");
console.log("typeof 4", typeof 4);
console.log(
  "typeof 44444444444444444444444444444444444444444444444444444444444444444444444444444444444444n",
  typeof 44444444444444444444444444444444444444444444444444444444444444444444444444444444444444n
);

console.log("Number.MAX_SAFE_INTEGER", Number.MAX_SAFE_INTEGER);
console.log("++++ Optional Coalescing Operator ++++");
let will_pokemon = {
  pikachu: {
    species: "Mouse",
    height: 0.4,
  },
};

let john_pokemon = {
  raichu: {
    species: "mouse",
    height: 0.8,
    power: "lightning",
  },
};

console.log(will_pokemon);
console.log(john_pokemon);

console.log("coalescent", will_pokemon.pikachu?.height);
console.log("coalescent", john_pokemon.pikachu?.height);

console.log("++++ Nullish Coalescing Operator ++++");

console.log("++++ Promise.allSettled ++++");
console.log("++++ glbalThis ++++");

console.log("*******L171 Debugging *********");
