// Q8. Dynamic Discount Evaluator
// A store gives discounts based on product categories and cart totals.
// Requirements:
// Use an array of objects:
// const cart = [
// { item: "Laptop", category: "electronics", price: 45000 },
// { item: "Shoes", category: "fashion", price: 2500 },
// { item: "Book", category: "education", price: 600 }
// ];
// ●
// ● If category = “electronics” → 10% discount
// ● If category = “fashion” → 5% discount
// ● If total cart value > 50000 → apply extra 5% overall discount.
// ● Use loops, conditionals, and reduce() to calculate the final total.
const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let total = 0;

for (let i = 0; i < cart.length; i++) {
    let discount = 0;
    if (cart[i].category === "electronics") {
        discount = 0.10; // 10% discount
    } else if (cart[i].category === "fashion") {
        discount = 0.05; // 5% discount
    }
    
    let discountedPrice = cart[i].price * (1 - discount);
    total += discountedPrice;
}

// Check for extra discount
if (total > 50000) {
    total *= 0.95; // Apply extra 5% discount
}

console.log("Final Total after discounts:", total);     