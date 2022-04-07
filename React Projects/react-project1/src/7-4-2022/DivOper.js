import '../App.css';

export default function DivOper(props) {
    return (
        <>
            <div className="main">
                <button className="btn btn-warning" onClick={() => { props.division(9, 3) }}>DIVIDE</button>
            </div>
        </>
    )
}