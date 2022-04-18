import React, { useContext, useState } from 'react';
import { dataContext } from '../App';
import '../App.css'

export default function GrandChildComponent() {
    const data = useContext(dataContext);
    const [search, setSearch] = useState('')

    const resetResult = () => {
        setSearch('');
    }
    const style = {
        width: '100px',
        height: '80px'
    }

    return (
        <>
            <div className="container custCont">
                <div className="row">
                    <div className="col">
                        <input className="search" value={search} onChange={(event) => setSearch(event.target.value)} />&nbsp;
                        <button className='btn btn-primary btn-sm' onClick={resetResult}>
                            <i className="fa fa-refresh" aria-hidden="true"></i>
                            <span className="d-none d-sm-none d-xs-none d-md-inline d-lg-inline"> Reset</span></button>
                    </div>
                </div>
                <h1 className="functionClass">Product Details</h1>
                <table className="table table-striped">
                    <tbody>
                        <tr>
                            <th>Product Id</th>
                            <th>Product Category</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Image</th>
                            <th>Rating</th>
                        </tr>
                        {/* <dataContext.Consumer> */}
                        {/* {data => data.filter(value => { */}
                        {data.filter(value => {
                            if (String(value.id).includes((search).toLowerCase()) || String((value.category).toLowerCase()).includes((search).toLowerCase()) ||
                                String(value.price).includes((search).toLowerCase()) || String(value.rating.rate).includes((search).toLowerCase()) || String((value.description).toLowerCase()).includes((search).toLowerCase())) {
                                return value;
                            }
                        }).map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.category}</td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                                <td><img style={style} src={item.image} alt="Product Image"></img></td>
                                <td>{item.rating.rate}</td>
                            </tr>
                        ))}
                        {/* </dataContext.Consumer> */}

                    </tbody>
                </table>
            </div>

        </>
    )
}



