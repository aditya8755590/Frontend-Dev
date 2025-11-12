// ● Take a number x = 16.75.
// ● Display:
// ○ Rounded value (Math.round)
// ○ Square root (Math.sqrt)
// ○ Power (Math.pow(x, 3))
// ○ Random number between 10–50 (Math.floor(Math.random() * 41) +
// 10)

// ● Use template literals to show a formatted result summary.

let x = 16.75;

let roundedValue = Math.round(x);
let squareRoot = Math.sqrt(x);
let powerValue = Math.pow(x, 3);
let randomValue = Math.floor(Math.random() * x) + 10;

let resultSummary = `
Number Analysis for x = ${x}:
- Rounded Value: ${roundedValue}
- Square Root: ${squareRoot}
- Power (x^3): ${powerValue}
- Random Number : ${randomValue}
`;

console.log(resultSummary);