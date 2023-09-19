"use client";

import { useState } from "react";

function AddProduct({getProducts}) {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [stock, setStock] = useState();
  const [disponible, setDisponible] = useState(true);
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = { name, price, stock, disponible};
    

    try {
        const response = await fetch('https://backend-deploy-el55.onrender.com/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProduct),
          });
    
          if (response.ok) {
            alert('Producto agregado correctamente')
            getProducts()
          }
          setName('');
          setPrice('');
          setStock('');

    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (

    <div className="form-container">
        
      <form onSubmit={handleSubmit}>
        <label>
          Nombre: 
          <input type="text" className="input-field"  value={name} onChange={(e)=> setName(e.target.value)} />
        </label>
        <br />
        <label>
          Precio:
          <input type="number" className="input-field" value={price} onChange={(e)=> setPrice(e.target.value)} />
        </label>
        <br />
        <label>
          Stock:
          <input type="text" className="input-field" value={stock} onChange={(e)=> setStock(e.target.value)} />
        </label>
        <br />
        <label>
          Disponible:
          <input type="checkbox" className="input-field" onChange={(e)=>setDisponible(e.target.checked)} />
        </label>
        <br />
        <button type='submit' className="submit-button">Enviar</button>
      </form>
    </div>
  );
}

export default AddProduct;
