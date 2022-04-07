import '../App.css';

export default function Destructure(props) {
    const { name, age, address } = props.data;
    return (
        <>
            <div className="main">
                <h3 className='destruc'>DESTRUCTURE</h3>
                <table className="table table-borderless">
                    <tbody>
                        <tr><td>Name</td> <td>{name}</td></tr>
                        <tr><td>Age</td> <td>{age}</td></tr>
                        <tr><td>Address</td> <td>{address}</td></tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}