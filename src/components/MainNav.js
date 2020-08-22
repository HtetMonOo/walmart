import React from 'react'
import './MainNav.css';
import UpperNav from './UpperNav';
import LowerNav from './LowerNav';


const MainNav = ({category}) => {
    return (
        <div className="MainNav"> 
            <UpperNav />
            <LowerNav category={category}/>
        </div>
    )
}

export default MainNav;
