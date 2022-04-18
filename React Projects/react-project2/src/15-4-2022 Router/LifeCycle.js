import React, { Component } from 'react'
import '../App.css';

export default class LifeCycle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: [],
            search: ''
        }
    }
    style = {
        width: '100px',
        height: '80px'
    }
    resetResult = () => {
        this.setState({ search: '' })
    }
    componentDidMount() {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                console.log("products", data)
                this.setState({ products: data })
            }).catch(err => console.log(err))
    }
    setSearch = (event) => {
        this.setState({ search: event.target.value })
    }

    render() {
        return (
            <>
                <div className="container custCont">
                    <div className="row">
                        <div className="col">
                            <input className="search" value={this.state.search} onChange={this.setSearch} />&nbsp;
                            <button className='btn btn-primary btn-sm' onClick={this.resetResult}>
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
                            {this.state.products.filter(value => {
                                if (String(value.id).includes((this.state.search).toLowerCase()) || value.category.toLowerCase().includes((this.state.search).toLowerCase()) ||
                                    value.description.toLowerCase().includes((this.state.search).toLowerCase()) || String(value.price).includes((this.state.search).toLowerCase()) || String(value.rating.rate).includes((this.state.search).toLowerCase())) {
                                    return value;
                                }
                            }).map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.category}</td>
                                    <td>{item.description}</td>
                                    <td>{item.price}</td>
                                    <td><img style={this.style} src={item.image}></img></td>
                                    <td>{item.rating.rate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </>
        )
    }
}