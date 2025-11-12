// Q10. Departmental Employee Evaluator
// You must evaluate employees from multiple departments based on performance points.
// Requirements:
// Create a nested array for departments:
// const departments = [
// ["HR", 72],
// ["Finance", 88],
// ["Tech", 95],
// ["Support", 63]
// ];
// ●
// ● Use loops and conditionals to print:
// ○ “Excellent” if score ≥ 90
// ○ “Good” if 75–89
// ○ “Average” if 60–74
// ○ “Needs Improvement” otherwise
// ● Use comparison operators and nested if-else conditions.
const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];

for (let i = 0; i < departments.length; i++) {
    let deptName = departments[i][0];
    let score = departments[i][1];
    let evaluation = "";

    if (score >= 90) {
        evaluation = "Excellent";
    } else if (score >= 75 && score <= 89) {
        evaluation = "Good";
    } else if (score >= 60 && score <= 74) {
        evaluation = "Average";
    } else {
        evaluation = "Needs Improvement";
    }

    console.log(deptName + ": " + evaluation);
}   