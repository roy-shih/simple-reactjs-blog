import React,{ useState,useEffect } from 'react';
import {  BrowserRouter ,Route, Routes } from 'react-router-dom';
import './App.css';
import Item from './pages/Item';
import Home from './pages/Home';
import Upload from './pages/Upload';

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
        const res = await (
            await fetch(
                "https://script.google.com/macros/s/AKfycbxNFZD2nndO6Te2cSChF6jZvB9NI7Akv2AcXI3DtlBM9O-qts1YC9eas01xpuqNC-lK/exec?name=表單回應 1&url=https://docs.google.com/spreadsheets/d/1o8Y_YR9pw4sntlq8LLG1P_YGeqEggYQb40Q5gO7Uj1s/edit#gid=140730556"
            )
        ).json();
        res.forEach((item) => {
          var subCategory = [];
          item.subCategory.split(",").forEach((tag) => {
            // remove first space
            tag=tag.replace(/ /, "");
            subCategory.push(tag);
          });
          // remove duplicate tags
          item.subCategory = [...new Set(subCategory)];
          // format date
          item.createdAt = new Date(item.createdAt).toLocaleDateString();
        });
        // set state when the data received
        setData(res);
    };
    dataFetch();
  }, []);
  return (
    <div className='container'>

      <BrowserRouter>           
        <Routes>
          <Route path='/'  element={<Home data={data}/>}/>
          <Route path='/blog/:id' element={<Item data={data} />} />
          <Route path='/upload' element={<Upload />} />
        </Routes>
      </BrowserRouter>           
    </div>
  );
};

export default App;