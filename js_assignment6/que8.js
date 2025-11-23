// Q8 – Order Processing Flow: Async Retry Mechanism
// Run with: node que8.js

// submitOrder() fails 50% of the time
function submitOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() >= 0.5;
      if (success) {
        resolve("Order ID #" + Math.floor(Math.random() * 10000));
      } else {
        reject(new Error("Random API failure while submitting order."));
      }
    }, 500);
  });
}

async function processOrder(maxAttempts = 3) {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const result = await submitOrder();
      console.log(`Attempt ${attempt}: Success ->`, result);
      return result; // Exit once successful
    } catch (error) {
      console.log(`Attempt ${attempt}: Failed -> ${error.message}`);
      if (attempt === maxAttempts) {
        // If this was the last attempt, rethrow
        throw new Error("Order could not be processed");
      }
    }
  }
}

// Top-level runner
(async function run() {
  try {
    console.log("Processing order with retry logic...");
    const finalResult = await processOrder();
    console.log("Final Result:", finalResult);
  } catch (error) {
    console.error("Final Error:", error.message);
  }
})();
