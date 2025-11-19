
function updateClock() {
    let date = new Date();
    document.getElementById("clock").innerHTML =`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

setInterval(updateClock, 1000);