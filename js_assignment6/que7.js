// Q7 – The Lazy Loader: Promise Combinator Practice
// Run with: node que7.js

// Base versions (modified to sometimes reject):
function loadProfile() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.3) {
        return reject(new Error("Profile failed to load"));
      }
      resolve("Profile Loaded");
    }, 2000);
  });
}

function loadPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.3) {
        return reject(new Error("Posts failed to load"));
      }
      resolve("Posts Loaded");
    }, 1500);
  });
}

function loadMessages() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.3) {
        return reject(new Error("Messages failed to load"));
      }
      resolve("Messages Loaded");
    }, 1000);
  });
}

async function loadDashboard() {
  const start = Date.now();
  console.log("Dashboard loading started...");

  const promises = [loadProfile(), loadPosts(), loadMessages()];

  const results = await Promise.allSettled(promises);
  const end = Date.now();
  const totalTime = end - start;

  console.log("\nResults from Promise.allSettled():");

  const moduleNames = ["Profile", "Posts", "Messages"];

  results.forEach((result, index) => {
    const name = moduleNames[index];
    if (result.status === "fulfilled") {
      console.log(name + " -> SUCCESS:", result.value);
    } else {
      console.log(name + " -> FAILURE:", result.reason.message);
    }
  });

  console.log("\nTotal time taken:", totalTime + "ms");
}

loadDashboard();
