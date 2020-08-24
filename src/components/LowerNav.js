import React from 'react'
import './LowerNav.css';

const LowerNav = ({categories, getCatalog}) => {
    return (
        <nav className="LowerNav navbar navbar-expand-lg navbar-dark special-color-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent2"
                aria-controls="navbarSupportedContent2" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent2">
                <ul className="navbar-nav mr-auto">
                    {
                    categories.map( cat => (
                    <li className="nav-item dropdown mega-dropdown active  position-static" key={cat.Name}>
                        <a className="nav-link dropdown-toggle text-uppercase" id="navbarDropdownMenuLink2" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">{cat.Name}
                        <span className="sr-only">(current)</span>
                        </a>
                            <div className="dropdown-menu mega-menu v-2 z-depth-1 special-color py-5 px-3 w-100"
                            aria-labelledby="navbarDropdownMenuLink2">
                            <div className="row w-100">
                            {
                                cat.ChildMenus.map( sub_cat => (
                                    <div className="col-md-6 col-xl-3 sub-menu mb-xl-0 mb-4" key={sub_cat.Name}>
                                        <h6 className="sub-title text-uppercase font-weight-bold white-text">{sub_cat.Name}</h6>
                                        <ul className="list-unstyled">
                                        {
                                            sub_cat.ChildMenus.map( link => (
                                                <li key={link.Name}>
                                                <div className="menu-item pl-0" onClick={()=>{getCatalog(link.Category)}}>
                                                    <i className="fas fa-caret-right pl-1 pr-3"></i>{link.Name}
                                                </div>
                                                </li>
                                            ))
                                        }   
                                        </ul>
                                    </div>
                                ))
                            }   
                            </div>     
                        </div>
                    </li>
                         ))
                        }
                    </ul>
                    <ul className="navbar-nav ml-auto nav-flex-icons">
                    <li className="nav-item">
                        <a className="nav-link waves-effect waves-light">
                        <i className="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link waves-effect waves-light">
                        <i className="fab fa-google-plus-g"></i>
                        </a>
                    </li>
                    
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-user"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right dropdown-default"
                        aria-labelledby="navbarDropdownMenuLink-333">
                        <a className="dropdown-item" href="#">Sign in</a>
                        <a className="dropdown-item" href="#">Sign up</a>
                        </div>
                    </li>

                    <li className="nav-item">
                    <a className="nav-link waves-effect waves-light">
                        <i className="fas fa-shopping-cart"></i>
                        </a>
                    </li>
            </ul>
            </div>
        </nav>
    )
}

export default LowerNav;
