import React, { useState, useEffect } from 'react'
import './Item_modal.css';
import { apendApiKey, appendApiKey } from '../utils';
import Axios from 'axios';

const Item_modal = ({productId, price}) => {

    const [ detail, setDetail ] = useState();
    const url = appendApiKey("products/get-details&usItemId="+productId);

  useEffect(() => {
      fetchData();
  }, [])

  const fetchData = async() => {
      try{
          const res_cat = await Axios.get(url);
          setDetail(res_cat.data.productByProductId);
      }catch{
          setDetail("");
      }
  }
    return (
        <div className="Item_modal">

            <div className="modal bd-example-modal-lg" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body border-0">
                        <div className="card mb-3 border-0">
                            <div className="row no-gutters">
                    <div id="carousel-example-2" className="col-md-5 carousel slide carousel-fade z-depth-1-half" data-ride="carousel">
                    
                    <ol className="carousel-indicators">
                        <li data-target="#carousel-example-2" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel-example-2" data-slide-to="1"></li>
                        <li data-target="#carousel-example-2" data-slide-to="2"></li>
                    </ol>
                    
                    <div className="carousel-inner" role="listbox">
                        {
                            detail.imageList.map( img => (
                                <div className="carousel-item active">
                                    <div className="view">
                                        <img className="img-fluid" src={img.imageAssetSizeUrls.default}></img>
                                        <div className="mask rgba-black-light"></div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <a className="carousel-control-prev" href="#carousel-example-2" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carousel-example-2" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div className="col-md-7">
                <div className="card-body d-flex flex-column align-items-start">
                    <h5 className="card-title text-align-left">{detail.productName}</h5>
                    <small className="text-muted">Brand : {detail.productAttributes.brand}</small>
                    <p className="card-text text-align-left">{detail.shortDescription}</p>
                    <h3 className="card-text text-align-left">USD {price}</h3>
                    <p className="card-text text-muted">Rating {detail.productAttributes.averageRating}/5</p>
                    <div>
                        <button type="button" className="btn btn-yellow">Buy Now</button>
                        <button type="button" className="btn btn-blue">Add To Card</button>
                    </div>
                </div> 
             </div>
        </div>


        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div> 
  </div>
</div>  
        </div>
    )
}

export default Item_modal;
