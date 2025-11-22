const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

let validNumbers = [];
let invalidNumbers = [];

for (let i = 0; i < apiData.length; i++) {
    const value = apiData[i];

    const num = Number(value);
    const bool = Boolean(value);
    const str = String(value);
    
    console.log(`Index ${i}`);
    console.log("  Number:", num);
    console.log("  Boolean:", bool);
    console.log("  String:", str);
    if (!Number.isNaN(num)) {
        validNumbers.push(num);
    } else {
        invalidNumbers.push(value);
    }

    console.log("");
}

console.log("Valid Numeric Data:", validNumbers);
console.log("Invalid Numeric Entries:", invalidNumbers);