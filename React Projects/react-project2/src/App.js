import ParentComponent from "./15-4-2022/ParentComponent";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WebPage from "./15-4-2022 Router/WebPage";
import { Route, Routes } from "react-router-dom";
import Content from './15-4-2022 Router/Content';
import ContactUs from './15-4-2022 Router/ContactUs';
import EmpContent from './15-4-2022 Router/EmpContent';
import AboutUs from './15-4-2022 Router/AboutUs';
import Registration from './15-4-2022 Router/Registration';
// import LifeCycle from './15-4-2022 Router/LifeCycle';
import NotFound from "./15-4-2022 Router/NotFound";

export const dataContext = React.createContext();

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(nodeData => setData(nodeData.data))
  }, [])

  return (
    <div className="App">

      <WebPage />
      <Routes>
        <Route path='/' element={<Content />}></Route>
        <Route path='/AboutUs' element={<AboutUs />}></Route>
        <Route path='/ContactUs' element={<ContactUs />}></Route>
        <Route path='/Registration' element={<Registration />}></Route>
        <Route path='/EmployeeDetails' element={<EmpContent />}></Route>
        <Route path='/Products' element={<dataContext.Provider value={data}>
          <ParentComponent />
        </dataContext.Provider>}></Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;