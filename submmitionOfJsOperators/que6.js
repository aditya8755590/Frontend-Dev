// A review system must analyze comments for positivity and length.
// Requirements:
// ● Store a feedback string like "Great product! Fast delivery and amazing
// sound quality!".
// ● Use string methods to:
// ○ Count words
// ○ Check if the feedback includes "bad" or "poor"
// ○ If not → print "Positive Feedback"
// ○ Else → "Needs Improvement"
// ● Use includes(), split(), and conditional statements.
let feedback = "Great product! Fast delivery and amazing sound quality but price wise it is not worth it. so overall poor experience.";

// Count words
let wordCount = feedback.split(" ").length;
console.log("Word Count:", wordCount);

// Check for negative words
if (feedback.includes("bad") || feedback.includes("poor")) {
    console.log("Needs Improvement");
} else {
    console.log("Positive Feedback");
}   