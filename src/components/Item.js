import React, { useState } from 'react';
import './Item.css';
import { appendApiKey, buildUrl } from "../utils";
import Axios from 'axios';
import Item_modal from './Item_modal';

const Item = ({products}) => {

    const [ showModal, setShowModal ] = useState(false);
    
    const [ detail, setDetail ] = useState();

    // useEffect(() => {
    //     showProduct(id);
    // }, [])
    // const showProduct = async(id) => {
    //     console.log(showModal)
    //     const url = appendApiKey("products/get-details&usItemId="+id);
    //     try{
    //         const res_cat = await Axios.get(url);
    //         setDetail(res_cat.data.productByProductId);
    //     }catch{
    //         setDetail("");
    //     }
    //         setShowModal(true);
        
    // }
    
    return (
        <div className="Item mt-3">
            <div className="card-title">{products.CategoryDisplayName}</div>
            <div className="container">
            <div className="row">
            {
                products.CatalogProducts.map( product => (
                    <div className="col-6 col-md-4 col-lg-3 mb-4 d-flex align-items-stretch" key={product.usItemId}>
                        <a className="card m-0 pointer" href={product.ProductShareLinkUrl}>
                        <div className="view overlay">
                            <img className="card-img-top" src={buildUrl(product.ImageFilename)} alt="Card image cap"></img>
                        </div>
    
                        <div className="card-body p-1">
                            <p className="card-title">{product.DisplayName}</p>
                        </div>
                        <div className="card-footer d-flex justify-content-between border-0">
                            <small className="text-warning">USD  {product.ListPrice}</small>
                            <small className=""><i className="fas fa-star"></i> 4/5 </small>
                        </div>
                        </a>
                        {/* {
                            showModal ?
                            <Item_modal onHide={() => setShowModal(false)} detail={detail} price={product.primaryOffer.offerPrice}></Item_modal>
                            : " "
                        } */}
                        </div> 
                ))
            }
            </div>
            </div>
        </div>
    )
}

export default Item;