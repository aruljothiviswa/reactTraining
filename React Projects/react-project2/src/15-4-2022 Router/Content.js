import { Component } from 'react';
import '../App.css';
import { productData } from './productDetails.js'

class Content extends Component {
    data = productData;

    constructor(props) {
        super(props)
        this.state = {
            searchVal: '',
            tempArr: this.data,
            noData: ''
        }
    }
    searchResult = () => {
        var noDataFound = ''
        var searchArr = this.data.filter(value => {
            if (String((value.productId).toLowerCase()).includes((this.state.searchVal).toLowerCase()) || String((value.productName).toLowerCase()).includes((this.state.searchVal).toLowerCase()) ||
                String(value.price).includes((this.state.searchVal).toLowerCase()) || String((value.description).toLowerCase()).includes((this.state.searchVal).toLowerCase())) {
                return value;
            }
        })
        if (searchArr.length === 0) noDataFound = "No Data Found......"
        this.setState({ tempArr: searchArr, noData: noDataFound })
    }

    updateInputValue(evt) {
        const val = evt.target.value;
        this.setState({
            searchVal: val
        });
    }

    render() {
        return (
            <>
                <div className="container custContain">
                    <div className="row">
                        <div className="col">
                            <input className="search" value={this.state.searchVal} onChange={evt => this.updateInputValue(evt)} />&nbsp;
                            {/* <input className="search" id="searchValue"></input>&nbsp; */}
                            <button className='btn btn-primary btn-sm' onClick={this.searchResult}>
                                <span className="fas fa-search"></span>
                                <span className="d-none d-sm-none d-xs-none d-md-inline d-lg-inline"> Search</span></button>
                        </div>
                    </div>
                    <h1 className="functionClass">LG Product Details</h1>
                    <div className="row" style={{ padding: '2%' }}>
                        {this.state.tempArr.map((item) => (
                            <div key={item.productId} className="col-sm-6 col-md-4 col-lg-3 custCardRow">
                                <div className="card border-success mb-3 custCard">
                                    <div className="card-header bg-transparent border-success">{item.productId}-{item.productName}</div>
                                    <img className="card-img-top" src={item.ProductImg} alt="Card"></img>
                                    <div className="card-body text-success">
                                        <h5 className="card-title">{item.productName}</h5>
                                        <p className="card-text">{item.description}</p>
                                    </div>
                                    <div className="card-footer bg-transparent border-success">Price : Rs.{item.price}</div>
                                </div>
                            </div>
                        ))
                        }
                        <div className="message">{this.state.noData}</div>
                    </div>

                </div>
            </>
        )
    }
}
export default Content;