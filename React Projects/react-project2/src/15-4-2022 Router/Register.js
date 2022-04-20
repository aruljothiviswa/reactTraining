import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link, Outlet } from 'react-router-dom'

export default function Register() {

    const [buttonText, setButtonText] = useState("Submit");
    const [updateId, setupdateId] = useState("")
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://625cf8a74c36c753576ca3ef.mockapi.io/users')
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
            axios.post(' https://625cf8a74c36c753576ca3ef.mockapi.io/users', register)
                .then(() => {
                    axios.get('https://625cf8a74c36c753576ca3ef.mockapi.io/users')
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
        // var deleteConfirm = confirm(`${'Are you sure to delete the' + event.userName + 'record ?'}`)
        // if (deleteConfirm) {
        axios.delete('https://625cf8a74c36c753576ca3ef.mockapi.io/users/' + event.id)
            .then(() => {
                axios.get('https://625cf8a74c36c753576ca3ef.mockapi.io/users')
                    .then(nodeData => setData(nodeData.data))
                document.getElementById("registerForm").reset()
                clearData();
            })
        // }
    }

    const clearData = () => {
        setButtonText('Submit')
        setRegister({ userName: '', email: '', contactNumber: '', gender: '', graduation: 'HSC', address: '' })
    }

    const updateConfirm = (event) => {
        console.log("aaaaaaaaaaaaaa", updateId)
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

            axios.put('https://625cf8a74c36c753576ca3ef.mockapi.io/users/' + updateId, register)
                .then((res) => {
                    // console.log(res)
                    axios.get('https://625cf8a74c36c753576ca3ef.mockapi.io/users')
                        .then(nodeData => setData(nodeData.data))
                    document.getElementById("registerForm").reset()
                    clearData();
                })
        }
    }

    const expandRegister = () => {
        console.log("ddddd")
    }

    return (
        <>
            <div className='container custCont' >
                <div className='row'>
                    <div className='col-sm-12 col-md-6 custDiv'>
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

                    <div className='col-sm-12 col-md-6'>
                        <h3 className="custHead">Registration List</h3>

                        <div className="row" style={{ padding: '2%' }}>
                            {data.map((item) => (
                                <div key={item.id} className="custCardRow">
                                    <div className="card border-success mb-3 custCard">
                                        <div className="card-header bg-transparent border-success">{item.id}-{item.userName}</div>
                                        {/* <img className="card-img-top" src={item.ProductImg} alt="Card"></img> */}
                                        <div className="card-body text-success">
                                            <h5 className="card-title">{item.email}</h5>
                                            <p className="card-text">{item.contactNumber}<br></br>
                                                {item.gender}</p>
                                        </div>
                                        <div className="card-footer bg-transparent border-success">
                                            <button type="button" className="btn btn-outline-primary custBut" onClick={() => updateRegister(item)}>Edit</button>
                                            <button className="btn btn-outline-success custBut" onClick={() => expandRegister(item)}>
                                                <Link to={item.id}>Expand</Link>
                                            </button>
                                            {/* <button type="button" to='/Registration' className="btn btn-outline-success custBut" onClick={() => expandRegister(item)}>Expand</button> */}
                                            <button type="button" className="btn btn-outline-danger custBut" onClick={() => deleteRegister(item)}>Delete</button>
                                        </div>
                                    </div>

                                </div>
                            ))
                            }
                        </div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )

}