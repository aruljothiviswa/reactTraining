import '../App.css';

export default function ProdComp(props) {
    let tempArr = [...props.val];
    var style = {
        width: '100px',
        height: '80px'
    }
    return (
        <>
            <h1>LG Product Details</h1>
            <table className="table table-striped">
                <tbody>
                    <tr>
                        <th>Product Id</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Image</th>
                    </tr>
                    {tempArr.map((item) => (
                        <tr>
                            <td>{item.productId}</td>
                            <td>{item.productName}</td>
                            <td>{item.price}</td>
                            <td>{item.description}</td>
                            <td><img style={style} src={item.ProductImg}></img></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}