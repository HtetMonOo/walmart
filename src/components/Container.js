import React from 'react'
import FrontPage from './FrontPage';
import Saving from './Saving';
import './Container.css';
import MenNewArrival from './MenNewArrival';
import WomenNewArrival from './WomenNewArrival';
import GirlNewArrival from './GirlNewArrival';

const Container = ({categories, getCatalog}) =>{
    return (
        <div className="Container">
          <FrontPage />
          <Saving categories={categories} getCatalog={getCatalog}/>
          <MenNewArrival getCatalog={getCatalog}/>
          <WomenNewArrival getCatalog={getCatalog}/>
          <GirlNewArrival getCatalog={getCatalog}/>
        </div> 
    )
}

export default Container
