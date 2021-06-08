//Evaluate these:
//#1

console.log("[2] === [2]", [2] === [2]);
console.log("{} === {}", {} === {});

//#2 what is the value of property a for each object.
const object1 = { a: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { a: 5 };
object1.a = 4;

console.log("objects 1-4", object1, object2, object3, object4);
object1.a = 4;
console.log("objects 1.a=4", object1, object2, object3, object4);

//#3 create two classes: an Animal class and a Mamal class.
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color.

class Animal {
  constructor(name, type, color) {
    (this.name = name), (this.type = type), (this.color = color);
  }
  sound() {
    console.log("im an animal");
  }
}

class Mammal extends Animal {
  constructor(name, type, color, sound) {
    super(name, type, color);
    this.sound = sound;
  }
  soundB() {
    console.log(`${this.sound}, i'm ${this.name}`);
    console.log(this.type);
  }
}

const cow = new Mammal("Shelly", "cow", "brown", "Mooooh");
console.log(cow.soundB());
