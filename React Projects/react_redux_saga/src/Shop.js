import React from 'react'
import { bindActionCreators } from 'redux'
import { buyBook, sellBook, fetchUserSuccess } from './redux/actions/actionBook'
import { connect } from 'react-redux'
import './App.css'
function Shop(props) {
    return (
        <>
            <h1 className='heading'>REACT REDUX USING SAGA</h1>
            <div className='item'>
                <p>Books Info</p>
                <p>Available Books: {props.numOfBooks}</p>
                <button className="custButton" onClick={props.buyBook}>BuyBook</button>
                <button className="custButton" onClick={props.sellBook}>SellBook</button>
            </div>
            <div className='item'>
                <p>User Info</p>
                <p>Available User: {props.users.length}</p>
                <button className="custButton" onClick={props.fetchUserSuccess}>User Count</button>
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    console.log("state",state)
    return {
        numOfBooks: state.books.numOfBooks,
        users: state.users.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        buyBook, sellBook, fetchUserSuccess
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Shop)