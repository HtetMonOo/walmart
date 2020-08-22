import React from 'react'
import './UpperNav.css';

const UpperNav = () => {
    return (
        <div className="UpperNav d-flex justify-content-center align-items-center">
            <h4>Walmart.com </h4><img src={require("../img/walmart-icon.png")}></img>
        </div>
    )
}

export default UpperNav
