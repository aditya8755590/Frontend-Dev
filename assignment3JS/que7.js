"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

function compute(op, a, b) {
  switch (op) {
    case "add":
      return a + b;

    case "subtract":
      return a - b;

    case "divide":
      if (b === 0) {
        throw new Error("Cannot divide by zero");
      }
      return a / b;

    case "power":
      return a ** b;

    case "root":
      if (a < 0) {
        throw new Error("Cannot take root of negative number");
      }
      return Math.sqrt(a);

    default:
      throw new Error("InvalidOperationError");
  }
}

for (let op of operations) {
  try {
    const result = compute(op, num1, num2);
    console.log(`Operation: ${op} → Result: ${result}`);
  } catch (e) {
    console.log(`Operation: ${op} → ERROR: ${e.message}`);
  }
}