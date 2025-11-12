// Create a simple counter that increases or decreases based on simulated click events.
// Requirements:
// ● Use variables count = 0.
// ● Create two functions: increment() and decrement().
// ● Each function modifies count and logs the current value.
// ● Simulate “click” by calling these functions manually in code.
// ● Use a nested function to show function scope of count updates.

let count = 0;

function increment() {
    count++;
    console.log("Incremented:", count);
}

function decrement() {
    count--;
    console.log("Decremented:", count);
}

// Simulating clicks
increment();
increment();
decrement();

// Showing function scope
function showScope() {
    let innerCount = 0;
    function innerIncrement() {
        innerCount++;
        console.log("Inner Incremented:", innerCount);
    }
    innerIncrement();
}

showScope();
showScope();