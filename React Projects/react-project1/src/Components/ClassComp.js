import { Component } from 'react';
import '../App.css';

class ClassComp extends Component {
    name;
    price;
    constructor() {
        super()
        this.state = {
            producitId: "101",
            productName: "LG Mobile",
            price: "25000",
            description: " Storage:128GB | 8GB, Colour: Graphite"
        }
    }

    updateProduct = () => {
        this.setState({ productName: this.name, price: this.price }, () => alert("Product name and price updated successfully"))
    }

    render() {
        this.name = this.props.productName;
        this.price = this.props.price;
        return (
            <>
                <div className="App">
                    <table >
                        <tr>
                            <td className="heading">Product ID</td>
                            <td className="content">{this.state.producitId}</td>
                        </tr>
                        <tr>
                            <td className="heading">ProductName</td>
                            <td className="content">{this.state.productName}</td>
                        </tr>
                        <tr>
                            <td className="heading">Price</td>
                            <td className="content"> {this.state.price}</td>
                        </tr>
                        <tr>
                            <td className="heading">description</td>
                            <td className="content"> {this.state.description}</td>
                        </tr>
                    </table><br></br>
                    <button className={'btn btn-primary'} type="submit" onClick={this.updateProduct}>Click to change</button>
                </div>
            </>
        )
    }
}
export default ClassComp;