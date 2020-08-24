import React, { useState } from 'react'
import './UpperNav.css';

const UpperNav = () => {
    const [ searchTerm, setSearchTerm ] = useState("");
    return (
        <div className="UpperNav d-flex justify-content-center align-items-center" id="mainnav">
            <h4>Forever 21 &nbsp; &nbsp;</h4>
            <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for..." onChange={(value)=>setSearchTerm(value)}></input>
                        <span className="input-group-btn">
                            <button className="btn btn-search" type="button"><i className="fa fa-search fa-fw"></i></button>
                        </span>
                    </div>
                    
        </div>
    )
}

export default UpperNav
