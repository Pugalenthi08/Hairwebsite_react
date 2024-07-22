import React from 'react'

const CartPage = ({cart}) => {
  return (
    <>
      <div>

        <div className="container">
          <div className="row">
            {cart.map((product) => (
              <div key={product.id}>
                <h1>{product.name}</h1>
                <h1>{product.price}</h1>
                <h1>{product.quantity}</h1>
                <h1>{product.totalPrice}</h1>
            

              </div>

            ))}

          </div>
        </div>


      </div ></>
  )
}

export default CartPage