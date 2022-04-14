import React, { useState, useEffect } from 'react'
import axios from 'axios'
export default function FunctionalCompUseEffect() {
    const [data, setData] = useState([])
    const [search, setSearch] = useState('')
    var noDataFound = '';

    const style = {
        width: '100px',
        height: '80px'
    }
    const resetResult = () => {
        setSearch('');
    }
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(nodeData => setData(nodeData.data))
    }, [])

    return (
        <>
            {/* <div className="container custCon">
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
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.category}</td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                                <td><img style={style} src={item.image}></img></td>
                                <td>{item.rating.rate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div> */}

            <div className="container custCon">
                <div className="row">
                    <div className="col">
                        <input className="search" value={search} onChange={(event) => setSearch(event.target.value)} />&nbsp;
                        <button className='btn btn-primary btn-sm' onClick={resetResult}>
                            <i className="fa fa-refresh" aria-hidden="true"></i>
                            <span className="d-none d-sm-none d-xs-none d-md-inline d-lg-inline"> Reset</span></button>
                    </div>
                </div>
                <h1 className="functionClass">Product Details</h1>
                <div className="row" style={{ padding: '2%' }}>
                    {data.filter(value => {
                        if (String(value.id).includes((search).toLowerCase()) || String((value.category).toLowerCase()).includes((search).toLowerCase()) ||
                            String(value.price).includes((search).toLowerCase()) || String((value.description).toLowerCase()).includes((search).toLowerCase())) {
                            return value;
                        }
                    }).map((item) => (
                        <div key={item.id} className="col-sm-6 col-md-4 col-lg-3" style={{ margin: '2%' }}>
                            <div className="card h-100" >
                                <img className="card-img-top" src={item.image} alt="Card image" />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{item.id}-{item.category}</h5>
                                    <div className="card-text">{item.description}<br></br><br />
                                        {/* <p className="mt-auto ">
                                            <p className="text-uppercase mb-0">Rs : {item.price}</p>
                                        </p> */}
                                    </div>
                                    {/* <div class="card-footer text-muted mx-auto">Price : Rs.
                                    </div> */}
                                    <div className="card-footer mt-auto border border-primary">Price : Rs. {item.price}</div>
                                </div>
                            </div>
                            {/* <div className="card h-100 border-success mb-3">
                                <div className="card-header bg-transparent border-success">{item.id}-{item.category}</div>
                                <img className="card-img-top" src={item.image} alt="Card"></img>
                                <div className="card-body text-success">
                                    <h5 className="card-title">{item.category}</h5>
                                    <p className="card-text">{item.description}</p>
                                </div>
                                <div className="card-footer bg-transparent border-success">Price : Rs. {item.price}</div>
                            </div> */}
                        </div>
                    ))
                    }
                    <div className="message">{noDataFound}</div>
                </div>

            </div>
        </>
    )
}