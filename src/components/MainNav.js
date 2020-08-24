import React from 'react'
import './MainNav.css';
import UpperNav from './UpperNav';
import LowerNav from './LowerNav';


const MainNav = ({categories, getCatalog}) => {
    return (
        <div className="MainNav"> 
            <UpperNav />
            <LowerNav categories={categories} getCatalog={getCatalog}/>
        </div>
    )
}

export default MainNav;
