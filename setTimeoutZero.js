console.log("Hello World");

var a = 1078698;
var b = 20986;

// This callback will only be pushed to call stack in v8 once the call stack is empty.
setTimeout(() => {
    console.log("call me ASAP");
}, 0);

setTimeout(() => {
    console.log("call me 3 seconds");
}, 3000);
 
function multiplyFn(x, y){
    const result = x * y;
    return result;
}

var c = multiplyFn(a, b);
console.log("Multiplication result is: ", c);