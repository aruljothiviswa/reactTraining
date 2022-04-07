import '../App.css';

export default function MulOper(props) {
    return (
        <>
            <div className="main">
                <button className="btn btn-info" onClick={() => { props.multiply(3, 5) }}>MULTIPLY</button>
            </div>
        </>
    )
}