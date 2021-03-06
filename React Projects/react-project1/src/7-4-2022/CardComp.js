import '../App.css';

export default function CardComp(props) {
    let tempArr = [...props.val];
    console.log(tempArr)

    return (
        <>
            <h1 className="functionClass">LG Product Details</h1>
            <div className="row" style={{ padding: '2%' }}>
                {tempArr.map((item) => (
                    <div key={item.productId} className="col-sm-6 col-md-4 col-lg-3">
                        <div className="card border-success mb-3" style={{ 'maxWidth': '300px', 'minHeight': '450px' }}>
                            <div className="card-header bg-transparent border-success">{item.productId}-{item.productName}</div>
                            <img className="card-img-top" src={item.ProductImg} alt="Card image cap"></img>
                            <div className="card-body text-success">
                                <h5 className="card-title">{item.productName}</h5>
                                <p className="card-text">{item.description}</p>
                            </div>
                            <div className="card-footer bg-transparent border-success">Price : Rs.{item.price}</div>
                        </div>
                    </div>
                ))
                }
            </div>
        </>
    )
}

