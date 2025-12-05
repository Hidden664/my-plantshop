import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: {
    // productId: { id, name, price, quantity, thumbnail }
  }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const p = action.payload; // {id,name,price,thumbnail}
      if (!state.items[p.id]) {
        state.items[p.id] = { ...p, quantity: 1 };
      } else {
        state.items[p.id].quantity += 1;
      }
    },
    increaseQty(state, action) {
      const id = action.payload;
      if (state.items[id]) state.items[id].quantity += 1;
    },
    decreaseQty(state, action) {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id].quantity -= 1;
        if (state.items[id].quantity <= 0) delete state.items[id];
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      if (state.items[id]) delete state.items[id];
    },
    clearCart(state) {
      state.items = {};
    }
  }
});

export const { addToCart, increaseQty, decreaseQty, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
