import React, { Component } from "react";
import { buyBook } from '../src/redux/actions/action';
import { buyPen } from '../src/redux/actions/action';
import { buyMobile } from '../src/redux/actions/action';
import { connect } from 'react-redux';
import '../src/App.css';

class ReactRedux extends Component {
    render() {
        return (
            <>
                <h1 className='title'>Products Count</h1><hr />
                <div className='product'>
                    <p>Books</p>
                    <p>Available:{this.props.noOfBooks}</p>
                    <button className="buttonClass" onClick={this.props.buyBook}>Buy</button>
                </div>
                <div className='product'>
                    <p>Pens</p>
                    <p>Available:{this.props.noOfPen}</p>
                    <button className="buttonClass" onClick={this.props.buyPen}>Buy</button>
                </div>
                <div className='product'>
                    <p>Mobiles</p>
                    <p>Available:{this.props.noOfMobile}</p>
                    <button className="buttonClass" onClick={this.props.buyMobile}>Buy</button>
                </div>

            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        noOfBooks: state.books.noOfBooks,
        noOfPen: state.pens.noOfPen,
        noOfMobile: state.mobiles.noOfMobile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyBook: () => dispatch(buyBook()),
        buyPen: () => dispatch(buyPen()),
        buyMobile: () => dispatch(buyMobile())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReactRedux)