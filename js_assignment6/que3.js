// Q3 – Bug Tracker: Callback to Promise Migration
// Run with: node que3.js

// Original callback-based function (for reference):
// function fetchBugs(callback) {
//   setTimeout(() => callback(["UI glitch", "API timeout", "Login failure"]), 1000);
// }

// New Promise-based version:
function getBugs() {
  return new Promise((resolve, reject) => {
    console.log("Fetching bugs from server...");
    setTimeout(() => {
      const apiFailed = Math.random() < 0.3; // 30% chance of failure
      if (apiFailed) {
        return reject(new Error("Failed to fetch bugs from server."));
      }
      const bugs = ["UI glitch", "API timeout", "Login failure"];
      resolve(bugs);
    }, 1000);
  });
}

// Use the Promise version
getBugs()
  .then((bugs) => {
    console.log("Bugs fetched successfully:");
    // console.table prints each bug as a row in a table for readability.
    console.table(bugs);
  })
  .catch((error) => {
    console.error("Error while fetching bugs:", error.message);
  });
