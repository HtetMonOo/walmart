import React from 'react';
import './Item.css';

const Item = ({category, products}) => {
    
    return (
        <div className="Item mt-3">
            <div className="container">
            <div class="row">
            {
                products.map( product => (
                    <div className="col-6 col-md-4 col-lg-3 mb-4 d-flex align-items-stretch" key={product.usItemId}>
                        <div className="card m-0 pointer">
                        <div className="view overlay">
                            <img className="card-img-top" src={product.imageUrl} alt="Card image cap"></img>
                        </div>
    
                        <div className="card-body p-1">
                            <p className="card-title">{product.title}</p>
                        </div>
                        <div className="card-footer d-flex justify-content-between border-0">
                            <small className="text-warning">{product.primaryOffer.currencyCode}  {product.primaryOffer.offerPrice}</small>
                            <small className=""><i class="fas fa-star"></i> {product.customerRating}</small>
                        </div>
                        </div>
                    </div> 
                ))
            }
            </div>
            </div>
        </div>
    )
}

export default Item;