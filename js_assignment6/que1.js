// Q1 – The Startup Morning: Async Coffee Maker
// Run with: node que1.js

// Helper to create random delay between 1000–2000 ms
function randomDelay() {
  return 1000 + Math.floor(Math.random() * 1000);
}

// Each step returns a Promise and may randomly fail
function boilWater() {
  return new Promise((resolve, reject) => {
    console.log("Boiling water...");
    setTimeout(() => {
      if (Math.random() < 0.2) {
        return reject(new Error("Kettle malfunctioned while boiling water."));
      }
      console.log("Water boiled.");
      resolve("hot water");
    }, randomDelay());
  });
}

function brewCoffee(hotWater) {
  return new Promise((resolve, reject) => {
    console.log("Brewing coffee with", hotWater + "...");
    setTimeout(() => {
      if (Math.random() < 0.2) {
        return reject(new Error("Coffee machine got jammed while brewing."));
      }
      console.log("Coffee brewed.");
      resolve("brewed coffee");
    }, randomDelay());
  });
}

function pourIntoCup(coffee) {
  return new Promise((resolve, reject) => {
    console.log("Pouring", coffee, "into cup...");
    setTimeout(() => {
      if (Math.random() < 0.2) {
        return reject(new Error("Cup slipped while pouring coffee."));
      }
      console.log("Coffee poured into cup.");
      resolve("cup of coffee");
    }, randomDelay());
  });
}

// Promise chaining to simulate the process
boilWater()
  .then(brewCoffee)
  .then(pourIntoCup)
  .then((finalCup) => {
    console.log("Coffee ready for the team!", "Here is your", finalCup);
  })
  .catch((error) => {
    console.error("Coffee process failed:", error.message);
  });
