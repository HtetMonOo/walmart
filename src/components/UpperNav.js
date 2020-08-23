import React from 'react'
import './UpperNav.css';

const UpperNav = () => {
    return (
        <div className="UpperNav d-flex justify-content-center align-items-center">
            <h4>Walmart.com </h4><img src={require("../img/walmart-icon.png")}></img>
            <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for..."></input>
                        <span className="input-group-btn">
                            <button className="btn btn-search" type="button"><i className="fa fa-search fa-fw"></i></button>
                        </span>
                    </div>
                    
        </div>
    )
}

export default UpperNav
