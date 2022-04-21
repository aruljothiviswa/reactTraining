import React, { Component } from "react";
import { connect } from 'react-redux';
import '../src/App.css';
import { addUsers, deleteUsers, fetchUsers, updateUsers } from "./redux_user/actions/action";
import axios from 'axios';
import './App.css';

class ReactReduxUser extends Component {
    constructor() {
        super()
        this.state = {
            buttonText: "Submit",
            updateId: '',
            data: [],
            register: {
                userName: '', email: '', contactNumber: '', gender: '', graduation: 'HSC', address: '',
                course1: '', course2: "", course3: ""
            }
        }
    }


    componentDidMount() {
        this.props.fetchUsers()
    }

    changeHandler = (event) => {
        this.setState({ register: { ...this.state.register, [event.target.name]: event.target.value } })
    }

    // changeCheckboxHandler = (e) => {
    //     if (e.target.checked) {
    //         this.setState({ ...this.state.register, [e.target.name]: e.target.value })
    //     } else {
    //         this.setState({ ...this.state.register, [e.target.name]: '' })
    //     }
    // }

    submitHandler = (event) => {
        event.preventDefault()
        if (this.state.register.userName.length < 5)
            alert('UserName should be atleast 5 characters')
        else if (this.state.register.contactNumber.length < 8)
            alert("contactNumber should be atleast 8 Numbers")
        // else if (this.state.register.gender == '') alert("Please select gender")
        // else if (course == '') alert("Please select course")
        else if (this.state.register.address == '') alert("Please enter Address")
        else {
            console.log("aaaaaaaaaaaaaaa", this.state.register)
            this.props.addUsers(this.state.register);
            document.getElementById("registerForm").reset()
            this.clearData();
            this.props.fetchUsers()
        }
    }

    updateRegister = (event) => {
        this.setState({ updateId: event.id })
        this.setState({ buttonText: 'Update' })
        this.setState({ register: event })
    }

    deleteRegister = (event) => {
        var deleteConfirm = window.confirm(`${'Are you sure to delete ' + event.userName.toUpperCase() + ' record ?'}`)
        if (deleteConfirm) {
            this.props.deleteUsers(event.id)
            document.getElementById("registerForm").reset()
            this.clearData();
        }
    }

    clearData = () => {
        this.setState({ buttonText: 'Submit' })
        this.setState({ register: { userName: '', email: '', contactNumber: '', gender: '', graduation: '', address: '' } })
    }

    updateConfirm = (event) => {
        event.preventDefault()
        if (this.state.register.userName.length < 5)
            alert('UserName should be atleast 5 characters')
        else if (this.state.register.contactNumber.length < 8)
            alert("contactNumber should be atleast 8 Numbers")
        else if (this.state.register.address == '') alert("Please enter Address")
        else {
            this.props.updateUsers(this.state.register, this.state.updateId)
            document.getElementById("registerForm").reset()
            this.clearData();

        }
    }

    render() {
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
                                        <input type='text' name='userName' value={this.state.register.userName} onChange={this.changeHandler} />
                                    </div>
                                </div><br></br>
                                <div className="row">
                                    <div className='col-4'> Email  </div>
                                    <div className='col-6'>
                                        <input type='email' name='email' value={this.state.register.email} onChange={this.changeHandler} />
                                    </div>
                                </div><br />
                                <div className="row">
                                    <div className='col-4'>Contact No </div>
                                    <div className='col-6'>
                                        <input type='number' name='contactNumber' value={this.state.register.contactNumber} onChange={this.changeHandler} />
                                    </div>
                                </div><br />
                                {/* <div className="row">
                                    <div className='col-4'>Gender</div>
                                    <div className='col-6'>
                                        <div className="d-flex">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="gender" id="male"
                                                    checked={this.state.register.gender === "male"}
                                                    onClick={this.changeHandler} value="male" />
                                                <label className="form-check-label" htmlFor="male">
                                                    Male
                                                </label>
                                            </div>&nbsp;
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="gender" id="female"
                                                    checked={this.state.register.gender === "female"} onClick={this.changeHandler} value="female" />
                                                <label className="form-check-label" htmlFor="female">
                                                    Female
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div><br /> */}
                                {/* <div className="row">
                                    <div className='col-4'> Course</div>
                                    <div className='col-8'>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="course1"
                                                checked={this.state.register.course1 === "Digital Electronics"} value="Digital Electronics" onClick={this.changeCheckboxHandler} id="digital electronics" />
                                            <label className="form-check-label" htmlFor="redColor">
                                                Digital Electronics
                                            </label>
                                        </div> &nbsp;
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="course2"
                                                checked={this.state.register.course2 === "Electronic Engineering"} value="Electronic Engineering" onClick={this.changeCheckboxHandler} id="electronic engineering" />
                                            <label className="form-check-label" htmlFor="greenColor">
                                                Electronic Engineering
                                            </label>
                                        </div>&nbsp;
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="course3"
                                                checked={this.state.register.course3 === "Power Electronics"} value="Power Electronics" onClick={this.changeCheckboxHandler} id="power electronics" />
                                            <label className="form-check-label" htmlFor="purpleColor">
                                                Power Electronics
                                            </label>
                                        </div>&nbsp;
                                    </div>
                                </div> */}
                                <div className='row'>
                                    <div className='col-4'>Graduation</div>
                                    <div className='col-6'>
                                        <div className="custom-select">
                                            <select name="graduation" id="graduation" value={this.state.register.graduation} onChange={this.changeHandler}>
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
                                            <textarea id="address" name="address" value={this.state.register.address} onChange={this.changeHandler} rows="4" cols="20"></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col-5'>
                                        <input className="btn btn-primary custButton" type='reset' name='Reset' onClick={this.clearData} />
                                    </div>
                                    <div className='col-5'>
                                        <button style={{ display: (`${this.state.buttonText}` === 'Submit' ? 'block' : 'none') }} className="btn btn-primary custButton" type='submit' name='submit' onClick={this.submitHandler}>Submit</button>
                                        <button style={{ display: (`${this.state.buttonText}` === 'Update' ? 'block' : 'none') }} className="btn btn-primary custButton" type='submit' name='submit' onClick={this.updateConfirm}>Update</button>

                                    </div>

                                </div>
                            </form>
                        </div>

                        <div className='col-sm-12 col-md-7'>
                            {/* <div className="col"> */}
                            <h3 >Registration List using FetchUser</h3><br></br>

                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        {/* <th>User Id</th> */}
                                        <th>User Name</th>
                                        <th>Email</th>
                                        <th>Contact</th>
                                        <th>Graduation</th>
                                        <th>Address</th>
                                        <th>Actions</th>
                                    </tr>
                                    {this.props.users.map((item, i) => (
                                        <tr key={i}>
                                            <td>{item.userName}</td>
                                            <td>{item.email}</td>
                                            <td>{item.contactNumber}</td>
                                            <td>{item.graduation}</td>
                                            <td>{item.address}</td>
                                            <td><u to='/Registration' className="custEdit" onClick={() => this.updateRegister(item)}>Edit</u>&nbsp;
                                                <u className="custDelete" onClick={() => this.deleteRegister(item)}>Delete</u></td>
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
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers()),
        addUsers: (data) => dispatch(addUsers(data)),
        updateUsers: (data, id) => dispatch(updateUsers(data, id)),
        deleteUsers: (id) => dispatch(deleteUsers(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReactReduxUser)