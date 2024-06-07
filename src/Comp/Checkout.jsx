import React from 'react';

const Checkout = ({ cartItems }) => {
  let totalQuantity = 0;
let totalPrice = 0;

for (const item of cartItems) {
  totalQuantity += item.quantity;
  totalPrice += item.quantity * item.price;
}


  return (
    <div>
      <h2>Checkout</h2>
      {cartItems.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
      <h3>Total Quantity: {totalQuantity}</h3>
      <h3>Total Price: ${totalPrice}</h3>
      <button className="btn btn-primary" onClick={()=>{alert("Order Confirmed")}}>Confirm Order</button>
    </div>
  );
};

export default Checkout;
