import React from 'react'
import { Link } from 'react-router-dom'


function Products({
  addtocart, removecart, initial, price,
}) {
  return (
    <>
      <div className="container">
        <div className="row">
          {initial.map((product) => (
            <div key={product.id}>
              <h1>{product.name}</h1>
              <h1>{product.price}</h1>
              <button onClick={() => addtocart(product)}>add</button>
              <button onClick={() => removecart(product)}>remove</button>

            </div>

          ))}

        </div>
      </div>
      <Link to="/Cart"><button>cart</button></Link>

    </>

  )
}



export default Products