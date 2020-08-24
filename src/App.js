import React, { useEffect, useState } from 'react';
import './App.css';
import './font/css/all.css';
import Item from './components/Item';
import MainNav from './components/MainNav';
import Axios from 'axios';
import { appendApiKey } from './utils';
import Container from './components/Container';

const App = () => {

  const [ categories, setCategories ] = useState([]);
  const url_cat = appendApiKey("categories/list");
  const [ showCatalog, setShowCatalog ] = useState(false);
  const [ cat_name, setCat_name ] = useState("");

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
  return (
    <div className="App">
      
      <MainNav categories={categories} getCatalog={getCatalog} />
      {
        showCatalog ? <Item category={cat_name}></Item> :
          <Container categories={categories} getCatalog={getCatalog} ></Container>  
      }
    </div>
  )
}

export default App;