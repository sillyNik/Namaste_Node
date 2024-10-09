const crypto = require("node:crypto");

console.log("Hello World");

var a = 1078698;
var b = 20986;

// pbkdf2  => Password Base Key Derivative Function

//Synchronous Function - WILL BLOCK THE MAIN THREAD - DON'T USE IT
console.log("==============");
crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");
console.log("First key generated.")

setTimeout(() => {
    console.log("call me right now !!!!!");
}, 0); // it will only be called once call stack of main thread is empty.

// Async Function
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err,key) =>{
    console.log("Second key generated");
});


function multiplyFn(x, y){
    const result = x * y;
    return result;
}

var c = multiplyFn(a, b);
console.log("Multiplication result is: ", c);