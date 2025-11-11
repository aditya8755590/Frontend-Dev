// In a movie theatre:
// ● Morning show tickets cost ₹120
// ● Evening show costs ₹180
// ● Students get a 10% discount, and seniors (age > 60) get 20% off
// ● If the user books more than 3 tickets, add a flat ₹50 service fee

// Write a script that calculates and displays:
// ● Base price
// ● Discounted total
// ● Final amount (after service fee if any)
let showTime = "evening"; // "morning" or "evening"
let isStudent = true;
let age = 22;
let numberOfTickets = 4;

let basePrice = 0;
if (showTime === "morning") {
    basePrice = 120 * numberOfTickets;
} else if (showTime === "evening") {
    basePrice = 180 * numberOfTickets;
}

let discount = 0;
if (isStudent) {
    discount = 0.10 * basePrice;
} else if (age > 60) {
    discount = 0.20 * basePrice;
}

let discountedTotal = basePrice - discount;

let serviceFee = 0;
if (numberOfTickets > 3) {
    serviceFee = 50;
}

let finalAmount = discountedTotal + serviceFee;

console.log("Base Price:", basePrice);
console.log("Discounted Total:", discountedTotal);
console.log("Final Amount:", finalAmount);  