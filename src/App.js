import React, { useEffect, useState } from 'react';
import './App.css';
import './font/css/all.css';
import FrontPage from './components/FrontPage.js';
import MainNav from './components/MainNav';
import Item from './components/Item';
import Saving from './components/Saving';
import Axios from 'axios';
import { appendApiKey, getProducts } from './utils';
import Category from './components/Category';

const App = () => {

  const [ categories, setCategories ] = useState([]);
  const url_cat = appendApiKey("categories/list");
  const [ products, setProducts ] = useState([]);
  const [ showCatalog, setShowCatalog ] = useState(false);

  useEffect(() => {
      fetchCategories();
  }, [])

  const fetchCategories = async() => {
      try{
          const res_cat = await Axios.get(url_cat);
          setCategories(res_cat.data.ChildMenus);
          console.log(res_cat.data.ChildMenus);
      }catch{
          setCategories([]);
      }
  }

  const fetchProducts = async(category) => {
    const url_prod=getProducts("products/list",category);
    try {
      const res_prod = await Axios.get(url_prod);
      setProducts(res_prod.data);
      console.log(res_prod.data);
    }catch {
      setProducts([]);
    }
  }

  const getCatalog = (category) => {
    fetchProducts(category);
    setShowCatalog(true);
  }
  return (
    <div className="App">
      <MainNav categories={categories} getCatalog={getCatalog()}/>
      <FrontPage />
      <div className="Container">
        <Saving categories={categories}/>
        { showCatalog && <Item products={products}/> }
        {/* <Category categories={categories} /> */}
      </div>
      

    </div>
  )
}

export default App;