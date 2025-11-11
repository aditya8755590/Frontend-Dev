// In a video game:
// ● Players earn coins based on level and performance score.
// Formula:
// coins = (level * 50) + (performanceScore * 10)
// ● If the player completes all missions (missionsCompleted === true), double the
// coins.
// ● If coins exceed 1000, assign rank = "Elite" else "Regular".

// Print all values neatly with descriptive messages.
let level = 12;
let performanceScore = 30;
let missionsCompleted = true;

let coins = (level * 50) + (performanceScore * 10);

if (missionsCompleted) {
    coins *= 2;
}

let rank = coins > 1000 ? "Elite" : "Regular";

console.log("Player Level:", level);
console.log("Performance Score:", performanceScore);
console.log("Missions Completed:", missionsCompleted);
console.log("Total Coins Earned:", coins);
console.log("Player Rank:", rank);
