// Create an object and an array which we will use in our facebook exercise.

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
const user = {
  username: "jgg",
  password: "pass",
};

// 2. Create an array which contains the object you have made above and name the array "database".
const database = [user];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
const newsfeed = [
  {
    username: "Bobby",
    timeline: "So tired from all that learning!",
  },
  {
    username: "Sally",
    timeline: "Javascript is sooooo cool!",
  },
  {
    username: "Mitch",
    timeline: "Javascript is preeetyy cool!",
  },
];

const username = prompt("Username");
const password = prompt("Username");

function singIn(user, pass) {
  if (user === database[0].username && pass === database[0].password) {
    console.log("Welcome " + user);
  } else {
    console.log("Wrong user");
  }
}

singIn(username, password);
