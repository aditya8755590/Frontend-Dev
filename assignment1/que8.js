// A company distributes annual bonuses based on performance rating and experience:
// ● Rating 5 → 20% bonus
// ● Rating 4 → 15% bonus
// ● Rating 3 → 10% bonus
// ● Rating below 3 → no bonus
// If experience > 5 years, add an extra 5% bonus.
// If the base salary exceeds ₹1,00,000, cap the total bonus at ₹25,000.

// Write a program that calculates and prints:
// ● Calculated bonus
// ● Capped final bonus (if applicable)
// ● Total salary after bonus

let baseSalary = 120000; // base salary
let performanceRating = 5;
let yearsOfExperience = 6;

let bonusPercentage = 0;
if (performanceRating === 5) {
    bonusPercentage = 20;
} else if (performanceRating === 4) {
    bonusPercentage = 15;
} else if (performanceRating === 3) {
    bonusPercentage = 10;
}

if (yearsOfExperience > 5) {
    bonusPercentage += 5;
}

let calculatedBonus = (bonusPercentage / 100) * baseSalary;

let finalBonus = calculatedBonus;
if (baseSalary > 100000 && calculatedBonus > 25000) {
    finalBonus = 25000;
}

let totalSalary = baseSalary + finalBonus;

console.log("Calculated Bonus:", calculatedBonus);
console.log("Capped Final Bonus:", finalBonus);
console.log("Total Salary after Bonus:", totalSalary);  