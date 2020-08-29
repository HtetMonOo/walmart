import React, { useState, useEffect } from 'react';
import './Item.css';
import { buildUrl } from "../utils";
import Axios from 'axios';
import { getProducts } from '../utils';

const Item = ({category, filterValue}) => {

    //const [ filter, setFilter ] = useState({});
    
    const [ products, setProducts ] = useState([]);
    const url=getProducts(category);

    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async() => {
        try{
            Axios.get(url).then(res => {
                setProducts(res.data);
                console.log(res.data);
                //setFetching(false);
            })
        }catch{
            setProducts([]);
        }
    }

    return (
        <>
            <div className="Item">
            <h3 className="title w-100">{products.CategoryDisplayName}</h3>
            <div className="container">
            <div className="row">
            {
                products.length !== 0 && products.CatalogProducts.length !== 0 &&
                products.CatalogProducts.map( product => (
                    <div className="col-6 col-md-4 col-lg-2 mb-4 d-flex align-items-stretch" key={product.ItemCode}>
                        <a className="card m-0 pointer" href={product.ProductShareLinkUrl}>
                        <div className="view overlay">
                            <img className="card-img-top" src={buildUrl(product.ImageFilename)} alt="Card image cap"></img>
                        </div>
    
                        <div className="card-body p-1">
                            <p className="card-title">{product.DisplayName}</p>
                        </div>
                        <div className="card-footer d-flex justify-content-between border-0">
                            <small className="text-warning">USD  {product.ListPrice}</small>
                            <small className=""><i className="fas fa-star"></i>4/5</small>
                        </div>
                        </a>
                    </div> 
                ))
            }
            </div>
        </div> 
        </div>
         </>
    )
}

export default Item;