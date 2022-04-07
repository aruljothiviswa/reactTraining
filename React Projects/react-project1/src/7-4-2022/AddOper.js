import '../App.css';

export default function AddOper(props) {
    return (
        <>
            <div className="main">
                <button className="btn btn-success" onClick={() => { props.addition(5, 2) }}>ADD</button>
            </div>
        </>
    )
}