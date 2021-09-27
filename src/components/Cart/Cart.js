import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const closeCartHandler = () => {
    props.onClose();
  };

  const addItemToCartHandler = (item) => {
    cartCtx.addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      amount: 1,
    });
  };

  const cartItemsContent = items.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      price={item.price}
      amount={item.amount}
      onAddItem={addItemToCartHandler.bind(null, item)}
    />
  ));

  const total = items.reduce(
    (curVal, item) => curVal + item.price * item.amount,
    0
  );

  return (
    <Modal onClose={closeCartHandler}>
      <ul className={classes["cart-items"]}>{cartItemsContent}</ul>
      <div className={classes.total}>
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button
          type="button"
          className={classes["button--alt"]}
          onClick={closeCartHandler}
        >
          Close
        </button>
        <button type="button">Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
