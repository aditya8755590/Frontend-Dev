const menu = { burger: 100, pizza: 200, fries: 80 };
function calculateBill(orderItems) {
    try {
        const prices = orderItems.map(item => {
            if (!menu[item]) throw new Error("Invalid item: " + item);
            return menu[item];
        });
        return prices.reduce((a, b) => a + b, 0);
    } catch (err) {
        console.log("Error:", err.message);
    }
}
console.log("Bill:", calculateBill(["burger", "pizza"]));
calculateBill(["burger", "icecream"]);