import React, { useState, useEffect } from 'react'

import { Navbar, Products, Cart, Checkout } from './components'
import { commerce } from './lib/commerce'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
const App = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})
  const fetchProducts = async () => {
    const { data } = await commerce.products.list()

    setProducts(data)
  }
  const fetchCart = async () => {
    // commerce.cart.retrieve().then((cart) => console.log(cart);
    const cart = await commerce.cart.retrieve()
    setCart(cart)
  }
  const handleAddCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity)
    setCart(item.cart)
  }
  const handleUpdateCartQty = async (productId, quantity) => {
    const item = await commerce.cart.update(productId, { quantity })
    console.log(item)
    setCart(item.cart)
  }
  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId)
    setCart(cart)
  }
  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty()
    setCart(cart)
  }

  useEffect(() => {
    fetchProducts()
    fetchCart()
  }, [])
  // console.log(cart.total_items)
  return (
    <Router>
      <div>
        <Navbar total_items={cart.total_items} />
        <Routes>
          <Route
            exact
            path='/'
            element={
              <Products products={products} handleAddCart={handleAddCart} />
            }
          />
          <Route
            exact
            path='/cart'
            element={
              <Cart
                cart={cart}
                handleUpdateCartQty={handleUpdateCartQty}
                handleRemoveFromCart={handleRemoveFromCart}
                handleEmptyCart={handleEmptyCart}
              />
            }
          />
          <Route exact path='/checkout' element={<Checkout cart={cart} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
