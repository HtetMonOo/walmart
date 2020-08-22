import React from 'react'
import './Saving.css';

const Saving = ({departments}) => {
    
    return (
        <div className="Saving m-2 rounded-sm">
            <h5 className="text-left p-2 m-0">Saving Spotlight</h5>
            <div className="holder">
                {
                    departments.map(dept => (
                        dept.name === "Savings spotlight" &&
                        dept.departments.map(dep => (
                            dep.department.title === "Savings spotlight" &&
                            dep.categories.map(cat => (
                                <div className="card m-1 p-2" key={cat.category.title}>{cat.category.title}</div>
                            ))
                        ))
                    ))
                }
            </div>
            
        </div>
    )
}

export default Saving; 
