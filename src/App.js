import React from 'react';
import './App.css';
import './font/css/all.css';
import FrontPage from './components/FrontPage.js';
import MainNav from './components/MainNav';

const App = () => {
  return (
    <div className="App">
      <MainNav />
      <FrontPage />
    </div>
  )
}

export default App;