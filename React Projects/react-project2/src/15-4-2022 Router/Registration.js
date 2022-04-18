import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
export default function Registration() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://625cf8a74c36c753576ca3ef.mockapi.io/userRegistration')
            .then(nodeData => setData(nodeData.data))
    }, [])

    let [register, setRegister] = useState({
        userName: '', email: '', contactNumber: '', gender: '', graduation: 'HSC', address: '',
        course1: '', course2: "", course3: ""
    })
    const { userName, email, contactNumber, gender, graduation, address } = register;
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
            console.log(register)
            // storageArray.push(register);
            axios.post(' https://625cf8a74c36c753576ca3ef.mockapi.io/userRegistration', register)
                .then(nodeData => console.log(nodeData))
                .throw(err => console.log(err))
            axios.get('https://625cf8a74c36c753576ca3ef.mockapi.io/userRegistration')
                .then(nodeData => setData(nodeData.data))

            // localStorage.setItem("registrationForm", JSON.stringify(storageArray));
            document.getElementById("registerForm").reset()
            clearData();
        }
    }

    const clearData = () => {
        setRegister({ userName: '', email: '', contactNumber: '', gender: '', graduation: '', address: '' })
    }

    return (
        <>
            <div className='container custCont' >
                <div className='row'>
                    <div className='col-sm-12 col-md-6 custDiv'>
                        <h3 className="custHead">Registration Form</h3>
                        <form onSubmit={submitHandler} id="registerForm">
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
                                            <input className="form-check-input" type="radio" name="gender" id="male" onClick={changeHandler} value="male" />
                                            <label className="form-check-label" htmlFor="male">
                                                Male
                                            </label>
                                        </div>&nbsp;
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="gender" id="female" onClick={changeHandler} value="female" />
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
                                        <input className="form-check-input" type="checkbox" name="course1" value="Digital Electronics" onClick={changeCheckboxHandler} id="digital electronics" />
                                        <label className="form-check-label" htmlFor="redColor">
                                            Digital Electronics
                                        </label>
                                    </div> &nbsp;
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="course2" value="Electronic Engineering" onClick={changeCheckboxHandler} id="electronic engineering" />
                                        <label className="form-check-label" htmlFor="greenColor">
                                            Electronic Engineering
                                        </label>
                                    </div>&nbsp;
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="course3" value="Power Electronics" onClick={changeCheckboxHandler} id="power electronics" />
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
                                    <input className="btn btn-primary custButton" type='submit' name='submit' />
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className='col-sm-12 col-md-6'>
                        <h3 className="custHead">Registration List</h3>

                        <table className="table table-striped custTable">
                            <tbody>
                                <tr>
                                    <th>User Name</th>
                                    <th>Email</th>
                                    <th>Contact</th>
                                    <th>Course</th>
                                    <th>Gender</th>
                                    <th>Actions</th>
                                </tr>
                                {data.map((item, i) => (
                                    <tr key={i}>
                                        <td>{item.userName}</td>
                                        <td>{item.email}</td>
                                        <td>{item.contactNumber}</td>
                                        <td>{item.course}</td>
                                        <td>{item.gender}</td>
                                        <td><u className="custEdit">Edit</u>&nbsp;<u className="custDelete">Delete</u></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )

}