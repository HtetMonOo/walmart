import React from 'react'
import './MainNav.css';
import UpperNav from './UpperNav';
import LowerNav from './LowerNav';


const MainNav = ({categories, getCatalog, search}) => {
    return (
        <div className="MainNav"> 
            <UpperNav search={search}/>
            <LowerNav categories={categories} getCatalog={getCatalog}/>
        </div>
    )
}

export default MainNav;
