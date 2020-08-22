import React from 'react'
import './MainNav.css';
import UpperNav from './UpperNav';
import LowerNav from './LowerNav';


const MainNav = ({departments}) => {
    return (
        <div className="MainNav"> 
            <UpperNav />
            <LowerNav departments={departments}/>
        </div>
    )
}

export default MainNav;
