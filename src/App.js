import React, { useState } from 'react';
import ProductList from './Comp/Productlist';
import Cart from './Comp/Cart';
import Checkout from './Comp/Checkout';
import 'bootstrap/dist/css/bootstrap.css';


const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [currentPage, setCurrentPage] = useState('products');

  const addToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      let newItems = [...prevItems];

      
      let available = false;
      for (let i = 0; i < newItems.length; i++) {
        if (newItems[i].id === product.id) {
          newItems[i].quantity += quantity;
          available = true;
          break;
        }
      }

      
      if (!available) {
        newItems.push({ ...product, quantity });
      }
      return newItems;
    });
  };

 
  const updateQuantity = (productId, newQuantity) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === productId) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
    });
  };

  return (
    <div>
<ul class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link" aria-current="page" href="#">Ecommerce App</a>
  </li>
  <li class="nav-item">
    <a type="button" class="nav-link" onClick={() => setCurrentPage('products')}>Products</a>
  </li>
  <li class="nav-item">
    <a type="button" class="nav-link" onClick={() => setCurrentPage('cart')}>Cart</a>
  </li>
  <li class="nav-item">
  <a type="button" class="nav-link" onClick={() => setCurrentPage('checkout')}>Checkout</a>
  </li>
</ul>

      {currentPage === 'products' && <ProductList addToCart={addToCart} />}
      {currentPage === 'cart' && (
        <Cart
          cartItems={cartItems}
         
          updateQuantity={updateQuantity}
        />
      )}
      {currentPage === 'checkout' && <Checkout cartItems={cartItems} />}
    </div>
  );
};

export default App;