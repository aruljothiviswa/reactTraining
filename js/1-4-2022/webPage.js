var homeEle;
var aboutEle;
var contactEle;
var finalResult = JSON.parse(localStorage.getItem('fruitList'));
if (finalResult == null) finalResult = [];

if (finalResult != null && finalResult.length > 0) loadValues();
var indexValue;
document.getElementById("edit").value = "Submit";

function loadValues() {
    let row;
    let table = document.getElementById("resultTable");
    for (var i = table.rows.length - 1; i > 1; i--) {
        table.deleteRow(i);
    }
    finalResult.forEach(ele => {
        row = table.insertRow(table.rows.length);
        row.insertCell(0).innerHTML = ele.name;
        row.insertCell(1).innerHTML = ele.price;
        row.insertCell(2).innerHTML = ele.fruitType;
        row.insertCell(3).innerHTML = ele.organicVal;
        row.insertCell(4).innerHTML = ele.colorVal;
        row.insertCell(5).innerHTML = '<u style=" color:blue;cursor: pointer;" onclick="editForm(this)">Edit</u>&nbsp;<u style=" color:red;cursor: pointer;" onclick="deleteForm(this)">Delete</u>'
    })
}


getContentValues();
homeEle.style.display = "block";
aboutEle.style.display = "none";
contactEle.style.display = "none";
addFruitsEle.style.display = "none";
getFruitsEle.style.display = "none";

function getContentValues() {
    homeEle = document.getElementById("homeContent");
    aboutEle = document.getElementById("aboutContent");
    contactEle = document.getElementById("contactContent");
    addFruitsEle = document.getElementById("addFruitsDetails");
    getFruitsEle = document.getElementById("getFruitsDetails");
    fruitsEle = document.getElementById("fruitsDetails");
}

function getAbout() {
    homeEle.style.display = "none";
    aboutEle.style.display = "block";
    contactEle.style.display = "none";
    addFruitsEle.style.display = "none";
    getFruitsEle.style.display = "none";
}

function getHome() {
    homeEle.style.display = "block";
    aboutEle.style.display = "none";
    contactEle.style.display = "none";
    addFruitsEle.style.display = "none";
    getFruitsEle.style.display = "none";
    fruitsEle.style.display = "block";
}

function getContact() {
    homeEle.style.display = "none";
    aboutEle.style.display = "none";
    contactEle.style.display = "block";
    addFruitsEle.style.display = "none";
    getFruitsEle.style.display = "none";
}

function addFruits() {
    homeEle.style.display = "block";
    aboutEle.style.display = "none";
    contactEle.style.display = "none";
    addFruitsEle.style.display = "block";
    getFruitsEle.style.display = "none";
    fruitsEle.style.display = "none";
    document.getElementById("edit").value = "Submit";
}

function getFruits() {
    homeEle.style.display = "block";
    aboutEle.style.display = "none";
    contactEle.style.display = "none";
    addFruitsEle.style.display = "none";
    getFruitsEle.style.display = "block";
    fruitsEle.style.display = "none";
    finalResult = JSON.parse(localStorage.getItem('fruitList'));
    if (finalResult == null) finalResult = [];
    if (finalResult != null && finalResult.length > 0) loadValues();
}

addFruitStock = () => {

    const name = document.addFruitForm.name;
    const quantity = document.addFruitForm.quantity;
    const price = document.addFruitForm.price;
    const fruitType = document.addFruitForm.fruitType;
    debugger;
    const colorArr = document.querySelectorAll("input[name = 'color']:checked")
    let colorVal = '';
    const organicArr = document.querySelectorAll("input[name = 'organic']:checked")
    let organicVal = '';
    if (colorArr.length > 0) {
        colorArr.forEach(ele => {
            colorVal += ele.value + ', '
        })
    }
    if (organicArr.length > 0) {
        organicArr.forEach(ele => {
            organicVal += ele.value + ', '
        })
    }

    if (name.value.trim() == '' || name.value.trim() == null) {
        alert('Please enter Fruit name');
        name.focus()
        return false;
    }

    if (!/^[a-zA-Z]*$/g.test(name.value.trim())) {
        alert("Invalid Fruit name, only alphabets are allowed");
        name.focus();
        return false;
    }

    // if (quantity.value.trim() == '' || quantity.value.trim() == null) {
    //     alert('Please enter quantity');
    //     quantity.focus()
    //     return false;
    // }

    // if (!/^[0-9]*$/g.test(quantity.value.trim())) {
    //     alert("Invalid quantity, only numbers are allowed");
    //     quantity.focus();
    //     return false;
    // }


    if (price.value.trim() == '' || price.value.trim() == null) {
        alert('Please enter price');
        price.focus()
        return false;
    }

    if (!/^[0-9.]*$/g.test(price.value.trim())) {
        alert("Invalid price, only numbers are allowed");
        price.focus();
        return false;
    }

    if (organicArr.length == 0) {
        alert('Please select organic/non-organic');
        return false;
    }

    if (colorArr.length == 0) {
        alert('Please select atleast one color');
        return false;
    }

    var table = document.getElementById("resultTable");
    var resultObj = { colorArr: colorArr, colorVal: colorVal, organicArr: organicArr, organicVal: organicVal, name: name.value.trim(), price: price.value.trim(), fruitType: fruitType.value }

    if (document.getElementById("edit").value != "Submit") {
        finalResult.splice(indexValue, 1, resultObj)
        localStorage.setItem("fruitList", JSON.stringify(finalResult));
        loadValues();
        addFruitsEle.style.display = "none";
        getFruitsEle.style.display = "block";
    } else {
        finalResult = [...finalResult, resultObj]
        localStorage.setItem("fruitList", JSON.stringify(finalResult));
    }
    document.getElementById("addFruitForm").reset()
    return true;
}


deleteForm = obj => {
    var confirmDelete = confirm(`Are you sure to delete the record ? `)
    if (confirmDelete) {
        var index = obj.parentNode.parentNode.rowIndex;
        document.getElementById("resultTable").deleteRow(index);
        finalResult.splice(index - 2, 1);
        localStorage.setItem("fruitList", JSON.stringify(finalResult));
    }
}

editForm = obj => {
    debugger;
    document.getElementById("edit").value = "Update";
    var indx = obj.parentNode.parentNode.rowIndex;
    var editRow = finalResult[indx - 2]
    indexValue = indx - 2;
    document.getElementById("name").value = editRow.name;
    document.getElementById("price").value = editRow.price;
    document.getElementById("fruitType").value = editRow.fruitType;
    var colorTemp = editRow.colorVal.split(", ")
    var organicTemp = editRow.organicVal.split(", ")
    organicTemp.forEach(ele => {
        if (ele != '') {
            document.getElementById(ele.toLowerCase()).checked = true;
        }
    })

    const colorArr = document.querySelectorAll("input[name = 'color']:checked")
    colorArr.forEach(ele => {
        document.getElementById(ele.value.toLowerCase()).checked = false;

    })
    colorTemp.forEach(ele => {
        if (ele != '') {
            document.getElementById(ele.toLowerCase()).checked = true;
        }
    })
    addFruitsEle.style.display = "block";
    getFruitsEle.style.display = "none";
    document.getElementById("edit").value = "Update";
}

function resetForm() {
    document.getElementById("edit").value = "Submit";
}