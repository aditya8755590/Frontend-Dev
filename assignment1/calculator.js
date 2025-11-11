
console.log("Calculator module loaded.");
let a=10;
let b=5;

console.log("sum");
console.log(add(a, b));
console.log("difference");
console.log(subtract(a, b));
console.log("product");
console.log(multiply(a, b));
console.log("quotient");
console.log(divide(a, b));

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}

export function divide(a, b) {
    if (b === 0) {
        console.error("Division by zero error");
        return null;
    }
    return a / b;
}