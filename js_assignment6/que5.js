// Q5 – Frontend Rush: Avoiding Callback Hell
// Run with: node que5.js

// --------------- Version 1: Nested callbacks (Callback Hell) ---------------

function design(callback) {
  setTimeout(() => {
    console.log("Design stage completed.");
    callback(null, "design done");
  }, 1000);
}

function build(prev, callback) {
  setTimeout(() => {
    console.log("Build stage completed.");
    callback(null, "build done");
  }, 1000);
}

function test(prev, callback) {
  setTimeout(() => {
    console.log("Test stage completed.");
    callback(null, "test done");
  }, 1000);
}

function deploy(prev, callback) {
  setTimeout(() => {
    console.log("Deploy stage completed.");
    callback(null, "deploy done");
  }, 1000);
}

function celebrate(prev, callback) {
  setTimeout(() => {
    console.log("🎉 Celebrate: Release successful!");
    callback(null, "celebration done");
  }, 1000);
}

// This is what callback hell looks like: deeply nested and hard to read/maintain.
function runPipelineWithCallbacks() {
  console.log("Running pipeline with nested callbacks...");
  design((err, d) => {
    if (err) return console.error(err);
    build(d, (err, b) => {
      if (err) return console.error(err);
      test(b, (err, t) => {
        if (err) return console.error(err);
        deploy(t, (err, dep) => {
          if (err) return console.error(err);
          celebrate(dep, (err, c) => {
            if (err) return console.error(err);
            console.log("Callback-based pipeline finished.");
          });
        });
      });
    });
  });
}

// --------------- Version 2: async/await (cleaner) ---------------

// Wrap each stage into a Promise-returning function
function designAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Design stage completed (async/await).");
      resolve("design done");
    }, 1000);
  });
}

function buildAsync(prev) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Build stage completed (async/await).");
      resolve("build done");
    }, 1000);
  });
}

function testAsync(prev) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Test stage completed (async/await).");
      resolve("test done");
    }, 1000);
  });
}

function deployAsync(prev) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Deploy stage completed (async/await).");
      resolve("deploy done");
    }, 1000);
  });
}

function celebrateAsync(prev) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("🎉 Celebrate: Release successful! (async/await)");
      resolve("celebration done");
    }, 1000);
  });
}

async function runPipelineWithAsyncAwait() {
  console.log("\nRunning pipeline with async/await...");
  try {
    const d = await designAsync();
    const b = await buildAsync(d);
    const t = await testAsync(b);
    const dep = await deployAsync(t);
    await celebrateAsync(dep);
    console.log("Async/await-based pipeline finished.");
  } catch (error) {
    console.error("Pipeline failed:", error.message);
  }
}

// Why async/await improves readability?
// - Code looks like synchronous top-to-bottom logic.
// - No deep nesting; error handling is done in a single try/catch block.
// - Easier to modify or insert new steps without breaking indentation.

runPipelineWithCallbacks();
setTimeout(runPipelineWithAsyncAwait, 6000); // Run second pipeline after first finishes
