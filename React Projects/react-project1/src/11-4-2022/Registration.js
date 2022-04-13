import { useState } from 'react';
import '../App.css';

export default function Registration() {
    let [register, setRegister] = useState({ userName: '', email: '', contactNumber: '', gender: '', graduation: 'HSC', address: '', course1: '', course2: "", course3: "" })
    const { userName, email, contactNumber, gender, graduation, address } = register;
    var storageArray = JSON.parse(localStorage.getItem('registrationForm'));
    if (storageArray == null) storageArray = [];
    const changeHandler = (event) => {
        setRegister({ ...register, [event.target.name]: event.target.value })
    }
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
            register = { ...register, course: course }
            storageArray.push(register);
            localStorage.setItem("registrationForm", JSON.stringify(storageArray));
            document.getElementById("registerForm").reset()
            clearData();
        }
    }

    const clearData = () => {
        setRegister({ userName: '', email: '', contactNumber: '', gender: '', graduation: '', address: '' })
    }

    return (
        <>
            <div className='container'>
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
                                    {/* <input type='text' name='userName' value={userName} onChange={changeHandler} /> */}

                                    {/* <div class="d-flex"> */}
                                    <div className="form-check">
                                        {/* <!-- <input type="checkbox" id="react" name="course" value="React">ReactJS&nbsp;
                                                <input type="checkbox" id="node" name="course" value="Node">NodeJS&nbsp;
                                                    <input type="checkbox" id="mongo" name="course" value="Mongo">MongoDB --> */}

                                        <input className="form-check-input" type="checkbox" name="course1" value="Digital Electronics" onClick={changeHandler} id="digital electronics" />
                                        <label className="form-check-label" htmlFor="redColor">
                                            Digital Electronics
                                        </label>
                                    </div> &nbsp;
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="course2" value="Electronic Engineering" onClick={changeHandler} id="electronic engineering" />
                                        <label className="form-check-label" htmlFor="greenColor">
                                            Electronic Engineering
                                        </label>
                                    </div>&nbsp;
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="course3" value="Power Electronics" onClick={changeHandler} id="power electronics" />
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
                                </tr>
                                {storageArray.map((item, i) => (
                                    <tr key={i}>
                                        <td>{item.userName}</td>
                                        <td>{item.email}</td>
                                        <td>{item.contactNumber}</td>
                                        <td>{item.course}</td>
                                        <td>{item.gender}</td>
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