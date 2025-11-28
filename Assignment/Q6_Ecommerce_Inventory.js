const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 2 },
    { id: 2, name: "Phone", category: "Electronics", price: 20000, stock: 10 },
    { id: 3, name: "Shirt", category: "Clothes", price: 800, stock: 3 }
];
function getLowStockProducts() {
    return products.filter(p => p.stock < 5);
}
function sortProductsByPrice() {
    return products.slice().sort((a, b) => a.price - b.price);
}
function calculateTotalInventoryValue() {
    return products.reduce((acc, p) => acc + (p.price * p.stock), 0);
}
function groupByCategory() {
    return products.reduce((grp, p) => {
        if (!grp[p.category]) grp[p.category] = [];
        grp[p.category].push(p);
        return grp;
    }, {});
}
console.log(getLowStockProducts());
console.log(sortProductsByPrice());
console.log(calculateTotalInventoryValue());
console.log(groupByCategory());