export default function AllOper(props) {
    return (
        <>
            <h4 className="main"> Arithmetic Operations using Single Components</h4>
            <div className="main">
                <button className="btn btn-outline-danger" onClick={() => { props.addition(5, 2) }}>ADD</button>&nbsp;
                <button className="btn btn-outline-danger" onClick={() => { props.subtract(8, 1) }}>SUBTRACT</button>&nbsp;
                <button className="btn btn-outline-danger" onClick={() => { props.multiply(3, 5) }}>MULTIPLY</button>&nbsp;
                <button className="btn btn-outline-danger" onClick={() => { props.division(9, 3) }}>DIVIDE</button>
            </div>
        </>
    )
}