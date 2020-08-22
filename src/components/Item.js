import React from 'react';
import './Item.css';
import Item_modal from './Item_modal';

const Item = ({category, products}) => {

    const showProduct = () => {

    }
    
    return (
        <div className="Item mt-3">
            <div className="container">
            <div className="row">
            {
                products.map( product => (
                    <div className="col-6 col-md-4 col-lg-3 mb-4 d-flex align-items-stretch" key={product.usItemId}>
                        <div className="card m-0 pointer"  data-toggle="modal" data-target=".bd-example-modal-lg">
                        <div className="view overlay">
                            <img className="card-img-top" src={product.imageUrl} alt="Card image cap"></img>
                        </div>
    
                        <div className="card-body p-1">
                            <p className="card-title">{product.title}</p>
                        </div>
                        <div className="card-footer d-flex justify-content-between border-0">
                            <small className="text-warning">{product.primaryOffer.currencyCode}  {product.primaryOffer.offerPrice}</small>
                            <small className=""><i className="fas fa-star"></i> {product.customerRating}</small>
                        </div>
                        </div>
                        <Item_modal productId={product.usItemId} price={product.primaryOffer.offerPrice}></Item_modal>
                    </div> 
                ))
            }
            </div>
            </div>
        </div>
    )
}

export default Item;