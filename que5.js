// Create a script that checks weather safety for outdoor events.
// Conditions:
// ● If temperature > 35°C and humidity > 70%, print “Cancel: Heat Alert.”
// ● If temperature < 10°C or windSpeed > 40 km/h, print “Cancel: Cold/Windy Alert.”
// ● Otherwise, print “Event Approved.”

// Then, based on temperature, show a message:
// ● Below 20°C → “Wear Jacket”
// ● 20–30°C → “Comfortable”
// ● Above 30°C → “Stay Hydrated”
let temperature = 36; // in °C
let humidity = 75;
let windSpeed = 20; // in km/h

if (temperature > 35 && humidity > 70) {
    console.log("Cancel: Heat Alert.");
} else if (temperature < 10 || windSpeed > 40) {
    console.log("Cancel: Cold/Windy Alert.");
} else {
    console.log("Event Approved.");
}

if (temperature < 20) {
    console.log("Wear Jacket");
} else if (temperature <= 30) {
    console.log("Comfortable");
} else {
    console.log("Stay Hydrated");
}   