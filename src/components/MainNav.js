import React from 'react'
import './MainNav.css';
import UpperNav from './UpperNav';
import LowerNav from './LowerNav';


const MainNav = ({categories}) => {
    return (
        <div className="MainNav"> 
            <UpperNav />
            <LowerNav categories={categories}/>
        </div>
    )
}

export default MainNav;
