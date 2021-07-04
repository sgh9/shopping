import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = ()=> {
      const { productId } = useParams();
      
      return (
            <div className="container">
                  <div className="row">
                        <div className="col">
                             
                              <h5 className="py-1">{productId}</h5>
                        </div>
                   <p>product details</p>
                  </div>
                 
            </div>
      );
}

export default ProductDetails;