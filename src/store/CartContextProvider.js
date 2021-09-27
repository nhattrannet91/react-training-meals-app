import CartContext from "./cart-context";

const CartContextProvider = (props) => {
  const addItemHandler = (item) => {};
  const removeItemHandler = (itemId) => {};
  
  const cartCtx = {
    items: [],
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartCtx}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
