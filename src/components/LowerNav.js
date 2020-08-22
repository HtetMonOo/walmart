import React from 'react'
import './LowerNav.css';

const LowerNav = ({category}) => {
    return (
        <div className="LowerNav">
            <nav className="navbar navbar-expand-lg">
                <div className="collapse navbar-collapse" id="navbarSupportedContent-333">
                    <ul className="navbar-nav mr-auto">

                    <li className="nav-item dropdown">
  <a className="nav-link dropdown-toggle">Dropdown</a>
    <div className="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#" classname="dropdown-submenu">Link 3</a>
            <div className="dropdown-item">
                <a href="#">link new</a>
            </div>
  </div>
</li>
                        
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="true"> <span className="nav-label">Departments</span> <span className="caret"></span>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink-333">
                                {
                                    category.map( cat =>
                                        <li className="dropdown-submenu "  key={cat.name}>
                                            <a className="dropdown-item dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> 
                                                <span className="nav-label" >{cat.name}</span><span class="caret"></span></a> 
                                            <ul className="dropdown-menu dropdown-default"  aria-labelledby="navbarDropdownMenuLink-333">
                                                {
                                                    cat.departments.map( dep => (
                                                        <li><a href="#" className="dropdown-item dropdown-toggle">dep.department.title</a></li>
                                                    ))
                                                }
                                            </ul>
                                        </li>
                                    )
                                }
                            </ul>
                        </li> */}
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home
                            <span className="sr-only">(current)</span>
                            </a>
                        </li>
                    </ul>
                    <div className="input-group">
                        <input type="text" class="form-control" placeholder="Search for..."></input>
                        <span className="input-group-btn">
                            <button className="btn btn-search" type="button"><i className="fa fa-search fa-fw"></i></button>
                        </span>
                    </div>
                    
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
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
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
        </div>
    )
}

export default LowerNav;
