import React from 'react';
import './App.css';
import Axios from 'axios';
import { appendApiKey } from './utils';

const App = () => {
  const url = appendApiKey("list");

Axios.get(url)
    .then((response)=>{
      console.log(response);
    })
    .catch((error)=>{
      console.log(error);
    })
  return (
    <div className="App">
        Happy shopping!
    </div>
  )
}

export default App;