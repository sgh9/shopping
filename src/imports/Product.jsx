import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faRupeeSign } from '@fortawesome/free-solid-svg-icons';


const Product =({id, title, reviews, price, originalPrice, imgSrc })=> {
      return (
            <div className="col-6 col-lg-4">
                        <h5 className="py-1">{title}</h5>
                        <div className="img-container" onClick={()=> window.location.href=`product/${id}`}>
                              <img className="img-fluid rounded mx-auto d-block" src={imgSrc} width="100%" alt="product-img" />
                        </div>
                        <div className="reviews text-center py-2">
                        {
                              Array(reviews).fill(0).map((review, index)=> {
                                    return (
                                          <span className="px-1" key={index}>
                                                <FontAwesomeIcon icon={faStar}/>
                                          </span>
                                    )
                              })
                        }
                        </div>
                  <div className="price text-center py-1">
                  <FontAwesomeIcon icon={faRupeeSign}/><span className="px-1">{price}</span>
                  <FontAwesomeIcon icon={faRupeeSign}/><span className="px-1"></span>  
                  </div>
                  
            </div>
            
      )
}

export default Product;