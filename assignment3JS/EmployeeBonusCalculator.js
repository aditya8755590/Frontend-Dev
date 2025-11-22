"use strict";

const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" },
  {}
];

for (let emp of employees) {
  try {
    // Task 1: Convert salary & years into numbers
    const salary = Number(emp.salary);
    const years = Number(emp.years);

    if (Number.isNaN(salary) || Number.isNaN(years)) {
      throw new Error(`Invalid numeric conversion for ${emp.name}`);
    }

    // Task 2: Calculate bonus
    const bonus = years > 3 ? salary * 0.1 : salary * 0.05;

    // Task 4: Print formatted details using template strings
    console.log(`
Employee: ${emp.name}
Salary: ₹${salary}
Years of Experience: ${years}
Bonus: ₹${bonus}
    `);

  } catch (error) {
    // Task 5: Handle errors gracefully
    console.error(`Error processing employee data: ${error.message}`);
  }
}