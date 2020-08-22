import React from 'react';
import './Item.css';
import PageNo from './PageNo';

const Item = ({category, products}) => {
    
    return (
        <div className="Item">
            <div className="row">
            {
                products.map( product => (
                    // product.department===category && (
                    <div className="col-6 col-md-4 col-lg-3 mb-4" key={product.usItemId}>
                        <div className="card">
                        <div className="view overlay">
                            <img className="card-img-top" src={product.imageUrl} alt="Card image cap"></img>
                            <a>
                                <div className="mask rgba-white-slight"></div>
                            </a>
                        </div>
    
                        <div className="card-body p-1">
                            <p className="card-title">{product.title}</p>
                            <p className="text-warning">{product.primaryOffer.currencyCode}  {product.primaryOffer.offerPrice}</p>
                            <p className=""><i class="fas fa-star"></i> {product.customerRating}</p>
                        </div>
                        </div>
                    </div> 
                ))
            }
            </div>
            <PageNo />
        </div>
    )
}

export default Item;