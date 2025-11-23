// Q9 – Debugging the Event Loop
// Run with: node que9.js

/*
Predicted output order:

1. "Script start"       -> synchronous
2. "Script end"         -> synchronous
3. "Promise callback"   -> microtask (Promise.then)
4. "Timeout callback"   -> macrotask (setTimeout callback)

// Expected console:
Script start
Script end
Promise callback
Timeout callback
*/

console.log("Script start");

setTimeout(() => console.log("Timeout callback"), 0);

Promise.resolve().then(() => console.log("Promise callback"));

console.log("Script end");

/*
Explanation:

- JavaScript first runs all synchronous code from top to bottom.
- "Script start" logs first, then "Script end".
- Next, the engine processes the microtask queue (Promises, etc.).
  So "Promise callback" is logged.
- Finally, it processes the macrotask queue (setTimeout, etc.),
  so "Timeout callback" appears last.

This confirms that microtasks (Promises) always run before
macrotasks (setTimeout) once the current call stack is empty.
*/
