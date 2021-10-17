import { useState } from "react";

import CartContextProvider from "./store/CartContextProvider";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import OrderForm from "./components/Order/OrderForm";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [orderFormIsShown, setOrderFormIsShown] = useState(false);

  const closeCartHandler = () => {
    setCartIsShown(false);
  }

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const closeOrderFormHandler = () => {
    setOrderFormIsShown(false);
  };

  const showOrderFormHandler = () => {
    setCartIsShown(false);
    setOrderFormIsShown(true);
  }

  return (
    <CartContextProvider>
      { cartIsShown && <Cart onClose={closeCartHandler} onOrderButtonClicked={showOrderFormHandler}/> }
      { orderFormIsShown && <OrderForm onClose={closeOrderFormHandler}/> }
      <Header onCartButtonClick={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
