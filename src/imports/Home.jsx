import React, { useState } from 'react';
import Product from './Product';
import sampleProducts from './products';
import Header from './Header';


const Home = (props) => {

      const[ products, setProducts ] = useState(sampleProducts);


      return (
            <>
                   <Header/>
                  <div className="container p-4">
                        <div className="row">
                        {
                              products.map((product)=> {
                              return ( <Product 
                                    key={product.id}
                                    id ={product.id}
                                    title={product.title}
                                    reviews={product.reviews}
                                    price={product.price}
                                    originalPrice={product} 
                                    imgSrc ={product.imgSrc}/>
                              )})
                        }
                        </div>    
                  </div>
            </>
      );
}

export default Home;