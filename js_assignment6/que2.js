// Q2 – Task Scheduler: Micro vs Macro Challenge
// Run with: node que2.js

/*
Expected order (conceptually):

1. "Start"            -> synchronous, runs immediately
2. "Synchronous log"  -> another normal synchronous log
3. "End"              -> last synchronous log
4. "Promise.then..."  -> microtask queue (runs after current call stack, before macrotasks)
5. "setTimeout..."    -> macrotask queue (runs after microtasks)

So final console output order should be:
Start
Synchronous log
End
Promise.then callback (microtask)
setTimeout callback (macrotask)
*/

console.log("Start");

setTimeout(() => {
  console.log("setTimeout callback (macrotask)");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("Promise.then callback (microtask)");
  });

console.log("Synchronous log");

console.log("End");

/*
Explanation:

JavaScript executes all synchronous code first (the main call stack).
After that, it checks the microtask queue (Promises, queueMicrotask, etc.)
and runs all microtasks before moving on to the macrotask queue
(setTimeout, setInterval, I/O callbacks).

That is why the Promise.then callback (microtask) runs before the
setTimeout callback (macrotask), even when setTimeout has 0 ms delay.
*/
