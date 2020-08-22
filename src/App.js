import React, { useEffect, useState } from 'react';
import './App.css';
import './font/css/all.css';
import FrontPage from './components/FrontPage.js';
import MainNav from './components/MainNav';
import Item from './components/Item';
import Saving from './components/Saving';
import Axios from 'axios';
import { appendApiKey } from './utils';
import Category from './components/Category';

const App = () => {

  const [ departments, setDepartments ] = useState([]);
  const url_cat = appendApiKey("departments/list");
  const url_prod=appendApiKey("products/list");
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
      fetchDepartments();
      fetchProducts();
  }, [])

  const fetchDepartments = async() => {
      try{
          const res_cat = await Axios.get(url_cat);
          setDepartments(res_cat.data.departments);
      }catch{
          setDepartments([]);
      }
  }

  const fetchProducts = async() => {
    try {
      const res_prod = await Axios.get(url_prod);
      setProducts(res_prod.data.items);
      console.log(res_prod.data.items);
    }catch {
      setProducts([]);
    }
  }
  return (
    <div className="App">
      <MainNav category={departments}/>
      <FrontPage />
      <div className="Container">
        <Saving departments={departments}/>
        {/* <Item category="Back to school" products={products}/> */}
        <Category category={departments} />
      </div>
      

    </div>
  )
}

export default App;