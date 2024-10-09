const fs = require("fs");
const https = require("https");

console.log("Hello World");

var a = 1078698;
var b = 20986;

// Synchronous
fs.readFileSync("./file.txt", "utf8");
console.log("This will only run after file read.");   //  ==> Blocking IO

https.get("https://dummyjson.com/products/1", (res) => {
    console.log("Fetched Data Successfully");
});

setTimeout(() => {
    console.log("setTimeout called after 5 seconds");
}, 5000);

// Async Function
fs.readFile("./file.txt", "utf8", (err, data) => {
    console.log("File Data: ", data);
});

function multiplyFn(x, y){
    const results = a * b;
    return results;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is: ", c);