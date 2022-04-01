function checkDay() {
    var currentDay = new Date().getDay();
    var addDays = document.getElementById("addDays").value;
    var finalValue = Number(currentDay) + Number(addDays);
    if (finalValue >= 7) {
        finalValue = finalValue - 7;
    }
    
    switch (finalValue) {
        case 0:
            alert("Sunday")
            break;
        case 1:
            alert("Monday")
            break;
        case 2:
            alert("Tuesday")
            break;
        case 3:
            alert("Wednesday")
            break;
        case 4:
            alert("Thursday")
            break;
        case 5:
            alert("Friday")
            break;
        case 6:
            alert("Saturday")
            break;
        default:
            alert("Something wrong")
            break;
    }
}