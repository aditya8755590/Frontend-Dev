// Q2. String Manipulation Report
// An e-commerce site wants a script that formats product titles properly before display.
// Requirements:
// ● Store a product name like " wireless headphones PRO ".
// ● Trim extra spaces, convert to lowercase, then capitalize the first letter of each word.
// ● Replace "pro" with "Pro Edition".
// ● Display the cleaned title and its length.
// ● Use methods: trim(), split(), map(), join(), replace(), and length.

let productName = " wireless headPHOnes PRO ";

// for trim
productName = productName.trim();

// Convert to lowercase
productName = productName.toLowerCase();

// Capitalize the first letter of each word
productName = productName.split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
}).join(' ');

// Replace "pro" with "Pro Edition"
productName = productName.replace("Pro", "Pro Edition");

//  Display the cleaned title and its length
console.log("Cleaned Product Title:", productName);
console.log("Length of Product Title:", productName.length);    