// A library charges fines based on delay:
// ● 1–5 days → ₹10 per day
// ● 6–10 days → ₹20 per day
// ● 11+ days → ₹50 per day
// If the user has more than 3 delayed returns, apply an additional ₹200 penalty.

// Use conditionals and loops to calculate total fine for a user with multiple late books, and display
// a detailed fine summary.
let delayedReturns = [4, 7, 12, 2]; // days delayed for each book
let totalFine = 0;

for (let days of delayedReturns) {
    let fine = 0;
    if (days >= 1 && days <= 5) {
        fine = days * 10;
    } else if (days >= 6 && days <= 10) {
        fine = days * 20;
    } else if (days >= 11) {
        fine = days * 50;
    }
    totalFine += fine;
    console.log(`Days Delayed: ${days}, Fine: ₹${fine}`);
}

if (delayedReturns.length > 3) {
    totalFine += 200; // additional penalty
    console.log("Additional Penalty for more than 3 delayed returns: ₹200");
}

console.log("Total Fine:", totalFine);