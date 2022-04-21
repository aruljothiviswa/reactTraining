
import { productData } from './productDetails.js';
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductDisplay() {
    const navigate = useNavigate();
    let [product, setProduct] = useState({
        productId: '', productName: "", price: "", description: "", ProductImg: ""
    })
    let { productId, productName, price, description, ProductImg } = product;
    const data = productData;
    const params = useParams()
    const prodId = params.id;
    data.forEach(ele => {
        if (ele.productId === prodId) {
            console.log("dtaaaa", data)
            productId = ele.productId;
            productName = ele.productName;
            price = ele.price;
            description = ele.description;
            ProductImg = ele.ProductImg;
        }
    })

    return (
        <>
            <div className='container' style={{marginLeft:'2%'}}>
                <div className='row'>
                    <div className='col-5'>
                        <img style={{ width: '100%' }} src={ProductImg}></img>
                    </div>

                    <div className='col-7'>
                        <h2 class="custTitle">{productName} Details</h2>
                        <table className='custTab'>
                            <tr>
                                <td>Product Id</td><td>{productId}</td>
                            </tr>
                            <tr>
                                <td>Product Name</td><td>{productName}</td>
                            </tr>
                            <tr>
                                <td>Description</td><td>{description}</td>
                            </tr>
                            <tr>
                                <td>Price</td><td>{price}</td>
                            </tr>
                        </table>
                        <div className='col'>
                            <button className='btn btn-success custbtn' onClick={() => navigate(-1)}>Back</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}