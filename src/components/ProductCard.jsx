import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../slices/cartSlice';

export default function ProductCard({ p }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(s => s.cart.items);
  const isAdded = !!cartItems[p.id];

  function handleAdd() {
    dispatch(addToCart({ id: p.id, name: p.name, price: p.price, thumbnail: p.thumbnail }));
  }

  return (
    <div className="product-card">
      <img src={p.thumbnail} alt={p.name} className="thumb" />
      <div className="info">
        <h4>{p.name}</h4>
        <p className="price">${p.price.toFixed(2)}</p>
        <button className="btn" onClick={handleAdd} disabled={isAdded}>
          {isAdded ? 'Added' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}
