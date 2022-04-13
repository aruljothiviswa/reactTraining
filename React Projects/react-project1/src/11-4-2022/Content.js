import { useState } from 'react';
import '../App.css';

export default function Content(props) {
    var noDataFound = '';
    var searchArr = props.data;
   
    const [search, setSearch] = useState('')
    // const searchResult = (event) => {
    //     debugger;
    //     searchArr = props.data.filter(value => {
    //         if (String((value.productId).toLowerCase()).includes((search).toLowerCase()) || String((value.productName).toLowerCase()).includes((search).toLowerCase()) ||
    //             String(value.price).includes((search).toLowerCase()) || String((value.description).toLowerCase()).includes((search).toLowerCase())) {
    //             return value;
    //         }
    //     })
    //     if (searchArr.length === 0) noDataFound = "No Data Found......"
    //     setSearch(event.target.value);
    // }

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
                <h1 className="functionClass">LG Product Details</h1>
                <div className="row" style={{ padding: '2%' }}>
                    {searchArr.filter(value => {
                        if (String((value.productId).toLowerCase()).includes((search).toLowerCase()) || String((value.productName).toLowerCase()).includes((search).toLowerCase()) ||
                            String(value.price).includes((search).toLowerCase()) || String((value.description).toLowerCase()).includes((search).toLowerCase())) {
                            return value;
                        }
                    }).map((item) => (
                        <div key={item.productId} className="col-sm-6 col-md-4 col-lg-3">
                            <div className="card border-success mb-3 custCard">
                                <div className="card-header bg-transparent border-success">{item.productId}-{item.productName}</div>
                                <img className="card-img-top" src={item.ProductImg} alt="Card"></img>
                                <div className="card-body text-success">
                                    <h5 className="card-title">{item.productName}</h5>
                                    <p className="card-text">{item.description}</p>
                                </div>
                                <div className="card-footer bg-transparent border-success">Price : {item.price}</div>
                            </div>
                        </div>
                    ))
                    }
                    <div className="message">{noDataFound}</div>
                </div>

            </div>
        </>
    )
}
