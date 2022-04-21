import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link, Outlet } from 'react-router-dom'
import { useForm } from 'react-hook-form';

export default function UseForm() {
    const baseURL = "https://625cf8a74c36c753576ca3ef.mockapi.io/users"
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const [apiData, setApiData] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const addUserDetails = () => {
        axios.post(baseURL)
            .then(() => getData())
    }

    const getData = () => {
        axios.get(baseURL)
            .then(nodeData => setApiData(nodeData.data))
            
    }

    return (
        <>
            <div className='container custCont' >
                <div className='row'>
                    <div className='col-sm-12 col-md-6 custDiv'>
                        <h3 className="custHead">Registration Form</h3>
                        <form id="registerForm" onSubmit={handleSubmit(addUserDetails)}>
                            <div className="row">
                                <div className='col-4'> UserName</div>
                                <div className='col-6'>
                                    <input type='text' {...register('userName', { required: true, pattern: /^[a-zA-Z ]*$/ })} />
                                    {errors.userName?.type === 'required' && <p className="custErr">User Name Required</p>}
                                    {errors.userName?.type === 'pattern' && <p className="custErr">Invalid UserName</p>}
                                </div>
                            </div><br></br>
                            <div className="row">
                                <div className='col-4'> Email  </div>
                                <div className='col-6'>
                                    <input type='email' {...register('email', { required: true, })} />
                                    {errors.email?.type === 'required' && <p className="custErr">Email Required</p>}
                                </div>
                            </div><br />
                            <div className="row">
                                <div className='col-4'>Contact No </div>
                                <div className='col-6'>
                                    <input type='number' {...register('contactNumber', { required: true, minLength: 5 })} />
                                    {errors.contactNumber?.type === 'required' && <p className="custErr">Contact Number Required</p>}
                                    {errors.contactNumber?.type === 'minLength' && <p className="custErr">Minimum 5 numbers required</p>}

                                </div>
                            </div><br />
                            {/* <div className="row">
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
                                    </div>
                                </div>
                            </div>
                           

                            <div className='row'>
                                <div className='col-5'>
                                    <input className="btn btn-primary custButton" type='reset' name='Reset' onClick={clearData} />
                                </div>
                                <div className='col-5'>*/}
                            <button className="btn btn-primary" type='submit' name='submit' >Submit</button><br></br>
                            {/* <button style={{ display: (`${buttonText}` === 'Update' ? 'block' : 'none') }} className="btn btn-primary custButton" type='submit' name='submit' onClick={updateConfirm}>Update</button>

                                </div>

                            </div>  */}
                        </form>
                    </div>

                    <div className='col-sm-12 col-md-6'>
                        <h3 className="custHead">Registration List</h3>

                         <div className="row" style={{ padding: '2%' }}>
                            {apiData.map((item) => (
                                <div key={item.id} className="custCardRow">
                                    <div className="card border-success mb-3 custCard">
                                        <div className="card-header bg-transparent border-success">{item.id}-{item.userName}</div>
                                        <div className="card-body text-success">
                                            <h5 className="card-title">{item.email}</h5>
                                            <p className="card-text">{item.contactNumber}<br></br>
                                                {item.gender}</p>
                                        </div>
                                        {/* <div className="card-footer bg-transparent border-success">
                                            <button type="button" className="btn btn-outline-primary custBut" onClick={() => updateRegister(item)}>Edit</button>
                                            <button className="btn btn-outline-success custBut" onClick={() => expandRegister(item)}>
                                                <Link className="custLink" to={item.id}>Expand</Link>
                                            </button>
                                            <button type="button" className="btn btn-outline-danger custBut" onClick={() => deleteRegister(item)}>Delete</button>
                                        </div> */}
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