import React, { useState } from 'react';
import Product from './Product';
import img from '../assests/image-test.jpg';


const Home = (props) => {

     let sampleProducts = [{
            id: "1",
            title : "Neque porro quisquam est qui dolorem ipsum quia ",
            reviews: 5,
            price : 299,
            originalPrice: 450,
            imgSrc: img
      },{
            id: "2",
            title : "Neque porro quisquam est qui dolorem ipsum quia ",
            reviews: 4,
            price : 299,
            originalPrice: 450,
            imgSrc: img
      },{
            id: "3",
            title : "Neque porro quisquam est qui dolorem ipsum quia ",
            reviews: 4,
            price : 299,
            originalPrice: 450,
            imgSrc: img
      }];

      const[ products, setProducts ] = useState(sampleProducts);


      return (
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
      );
}

export default Home;