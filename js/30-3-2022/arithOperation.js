function addResult() {
    var addRes = Number(document.getElementById("firstNumber").value) + Number(document.getElementById("secondNumber").value)
    document.getElementById("result").value = addRes;
}

function subResult(){
    var addRes = Number(document.getElementById("firstNumber").value) - Number(document.getElementById("secondNumber").value)
    document.getElementById("result").value = addRes;
}

function mulResult(){
    var addRes = Number(document.getElementById("firstNumber").value) * Number(document.getElementById("secondNumber").value)
    document.getElementById("result").value = addRes;
}

function divResult(){
    var addRes = Number(document.getElementById("firstNumber").value) / Number(document.getElementById("secondNumber").value)
    document.getElementById("result").value = addRes;
}

function clearResult() {
    document.getElementById("result").value = '';
    document.getElementById("firstNumber").value = '';
    document.getElementById("secondNumber").value = '';
} 