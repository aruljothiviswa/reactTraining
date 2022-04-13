import '../App.css';
import { useState } from 'react';

export default function EmpContent(props) {
    const [search, setSearch] = useState('')

    let tempArr = [...props.data];
    var style = {
        width: '100px',
        height: '80px'
    }
    const resetResult = () => {
        setSearch('');
    }
    return (
        <>
            <div className="container custCon">
                <div className="row">
                    <div className="col">
                        <input className="search" value={search} onChange={(event) => setSearch(event.target.value)} />&nbsp;
                        <button className='btn btn-primary btn-sm' onClick={resetResult}>
                            <i className="fa fa-refresh" aria-hidden="true"></i>
                            <span className="d-none d-sm-none d-xs-none d-md-inline d-lg-inline"> Reset</span></button>
                    </div>
                </div>
                <h1 className="functionClass">Employee Details</h1>
                <table className="table table-striped">
                    <tbody>
                        <tr>
                            <th>Employee Id</th>
                            <th>Employee Name</th>
                            <th>Gender</th>
                            <th>Mobile</th>
                            <th>Image</th>
                        </tr>
                        {tempArr.filter(value => {
                            if (value.empId.toLowerCase().includes((search).toLowerCase()) || value.empName.toLowerCase().includes((search).toLowerCase()) ||
                                value.gender.toLowerCase().includes((search).toLowerCase()) || value.mobile.toLowerCase().includes((search).toLowerCase())) {
                                return value;
                            }
                        }).map((item) => (
                            <tr key={item.empId}>
                                <td>{item.empId}</td>
                                <td>{item.empName}</td>
                                <td>{item.gender}</td>
                                <td>{item.mobile}</td>
                                <td><img style={style} src={item.Photo}></img></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


        </>
    )
}