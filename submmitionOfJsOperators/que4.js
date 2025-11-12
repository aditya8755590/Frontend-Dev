// A smart home system checks multiple security conditions.
// Requirements:
// ● Variables: isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside.
// ● Access is granted only if:
// ○ Alarm is on
// ○ Door and window are closed
// ○ Owner is inside
// ● Use Boolean logic (&&, ||, !) to print “Secure” or “Unsafe”.
// ● Change values and test multiple outcomes.

let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = false;

function checkSecurity() {
if (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) {
    console.log("Secure");
} else {
    console.log("Unsafe");
}
}

// Testing different scenarios
checkSecurity(); // Initial check
isDoorLocked = false; // Door is unlocked
checkSecurity();
isDoorLocked = true; // Door is locked again        
isOwnerInside = true; // Owner comes inside
checkSecurity();
isWindowClosed = false; // Window is opened
checkSecurity();
isWindowClosed = true; // Window is closed again
checkSecurity();
isAlarmOn = false; // Alarm is turned off
checkSecurity();