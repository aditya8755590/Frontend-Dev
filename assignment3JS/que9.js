"use strict";

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const cleanData = [];

for (let i = 0; i < rawData.length; i++) {
  const line = rawData[i];

  try {
    const obj = JSON.parse(line); // Task 1

    // Task 2: check keys
    if (!("user" in obj) || !("age" in obj)) {
      console.log(`Line ${i + 1}: Missing user or age`);
      continue;
    }

    // Task 5: convert age to Number
    const ageNum = Number(obj.age);
    if (Number.isNaN(ageNum)) {
      console.log(`Line ${i + 1}: Age is not a valid number`);
      continue;
    }

    obj.age = ageNum;

    // filter under-18 (keep only >= 18)
    if (obj.age < 18) {
      console.log(`Line ${i + 1}: User under 18, filtered out`);
      continue;
    }

    cleanData.push(obj); // Task 3: push valid
  } catch (e) {
    // invalid JSON
    console.log(`Line ${i + 1}: Invalid JSON → ${e.message}`); // Task 3
  }
}

console.log("Clean data:", cleanData);