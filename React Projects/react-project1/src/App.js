import ArithOperations from "./7-4-2022/ArithOperations";
import Destructure from "./7-4-2022/deStructure";
import ProductsComp from './components1/ProductsComp';
import CardComp from "./7-4-2022/CardComp";

export default function App() {
  let detail = {
    name: "Jaigath",
    age: "9",
    address: 'Choa chu kang,Singapore '
  }
  var data = [{ productId: '101', productName: 'LG Mobile', price: 15000, ProductImg: '/phone.jpg', description: 'Latest mobile phone ' },
  { productId: '102', productName: 'LG Washing Machine', price: 30000, ProductImg: '/Washing-Machine.jpg', description: 'Front Load Washing Machine' },
  { productId: '103', productName: 'LG LED TV', price: 45000, ProductImg: '/tv.jpg', description: '64 inch LED TV' },
  { productId: '104', productName: 'LG Monitor', price: 10000, ProductImg: '/monitor.jpg', description: '32 inch Monitor' },
  { productId: '105', productName: 'LG refrigerator', price: 20000, ProductImg: '/refrigerator.jpeg', description: 'Double door refrigerator' }];

  return (
    <>
      {/* <Destructure data={detail} />
      <ArithOperations /> */}
      <ProductsComp data={data} />
      {/* <CardComp val={data}/> */}
    </>
  )
}









// import FunctionComp from './Components/FunctionComp';
// import ClassComp from './Components/ClassComp';

// function App() {
//   return (
//     <>
//     <FunctionComp />
//     <ClassComp productName="Samsung Mobile" price="35000" />
//     </>
//   );
// }
// export default App;



// import ProductsComp from './components1/ProductsComp';

// function App() {
//   var data = [{ productId: '101', productName: 'LG Mobile', price: 15000, ProductImg: '/phone.jpg', description: 'Latest mobile phone ' },
//   { productId: '102', productName: 'LG Washing Machine', price: 30000, ProductImg: '/Washing-Machine.jpg', description: 'Front Load Washing Machine' },
//   { productId: '103', productName: 'LG LED TV', price: 45000, ProductImg: '/tv.jpg', description: '64 inch LED TV' },
//   { productId: '104', productName: 'LG Monitor', price: 10000, ProductImg: '/monitor.jpg', description: '32 inch Monitor' },
//   { productId: '105', productName: 'LG refrigerator', price: 20000, ProductImg: '/refrigerator.jpeg', description: 'Double door refrigerator' }];
//   return (
//     <>
//       <ProductsComp data={data} />
//     </>
//   );
// }
// export default App;
