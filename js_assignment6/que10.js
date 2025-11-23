// Q10 – The Final Delivery: Async Pipeline Debugger
// Run with: node que10.js

// We will simulate an asynchronous food delivery pipeline:
// 1. acceptOrder  -> order is received
// 2. prepareFood  -> restaurant prepares the food
// 3. pickUpOrder  -> delivery partner picks up the order
// 4. startDelivery-> order is out for delivery
// 5. completeDelivery -> order delivered to customer

// Helper to create a delay with logging and optional failure
function step(name, min = 500, max = 1500) {
  const delay = min + Math.floor(Math.random() * (max - min));
  return new Promise((resolve, reject) => {
    console.log(`[${new Date().toLocaleTimeString()}] ${name} started...`);
    setTimeout(() => {
      // ~20% chance to fail any step
      if (Math.random() < 0.2) {
        return reject(new Error(`${name} failed unexpectedly.`));
      }
      console.log(`[${new Date().toLocaleTimeString()}] ${name} completed after ${delay} ms.`);
      resolve(name + " done");
    }, delay);
  });
}

function acceptOrder() {
  return step("Order accepted");
}

function prepareFood() {
  return step("Food prepared");
}

function pickUpOrder() {
  return step("Order picked up by rider");
}

function startDelivery() {
  return step("Out for delivery");
}

function completeDelivery() {
  return step("Order delivered to customer");
}

// Async pipeline using async/await
async function runDeliveryPipeline() {
  console.log("Starting async delivery pipeline...\n");
  const startTime = Date.now();

  try {
    await acceptOrder();
    await prepareFood();
    await pickUpOrder();
    await startDelivery();
    await completeDelivery();

    const totalTime = Date.now() - startTime;
    console.log(`\nDelivery pipeline finished successfully in ${totalTime} ms.`);
  } catch (error) {
    const totalTime = Date.now() - startTime;
    console.error(`\nDelivery pipeline failed after ${totalTime} ms.`);
    console.error("Reason:", error.message);
  } finally {
    console.log("Pipeline run completed (success or failure).");
  }
}

runDeliveryPipeline();
