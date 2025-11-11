// A shopping platform generates random discount coupons:

// ● Generate a random number between 1–100
// ● If number ≤ 30 → “You won a 10% discount”
// ● If 31–60 → “You won a 20% discount”
// ● If 61–90 → “You won a 30% discount”
// ● If 91–100 → “You won a 50% Mega Offer!”

// The program should print the coupon number and the reward message.
// Also, if the random number is a prime number, add a bonus message:
// “Prime number bonus applied”.

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let couponNumber = Math.floor(Math.random() * 100) + 1;
let discountMessage = "";

if (couponNumber <= 30) {
    discountMessage = "You won a 10% discount";
} else if (couponNumber <= 60) {
    discountMessage = "You won a 20% discount";
} else if (couponNumber <= 90) {
    discountMessage = "You won a 30% discount";
} else {
    discountMessage = "You won a 50% Mega Offer!";
}

console.log("Coupon Number:", couponNumber);
console.log(discountMessage);

if (isPrime(couponNumber)) {
    console.log("Prime number bonus applied");
} 