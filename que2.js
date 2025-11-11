// 2. The Banking Interest Calculator
// A bank offers the following interest rules:

// ● Savings account: 4% annual interest
// ● Fixed deposit: 6.5% annual interest
// ● If the user deposits more than ₹1,00,000, they get an extra 1% bonus interest

// Write a program that takes:
// let accountType, amount, years;

// and calculates:
// ● the final balance after the given years, using the formula
// total = amount * Math.pow((1 + rate/100), years)
// Print the total rounded to two decimals.

let accountType = "fixed deposit"; // "savings" or "fixed deposit"
let amount = 120000;
let years = 5;
let rate = 0;
if (accountType === "savings") {
    rate = 4;
} else if (accountType === "fixed deposit") {
    rate = 6.5;
}
if (amount > 100000) {
    rate += 1; // extra 1% bonus interest
}

let total = amount * Math.pow((1 + rate / 100), years);
total = total.toFixed(2);

console.log("Final Balance after", years, "years:", total);