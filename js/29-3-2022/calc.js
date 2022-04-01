let temp = 0; let temp2 = 0; let fraction = false; let result; let tempArray = [];
let temp3 = 0;
function calculate(val) {
    if (val === '.') {
        fraction = true;
        temp = temp + val;
    } else {
        if (fraction === true) {
            temp = temp + val;
        } else {
            temp = (temp * 10) + val;
        }
    }
    document.getElementById("result").innerHTML = temp;
}
function calcul(val) {
    fraction = false;
    if (val === 'add') {
        if (result === undefined || result === '') {
            temp2 = temp
        } else {
            temp2 = temp2 + temp
        }
        result = 'add'
        temp = 0;
    } else if (val === "sub") {
        if (result === undefined || result === '') {
            temp2 = temp
        } else {
            temp2 = temp2 - temp
        }
        result = 'sub'
        temp = 0;
    } else if (val === "mul") {
        if (result === undefined || result === '') {
            temp2 = temp
        } else {
            temp2 = temp2 * temp
        }
        result = 'mul'
        temp = 0;
    } else if (val === "div") {
        if (result === undefined || result === '') {
            temp2 = temp
        } else {
            temp2 = temp2 / temp
        }
        result = 'div'
        temp = 0;
    } else {
        if (temp3 !== 0) {
            temp2 = temp3;
        }
        if (result === 'add') {
            temp2 = Number(temp2) + Number(temp);
        } else if (result === 'sub') {
            temp2 = Number(temp2) - Number(temp);
        } else if (result === 'mul') {
            temp2 = Number(temp2) * Number(temp);
        } else if (result === 'div') {
            temp2 = Number(temp2) / Number(temp);
        }
        if (result === undefined || result === '') {
            temp2 = temp;
        }
        document.getElementById("result").innerHTML = temp2;
        temp = 0;
        temp3 = temp2;
    }
}
function calcClear() {
    fraction = false;
    document.getElementById("result").innerHTML = '';
    temp = 0; temp2 = 0; temp3 = 0; result = '';
}

