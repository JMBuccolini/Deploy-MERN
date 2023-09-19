'use client'

import { useEffect, useState } from "react";

function Products() {

    const [products, setProducts] = useState();


    const getProducts = async () => {
        try {
          const response = await fetch('https://backend-deploy-m98s.onrender.com/');
          
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          
          const data = await response.json();
          const products = data.products; // Asumiendo que "products" es una propiedad de "data"
          
          console.log('es esto:', products);
          setProducts(products);
        } catch (error) {
          console.error('Fetch Error:', error);
        }
      };
      

    useEffect(()=>{
        getProducts()
    },[])


  return (
    <div className="products-container">
        <h2>Products</h2>
        
    {

        products && products.length != 0 && products.map(prod=>(

            <div className="product-card" key={prod._id}>
                <h3>{prod.name}</h3>
                <p>{prod.price}</p>
                <p>{prod.stock}</p>
            </div>

        ))


    }

        
</div>
    
  )
}

export default Products