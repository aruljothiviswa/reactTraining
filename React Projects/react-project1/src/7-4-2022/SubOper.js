import '../App.css';

export default function SubOper(props) {
    return (
        <>
            <div className="main">
                <button className="btn btn-primary" onClick={() => { props.subtract(8, 1) }}>SUBTRACT</button>
            </div>
        </>
    )
}