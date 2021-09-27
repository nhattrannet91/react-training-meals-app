import { useState } from "react";

import CartContextProvider from "./store/CartContextProvider";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const closeCartHandler = () => {
    setCartIsShown(false);
  }

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  return (
    <CartContextProvider>
      { cartIsShown && <Cart onClose={closeCartHandler}/> }
      <Header onCartButtonClick={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
