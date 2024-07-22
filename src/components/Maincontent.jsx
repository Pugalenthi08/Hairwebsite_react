import React, { useState } from 'react'
import Navebar from "./Navebar"
import { Routes, Route } from "react-router-dom"
import Home from './Home'
import Products from './Products'
import FreeCon from './FreeCon'
import ContactPage from './ContactPage'
import CartPage from './CartPage'



const Maincontent = () => {
  const [cart, setcart] = useState([])

  const [initial, setinitial] = useState([
    { id: 1, name: "one", price: 100 },
    { id: 2, name: "two", price: 200 },
    { id: 3, name: "three", price: 300 },
  ]);


  const addtocart = (product) => {
    const updatecart = [...cart]
    const updateinitial = [...initial]
    const cartindex = updatecart.findIndex((p) => p.id === product.id);
    const initialindex = updateinitial.findIndex((p) => p.id === product.id);
    
    if (cartindex !== -1) {
      updatecart[cartindex].quantity+=1;
      updatecart[cartindex].totalPrice+=product.price;

    }
    else {
      updatecart.push({ ...product, quantity: 1, totalPrice: product.price });

    }


    setcart(updatecart);
    setinitial(updateinitial);
  };


  const removecart = (product) => {
    const updatecart = [...cart]
    const updateinitial = [...initial]
    const cartindex = updatecart.findIndex((p) => p.id === product.id);
    const initialindex = updateinitial.findIndex((p) => p.id === product.id);

    if (cartindex !== 1) {
      updatecart[cartindex].quantity-=1;
      updatecart[cartindex].totalPrice-=product.price;

    }
    else {
      updatecart.push({ ...product, quantity: 1, totalPrice: product.price });

    }


    setcart(updatecart);
    setinitial(updateinitial);
  };




  return (
    <>

      <Navebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products
          addtocart={addtocart}
          removetocart={removecart}
          initial={initial}



        />} />
        <Route path='/Cart' element={<CartPage cart={cart}
        // toatl={total}
        // removetocart={removetocart}

        />}></Route>








        <Route path='/Consultation' element={<FreeCon />}></Route>
        <Route path='/Contact' element={<ContactPage />}></Route>


      </Routes>

    </>
  )
}
export default Maincontent;