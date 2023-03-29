const url = require("url");

const address = "https://nodejs.org/en";

const object = url.parse(address, true);
console.log(object);