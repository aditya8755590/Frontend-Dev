// A company’s payroll script has variables defined in multiple scopes.
// You must correct the logic using proper variable scoping.
// Requirements:
// ● Declare a global variable bonus = 5000.
// ● Inside a function calculateSalary(), declare a local variable salary = 40000.
// ● Add the bonus only if a local variable isPermanent (boolean) is true.
// ● Print total salary inside the function.
// ● Demonstrate how changing isPermanent affects the global variable scope.

let bonus = 5000; // Global variable

function calculateSalary(isPermanent) {
    let salary = 40000; // Local variable
    let totalSalary;

    if (isPermanent) {
        totalSalary = salary + bonus;
    } else {
        totalSalary = salary;
    }

    console.log("Total Salary:", totalSalary);
}

// Test the function with different isPermanent values
calculateSalary(true);  // Permanent employee
calculateSalary(false); // Temporary employee