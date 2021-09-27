import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: [],
  addItem: (item) => {},
  removeItem: (itemId) => {},
});
export default CartContext;
