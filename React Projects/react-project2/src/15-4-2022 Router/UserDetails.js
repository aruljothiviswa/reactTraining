import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function UserDetails() {
    const navigate = useNavigate();
    let [register, setRegister] = useState({
        userName: '', email: '', contactNumber: '', gender: '', graduation: '', address: '',
        course1: '', course2: "", course3: "", selectedFile: null
    })
    let { name, contact, email, course, gender, graduation, address, selectedFile } = register;
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://625cf8a74c36c753576ca3ef.mockapi.io/users')
            .then(nodeData => setData(nodeData.data))
    }, [])

    const params = useParams()
    const userId = params.id;
    data.forEach(ele => {
        if (ele.id === userId) {
            console.log("gggggggggggggggggggg", ele.id, userId)

            name = ele.userName;
            contact = ele.contactNumber;
            gender = ele.gender;
            course = ele.course;
            graduation = ele.graduation;
            address = ele.address;
            email = ele.email;
            // selectedFile = ele.selectedFile
        }
    })

    return (
        <>
            <div className='row'>
                {/* <div className='col-4'>{selectedFile}
                    <img src={selectedFile.name}></img>
                </div> */}
                <div className='col-8'>
                    <h2 class="custTitle">{name} Details</h2>
                    <table className='custTab'>
                        <tr>
                            <td>Name</td><td>{name}</td>
                        </tr>
                        <tr>
                            <td>Email</td><td>{email}</td>
                        </tr>
                        <tr>
                            <td>Contact Number</td><td>{contact}</td>
                        </tr>
                        <tr>
                            <td>Gender</td><td>{gender}</td>
                        </tr>
                        <tr>
                            <td>Graduation</td><td>{graduation}</td>
                        </tr>
                        <tr>
                            <td>Course</td><td>{course}</td>
                        </tr>
                        <tr>
                            <td>Address</td><td>{address}</td>
                        </tr>
                    </table>
                    <div className='col'>
                        <button className='btn btn-success custbtn' onClick={() => navigate(-1)}>Back</button>
                    </div>

                </div>
            </div>
        </>

        // <div>UserDetails - {name}
        // UserDetails - {contact}
        // UserDetails - {email}
        // UserDetails - {address}
        // UserDetails - {graduation}
        // UserDetails - {course}
        // UserDetails - {gender}
        // </div>
    )
}
