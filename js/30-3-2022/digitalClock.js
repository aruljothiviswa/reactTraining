function digitalClock() {
    let currentHour = new Date().getHours();
    let currentMin = new Date().getMinutes();
    let currentSec = new Date().getSeconds();
    currentHour = (currentHour < 10) ? "0" + currentHour : currentHour;
    currentMin = (currentMin < 10) ? "0" + currentMin : currentMin;
    currentSec = (currentSec < 10) ? "0" + currentSec : currentSec;

    let currentTime = currentHour + ":" + currentMin + ":" + currentSec
    document.getElementById("digiClock").value = currentTime;
    setInterval(function () {
        digitalClock()
    }, 1000)
    // setTimeout(function () {
    //     digitalClock()
    // }, 1000)
}
digitalClock();