import React, { useEffect, useState } from 'react';
import './App.css';
import './font/css/all.css';
import Item from './components/Item';
import MainNav from './components/MainNav';
import Axios from 'axios';
import { appendApiKey, searchProducts } from './utils';
import Container from './components/Container';
import Product from './components/Product';

const App = () => {

  const [ categories, setCategories ] = useState([]);
  const url_cat = appendApiKey("categories/list");
  const [ showCatalog, setShowCatalog ] = useState(false);
  const [ cat_name, setCat_name ] = useState("");
  const [ searchProd, setSearchProd ] = useState([]);
  const [ showSearch, setShowSearch ] = useState(false);
  

  useEffect(() => {
      fetchCategories();
  }, [])

  const fetchCategories = async() => {
      try{
          const res_cat = await Axios.get(url_cat);
          setCategories(res_cat.data.ChildMenus);
      }catch{
          setCategories([]);
      }
  }

  const getCatalog = (category) => {
    setCat_name(category);
    setShowCatalog(true);
    
  }

  const search = (query) => {
    console.log(query);
    Axios.get(searchProducts(query)).then(res => {
      // setShowCatalog(false);
      console.log(res.data);
      setSearchProd(res.data.response);
      setShowSearch(true);
      }
    )
  }
  return (
    <div className="App">
      
      <MainNav categories={categories} getCatalog={getCatalog} search={search}/>
      {
        showSearch ? <Product search={searchProd}></Product> : ""
        // showCatalog ? <Item category={cat_name}></Item> :
        //   <Container categories={categories} getCatalog={getCatalog} ></Container> ) 
      }
    </div>
  )
}

export default App;