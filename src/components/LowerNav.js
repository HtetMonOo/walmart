import React from 'react'

const LowerNav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="categoryDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Categories
                    </a>
                    <ul className="dropdown-menu" role="menu" aria-labelledby="categoryDropdown">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li className="divider"></li>
                        <li><a href="#">Something else here</a></li>
                    </ul>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-1 border" type="search" placeholder="Search" aria-label="Search"></input>
                    <div className="input-group-btn border rounded">
                        <button className="btn btn-default px-2 py-1" type="submit">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </form>
            </div>
        </nav>
    )
}

export default LowerNav;
