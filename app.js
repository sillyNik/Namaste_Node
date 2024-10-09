require("./xyz.js");    //  one module into another

const util = require("node:util");

const {calculateMultiply, calculateSum} = require("./calculate");

const data = require("./data.json");

console.log(JSON.stringify(data));

var name = "Namaste NodeJS";

var a = 10;

var b = 20;

// var x = 100;

calculateSum(a, b);
calculateMultiply(a, b);

// console.log(x) ;