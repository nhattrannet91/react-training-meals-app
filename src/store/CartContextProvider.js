import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedItems = [...state.items];
    const updatingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    if (updatingItemIndex >= 0) {
      const updatingItem = state.items[updatingItemIndex];
      updatedItems[updatingItemIndex] = {
        ...updatingItem,
        amount: updatingItem.amount + action.item.amount,
      };
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedItems.reduce((prevVal, item) => prevVal + item.amount, 0),
    };
  }

  return defaultState;
};

const CartContextProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(cartReducer, defaultState);

  const addItemHandler = (item) => {
    dispatchCartState({ type: "ADD", item });
  };

  const removeItemHandler = (itemId) => {};

  const cartCtx = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
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
