function calculateResult(val) {
    document.getElementById("result").value += val;;
}
function calculateResult1() {
    document.getElementById("result").value = eval(document.getElementById("result").value);
}
function calcClear() {
    document.getElementById("result").value = '';
}

