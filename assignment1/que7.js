// A restaurant automatically calculates tips and taxes:
// ● Base food cost entered by user
// ● GST = 5% of base cost
// ● Service tax = 10% if dining in, otherwise 0%
// ● If total bill > ₹2000, add a recommended tip = 8%

// Calculate and display a full summary:
// 1. Base amount
// 2. Tax details
// 3. Tip amount
// 4. Final total (rounded to 2 decimals)

let baseCost = 2500; // base food cost
let isDiningIn = true; // true if dining in, false for takeout

let gst = 0.05 * baseCost;
let serviceTax = isDiningIn ? 0.10 * baseCost : 0;
let subtotal = baseCost + gst + serviceTax;

let tip = 0;
if (subtotal > 2000) {
    tip = 0.08 * subtotal;
}

let finalTotal = subtotal + tip;
finalTotal = finalTotal.toFixed(2);

console.log("Base Amount:", baseCost);
console.log("GST (5%):", gst);
console.log("Service Tax (10% if dining in):", serviceTax);
console.log("Tip (8% if total > ₹2000):", tip);
console.log("Final Total:", finalTotal);