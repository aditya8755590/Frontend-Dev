// Q4 – DevOps Delay: Async Timeout Race
// Run with: node que4.js

function serverA() {
  return new Promise((resolve, reject) => {
    console.log("Server A deployment started...");
    setTimeout(() => {
      if (Math.random() < 0.3) {
        return reject(new Error("Server A deployment failed."));
      }
      resolve("Server A deployment completed.");
    }, 2000);
  });
}

function serverB() {
  return new Promise((resolve, reject) => {
    console.log("Server B deployment started...");
    setTimeout(() => {
      if (Math.random() < 0.3) {
        return reject(new Error("Server B deployment failed."));
      }
      resolve("Server B deployment completed.");
    }, 3000);
  });
}

function runDeployment() {
  // Create fresh promises for each run
  const a = serverA();
  const b = serverB();

  // Promise.all waits for both servers to complete
  Promise.all([a, b])
    .then((messages) => {
      console.log("Deployment completed for all servers.");
      console.log(messages);
    })
    .catch((error) => {
      console.error("Deployment failed:", error.message);
    });

  // Promise.race picks the first server that resolves/rejects
  Promise.race([a, b])
    .then((fastest) => {
      console.log("Fastest response:", fastest);
    })
    .catch((error) => {
      console.error("Fastest response error:", error.message);
    });
}

runDeployment();
