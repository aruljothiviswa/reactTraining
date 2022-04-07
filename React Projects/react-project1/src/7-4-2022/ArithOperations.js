import AddOper from "./AddOper";
import SubOper from "./SubOper";
import DivOper from "./DivOper";
import Muloper from "./MulOper";
import AllOper from "./AllOperations";
import '../App.css';

export default function ArithOperations() {
    const addResult = (x, y) => {
        console.log(`Sum of ${x} and ${y} is ${x + y}`);
    }

    const subResult = (x, y) => {
        console.log(`Difference of ${x} and ${y} is ${x - y}`);
    }

    const mulResult = (x, y) => {
        console.log(`Product of ${x} and ${y} is ${x * y}`);
    }

    const divResult = (x, y) => {
        console.log(`Quotient of ${x} and ${y} is ${x / y}`);
    }

    return (
        <>
            <h4 className="main"> Arithmetic Operations using 4 Components</h4>
            <AddOper addition={addResult} />
            <SubOper subtract={subResult} />
            <Muloper multiply={mulResult} />
            <DivOper division={divResult} />
            <AllOper addition={addResult} subtract={subResult} multiply={mulResult} division={divResult} />
        </>
    )

}