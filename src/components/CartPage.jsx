import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQty, decreaseQty, removeItem, clearCart } from '../slices/cartSlice';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const itemsObj = useSelector(s => s.cart.items);
  const items = Object.values(itemsObj);
  const dispatch = useDispatch();

  const totalItems = items.reduce((s, it) => s + it.quantity, 0);
  const totalCost = items.reduce((s, it) => s + it.price * it.quantity, 0);

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      <p>Total plants: <strong>{totalItems}</strong></p>
      <p>Total cost: <strong>${totalCost.toFixed(2)}</strong></p>

      <div className="cart-list">
        {items.length === 0 && <p>Your cart is empty.</p>}
        {items.map(it => (
          <div className="cart-item" key={it.id}>
            <img src={it.thumbnail} alt={it.name} className="thumb-small" />
            <div className="ci-info">
              <h4>{it.name}</h4>
              <p>Unit price: ${it.price.toFixed(2)}</p>
            </div>
            <div className="ci-controls">
              <button className="btn small" onClick={() => dispatch(increaseQty(it.id))}>+</button>
              <span className="qty">{it.quantity}</span>
              <button className="btn small" onClick={() => dispatch(decreaseQty(it.id))}>-</button>
              <button className="btn danger" onClick={() => dispatch(removeItem(it.id))}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-actions">
        <button className="btn primary" onClick={() => alert('Coming Soon')}>Checkout</button>
        <Link to="/products" className="btn">Continue shopping</Link>
        <button className="btn" onClick={() => dispatch(clearCart())}>Clear cart</button>
      </div>
    </div>
  );
}
