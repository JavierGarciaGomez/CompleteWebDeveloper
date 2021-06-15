// 242 Promises

const { resolve } = require("node:path");

// three states: rejected, fulfilled, pending
const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("stuff worked");
  } else {
    reject("error, it broke");
  }
});

promise.then((result) => {
  console.log(result);
});
