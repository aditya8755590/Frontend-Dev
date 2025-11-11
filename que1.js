// You are building a delivery time estimator for an online shopping site.
// A customer’s delivery time depends on these rules:
// ● If the order is below ₹500, add a ₹50 delivery fee.
// ● If the user is a premium member, the delivery fee is waived.
// ● Delivery time is 3 days normally, but if the address is marked “remote,” add 2 extra
// days.

// Write a program that takes:
// let orderAmount, isPremium, isRemote;

// and prints both:
// ● the total cost (including delivery fee if applicable), and
// ● the estimated delivery time.

let orderAmount = 600;
let isPremium = false;
let isRemote = true;

let deliveryFee = 0;
let deliveryTime = 3;

if (orderAmount < 500) {
    deliveryFee = 50;
}

if (isPremium) {
    deliveryFee = 0;
}

if (isRemote) {
    deliveryTime += 2;
}

let totalCost = orderAmount + deliveryFee;

console.log("Total Cost:", totalCost);
console.log("Estimated Delivery Time:", deliveryTime, "days");