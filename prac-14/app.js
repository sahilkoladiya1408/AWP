const fs = require("fs");

delete fs['writeFile'];

fs.writeFile = (file,data) => {
    console.log("The functionality has been overridden.");
    console.log(file);
    console.log(data);
}

module.exports = fs;

fs.writeFile("read.txt","This is a Practical-14.");