import '../App.css';
import ProdComp from '../components1/prodComp';

export default function ProductsComp(props) {
    let tempArr = [...props.data];
    let product = props.data.map(value => {
        if (value.price >= 30000) value.price -= (value.price * 20 / 100)
        else value.price -= (value.price * 10 / 100)
        return value;
    })
    console.log("temp array value",tempArr)
    console.log("product array value",product)

    return (
        <>
            <ProdComp value={product}/>
        </>
    )
}