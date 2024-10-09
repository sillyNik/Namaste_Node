require("../xyz.js");

function calculateMultiply(a, b) {
    const result = a * b;
    
    console.log(result);
}

module.exports = calculateMultiply;

setTimeout(() => {
    console.log("setTimeout");
}, 3000);