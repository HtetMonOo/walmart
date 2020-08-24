import React from 'react'
import FrontPage from './FrontPage';
import Saving from './Saving';
import './Container.css';

const Container = ({categories, }) =>{
    return (
        <div className="Container">
          <FrontPage />
          <Saving categories={categories}/>
          {/* <Category categories={categories} /> */}
        </div> 
    )
}

export default Container
