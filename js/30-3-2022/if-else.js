function checkTime() {
    var currentTime = new Date().getHours();
    var addTime = document.getElementById("addHours").value;
    var finalTime = Number(currentTime) + Number(addTime);
    if (finalTime >= 24) {
        finalTime = finalTime - 24; 
    }
    if (finalTime < 12) {
        alert("Good Morning")   // Morning midnight 12 to 12
    } else if (finalTime >= 12 && finalTime < 16) {
        alert("Good Afternoon") // 12 to 4
    } else if (finalTime >= 16 && finalTime < 20) {
        alert("Good Evening") // 4 to 8
    } else {
        alert("Good Night") // after 8 to midnight 12
    }
}