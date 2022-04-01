var resultObj = {};
function formValidation() {
    var name = document.registrationForm.name;
    var email = document.registrationForm.email;
    var contactNo = document.registrationForm.contactNo;
    var age = document.registrationForm.age;
    var address = document.registrationForm.address;

    var genderArr = document.querySelectorAll("input[name = 'gender']:checked")
    var genderArray = '';
    var courseArr = document.querySelectorAll("input[name = 'course']:checked")
    var courseArray = '';
    if (genderArr.length > 0) {
        for (let i = 0; i < genderArr.length; i++) {
            genderArray += genderArr[i].value + ', '
        }

        for (let i = 0; i < courseArr.length; i++) {
            courseArray += courseArr[i].value + ', '
        }
    }

    if (name.value.trim() == '' || name.value.trim() == null) {
        alert('Please enter user name');
        name.focus()
        return false;
    }
    if (name.value.trim().length < 5 || name.value.trim().length > 15) {
        alert('Please enter user name should between 5 to 15');
        name.focus()
        return false;
    }
    if (!/^[a-zA-Z]*$/g.test(name.value.trim())) {
        alert("Invalid user name, only alphabets are allowed");
        name.focus();
        return false;
    }

    if (email.value.trim() == '' || email.value.trim() == null) {
        alert('Please enter Email');
        email.focus()
        return false;
    }
    // if (email.value.length < 5 || email.value.length > 25) {
    //     alert('Please enter Email should between 5 to 25');
    //     email.focus()
    //     return false;
    // }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value.trim())) {
        // if (!/^[a-zA-Z0-9+_]+@[a-zA-Z0-9.-]+$/g.test(email.value)) {
        alert("Invalid email");
        email.focus();
        return false;
    }

    if (contactNo.value.trim() == '' || contactNo.value.trim() == null) {
        alert('Please enter Contact No');
        contactNo.focus()
        return false;
    }
    if (contactNo.value.trim().length < 5 || contactNo.value.trim().length > 12) {
        alert('Please enter Contact No should between 5 to 12');
        contactNo.focus()
        return false;
    }
    if (!/^[0-9]*$/g.test(contactNo.value.trim())) {
        alert("Invalid Contact No, only numbers are allowed");
        contactNo.focus();
        return false;
    }

    if (genderArr.length == 0) {
        alert('Please select gender');
        return false;
    }

    if (courseArr.length == 0) {
        alert('Please select atleast one course');
        return false;
    }

    if (address.value.trim() == '' || address.value.trim() == null) {
        alert('Please enter address');
        address.focus()
        return false;
    }
    resultObj = {
        name: name.value.trim(),
        email: email.value.trim(),
        contactNo: contactNo.value.trim(),
        course: courseArray,
        age: age.value,
        address: address.value,
        gender: genderArray,
    }
    showResult(resultObj);
    document.getElementById("registrationForm").reset()
    return true;
}

function showResult(value) {
    document.getElementById("userRes").innerText = '';
    document.getElementById("emailRes").innerText = '';
    document.getElementById("contactRes").innerText = '';
    document.getElementById("courseRes").innerText = '';
    if (Object.keys(resultObj).length != 0) {
        document.getElementById("userRes").innerText = value.name;
        document.getElementById("emailRes").innerText = value.email;
        document.getElementById("contactRes").innerText = value.contactNo;
        document.getElementById("courseRes").innerText = value.course;
    }
}


function editForm() {
    if (Object.keys(resultObj).length === 0) {
        alert("No Record to update")
    } else {
        document.getElementById('name').value = resultObj.name;
        document.getElementById('email').value = resultObj.email;
        document.getElementById('contactNo').value = resultObj.contactNo;
        document.getElementById('age').value = resultObj.age;
        document.getElementById('address').value = resultObj.address;
        var genderTemp = resultObj.gender.split(", ")
        var courseTemp = resultObj.course.split(", ")
        for (let i = 0; i < genderTemp.length; i++) {
            if (genderTemp[i] !== '') {
                document.getElementById(genderTemp[i].toLowerCase()).checked = true;
            }
        }
        for (let i = 0; i < courseTemp.length; i++) {
            if (courseTemp[i] !== '') {
                document.getElementById(courseTemp[i].toLowerCase()).checked = true;
            }
        }
    }
}

function deleteForm() {
    if (Object.keys(resultObj).length == 0) {
        alert("No Record to delete")
    } else {
        var confirmDelete = confirm("Are you sure to delete the record ? ")
        if (confirmDelete) {
            resultObj = {}
            showResult(resultObj);
        }
    }
}
