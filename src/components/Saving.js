import React from 'react'
import './Saving.css';
import { buildUrl } from '../utils';

const Saving = ({departments}) => {
    
    return (
        <div className="Saving m-2">
            <div className="d-flex justify-content-between"> 
                <h4 className="text-left p-2 m-0 font-weight-bold">Saving Spotlight <i class="fas fa-comment-dollar"></i></h4>
                <h5 className="text-right p-2"><i class="fas fa-angle-double-left"></i> &nbsp; <i class="fas fa-angle-double-right"></i></h5>
            </div>
            
            <div className="holder">
                {
                    departments.map(dept => (
                        dept.name === "Savings spotlight" &&
                        dept.departments.map(dep => (
                            dep.department.title !== "Savings spotlight" &&
                                <a className="card m-1 p-2" key={dep.department.title} href={dep.department.clickThrough.rawValue? buildUrl(dep.department.clickThrough.rawValue) : "#"}>{dep.department.title}</a>
                            
                        ))
                    ))
                }
            </div>
            
        </div>
    )
}

export default Saving; 
