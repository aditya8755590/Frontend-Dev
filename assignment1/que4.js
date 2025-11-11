// A school system receives five subject marks for a student (out of 100).
// Your program must:
// ● Calculate the average and percentage
// ● Determine the grade:
// ○ 90–100 → A+
// ○ 75–89 → A
// ○ 60–74 → B
// ○ 40–59 → C
// ○ Below 40 → Fail
// ● If the student fails in two or more subjects, print “Repeat Year,” even if average ≥ 40.
let marks = [85, 92, 78, 65, 88]; // Example marks for five subjects
let totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
let average = totalMarks / marks.length;
let percentage = (totalMarks / (marks.length * 100)) * 100;
let grade;

if (average >= 90) {
    grade = "A+";
} else if (average >= 75) {
    grade = "A";
} else if (average >= 60) {
    grade = "B";
} else if (average >= 40) {
    grade = "C";
} else {
    grade = "Fail";
}

let failCount = marks.filter(mark => mark < 40).length;
let resultMessage = (failCount >= 2) ? "Repeat Year" : "Pass";

console.log("Average:", average);
console.log("Percentage:", percentage + "%");
console.log("Grade:", grade);
console.log("Result:", resultMessage);