import React, { useState, useEffect } from 'react'
import axios from 'axios'
export default function FunctionalCompUseEffect() {
    const [data, setData] = useState([])
    const style = {
        width: '100px',
        height: '80px'
    }
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(nodeData => setData(nodeData.data))
    }, [])
    return (
        <>
            <div className="container custCon">
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
            </div>
        </>
    )
}