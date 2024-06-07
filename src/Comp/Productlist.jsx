import React  from 'react';
import '../Comp/Productlist.css';

const ProductList = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Shoe 1', price: 100 },
    { id: 2, name: 'Shoe 2', price: 150 },
    { id: 3, name: 'Shoe 3', price: 200 },
  ];

  return (
    <div>
      <h2 className="shopTitle">Product List</h2>
      <div className="products">
        {products.map(product => (
          <div key={product.id} className="product">
            <img src={`https://contents.mediadecathlon.com/p2153171/61179e52ed0b3a1b4fdbddf2cfd168c5/p2153171.jpg?format=auto&quality=70&f=650x0`} alt={product.name} />
            <div className="description">
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <button className="addToCartBttn" onClick={() => {
                addToCart(product, 1)
                alert(`${product.name} added to cart!`)
                }}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;