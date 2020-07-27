import React from 'react'
import './MainNav.css';
import UpperNav from './UpperNav';
import LowerNav from './LowerNav';


const MainNav = () => {
    return (
        <div className="MainNav">
            <UpperNav />
            <LowerNav />
        </div>
    )
}

export default MainNav;
