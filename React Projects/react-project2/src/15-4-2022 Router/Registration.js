import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link, Outlet } from 'react-router-dom'

export default function Registration() {

    const [buttonText, setButtonText] = useState("Submit");
    const [updateId, setupdateId] = useState("")
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://625cf8a74c36c753576ca3ef.mockapi.io/userRegistration')
            .then(nodeData => setData(nodeData.data))
    }, [])

    let [register, setRegister] = useState({
        userName: '', email: '', contactNumber: '', gender: '', graduation: 'HSC', address: '',
        course1: '', course2: "", course3: ""
    })
    const { userName, email, contactNumber, gender, graduation, address, course1, course2, course3 } = register;
    var storageArray = JSON.parse(localStorage.getItem('registrationForm'));
    if (storageArray == null) storageArray = [];
    const changeHandler = (event) => {
        setRegister({ ...register, [event.target.name]: event.target.value })
    }

    const changeCheckboxHandler = (e) => {
        if (e.target.checked) {
            setRegister({ ...register, [e.target.name]: e.target.value })
        } else {
            setRegister({ ...register, [e.target.name]: '' })
        }
    }
    // {e => this.handleChange(e)}
    const submitHandler = (event) => {
        event.preventDefault()
        var course = '';
        debugger;

        for (let val in register) {
            if (val.includes('course')) {
                if (register[val] != '') course = course + register[val] + ', ';
            }
        }
        if (course != '') course = (course.trim()).substring(0, course.length - 1)

        if (userName.length < 5)
            alert('UserName should be atleast 5 characters')
        else if (contactNumber.length < 8)
            alert("contactNumber should be atleast 8 Numbers")
        else if (gender == '') alert("Please select gender")
        else if (course == '') alert("Please select course")
        else if (address == '') alert("Please enter Address")
        else {
            register = { ...register, course: course, contactNumber: Number(contactNumber) }
            // storageArray.push(register);
            // if (value.buttonText === "Submit") {
            axios.post(' https://625cf8a74c36c753576ca3ef.mockapi.io/userRegistration', register)
                .then(() => {
                    alert("File Submitted successfully...");
                    axios.get('https://625cf8a74c36c753576ca3ef.mockapi.io/userRegistration')
                        .then(nodeData => setData(nodeData.data))
                    document.getElementById("registerForm").reset()
                    clearData();
                })
                .throw(err => console.log(err))
            // } else {
            //     axios.put('https://625cf8a74c36c753576ca3ef.mockapi.io/userRegistration/' + value.id)
            //         .then(() => {
            //             axios.get('https://625cf8a74c36c753576ca3ef.mockapi.io/userRegistration')
            //                 .then(nodeData => setData(nodeData.data))
            //             document.getElementById("registerForm").reset()
            //             clearData();
            //         })
            // }


            // localStorage.setItem("registrationForm", JSON.stringify(storageArray));

        }
    }

    const updateRegister = (event) => {
        setupdateId(event.id)
        setButtonText('Update')
        setRegister({
            userName: event.userName, email: event.email, contactNumber: event.contactNumber, gender: event.gender, graduation: event.graduation, address: event.address, course1: event.course1,
            course2: event.course2, course3: event.course3
        })
    }

    const deleteRegister = (event) => {
        var deleteConfirm = window.confirm(`${'Are you sure to delete ' + event.userName.toUpperCase() + ' record ?'}`)
        if (deleteConfirm) {
            axios.delete('https://625cf8a74c36c753576ca3ef.mockapi.io/userRegistration/' + event.id)
                .then(() => {
                    axios.get('https://625cf8a74c36c753576ca3ef.mockapi.io/userRegistration')
                        .then(nodeData => setData(nodeData.data))
                        alert("File Deleted successfully...");
                    document.getElementById("registerForm").reset()
                    clearData();
                })
        }
    }

    const clearData = () => {
        setButtonText('Submit')
        setRegister({ userName: '', email: '', contactNumber: '', gender: '', graduation: '', address: '' })
    }

    const updateConfirm = (event) => {
        event.preventDefault()
        var course = '';
        for (let val in register) {
            if (val.includes('course')) {
                if (register[val] != '') course = course + register[val] + ', ';
            }
        }
        if (course != '') course = (course.trim()).substring(0, course.length - 1)

        if (userName.length < 5)
            alert('UserName should be atleast 5 characters')
        else if (contactNumber.length < 8)
            alert("contactNumber should be atleast 8 Numbers")
        else if (gender == '') alert("Please select gender")
        else if (course == '') alert("Please select course")
        else if (address == '') alert("Please enter Address")
        else {
            register = { ...register, course: course, contactNumber: Number(contactNumber) }

            axios.put('https://625cf8a74c36c753576ca3ef.mockapi.io/userRegistration/' + updateId, register)
                .then((res) => {
                    alert("File Updated successfully...");
                    axios.get('https://625cf8a74c36c753576ca3ef.mockapi.io/userRegistration')
                        .then(nodeData => setData(nodeData.data))
                    document.getElementById("registerForm").reset()
                    clearData();
                })
        }
    }

    return (
        <>
            <div className='container custCont' >
                <div className='row'>
                    <div className='col-sm-12 col-md-5 custDiv'>
                        <h3 className="custHead">Registration Form</h3>
                        <form id="registerForm">
                            <div className="row">
                                <div className='col-4'> UserName</div>
                                <div className='col-6'>
                                    <input type='text' name='userName' value={userName} onChange={changeHandler} />
                                </div>
                            </div><br></br>
                            <div className="row">
                                <div className='col-4'> Email  </div>
                                <div className='col-6'>
                                    <input type='email' name='email' value={email} onChange={changeHandler} />
                                </div>
                            </div><br />
                            <div className="row">
                                <div className='col-4'>Contact No </div>
                                <div className='col-6'>
                                    <input type='number' name='contactNumber' value={contactNumber} onChange={changeHandler} />
                                </div>
                            </div><br />
                            <div className="row">
                                <div className='col-4'>Gender</div>
                                <div className='col-6'>
                                    <div className="d-flex">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="gender" id="male"
                                                checked={gender === "male"}
                                                onClick={changeHandler} value="male" />
                                            <label className="form-check-label" htmlFor="male">
                                                Male
                                            </label>
                                        </div>&nbsp;
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="gender" id="female"
                                                checked={gender === "female"} onClick={changeHandler} value="female" />
                                            <label className="form-check-label" htmlFor="female">
                                                Female
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div><br />
                            <div className="row">
                                <div className='col-4'> Course</div>
                                <div className='col-8'>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="course1"
                                            checked={course1 === "Digital Electronics"} value="Digital Electronics" onClick={changeCheckboxHandler} id="digital electronics" />
                                        <label className="form-check-label" htmlFor="redColor">
                                            Digital Electronics
                                        </label>
                                    </div> &nbsp;
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="course2"
                                            checked={course2 === "Electronic Engineering"} value="Electronic Engineering" onClick={changeCheckboxHandler} id="electronic engineering" />
                                        <label className="form-check-label" htmlFor="greenColor">
                                            Electronic Engineering
                                        </label>
                                    </div>&nbsp;
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="course3"
                                            checked={course3 === "Power Electronics"} value="Power Electronics" onClick={changeCheckboxHandler} id="power electronics" />
                                        <label className="form-check-label" htmlFor="purpleColor">
                                            Power Electronics
                                        </label>
                                    </div>&nbsp;
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-4'>Graduation</div>
                                <div className='col-6'>
                                    <div className="custom-select">
                                        <select name="graduation" id="graduation" value={graduation} onChange={changeHandler}>
                                            <option value="HSC">HSC</option>
                                            <option value="Diploma">Diploma</option>
                                            <option value="UG">UG</option>
                                            <option value="PG">PG</option>
                                            <option value="Others">Others</option>
                                        </select>
                                    </div>
                                </div>
                            </div><br />

                            <div className='row'>
                                <div className='col-4'>Address</div>
                                <div className='col-6'>
                                    <div className="form-group">
                                        <textarea id="address" name="address" value={address} onChange={changeHandler} rows="4" cols="20"></textarea>
                                        {/* <textarea type="text" className="form-control" id="address"  rows="3"></textarea> */}
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-5'>
                                    <input className="btn btn-primary custButton" type='reset' name='Reset' onClick={clearData} />
                                </div>
                                <div className='col-5'>
                                    <button style={{ display: (`${buttonText}` === 'Submit' ? 'block' : 'none') }} className="btn btn-primary custButton" type='submit' name='submit' onClick={submitHandler}>Submit</button>
                                    <button style={{ display: (`${buttonText}` === 'Update' ? 'block' : 'none') }} className="btn btn-primary custButton" type='submit' name='submit' onClick={updateConfirm}>Update</button>

                                </div>

                            </div>
                        </form>
                    </div>

                    <div className='col-sm-12 col-md-7'>
                        <h3 className="custHead">Registration List</h3>

                        <table className="table table-striped custTable">
                            <tbody>
                                <tr>
                                    {/* <th>User Id</th> */}
                                    <th>User Name</th>
                                    <th>Email</th>
                                    <th>Contact</th>
                                    <th>Course</th>
                                    <th>Gender</th>
                                    <th>Actions</th>
                                </tr>
                                {data.map((item, i) => (
                                    <tr key={i}>
                                        {/* <td><Link to={item.id}>{item.id}</Link></td> */}
                                        <td>{item.userName}</td>
                                        {/* <Link to={item.userName}>{item.userName}</Link></td> */}
                                        <td>{item.email}</td>
                                        <td>{item.contactNumber}</td>
                                        <td>{item.course}</td>
                                        <td>{item.gender}</td>
                                        <td><Link to='/Registration' className="custEdit" onClick={() => updateRegister(item)}>Edit</Link>&nbsp;
                                            <u className="custDelete" onClick={() => deleteRegister(item)}>Delete</u></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* <Outlet /> */}
        </>
    )

}