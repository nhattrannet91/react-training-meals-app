import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItemsContent = [
    { id: "c1", name: "Sushi", price: 23.0, amount: 2 },
  ].map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      price={item.price}
      amount={item.amount}
    />
  ));

  return (
    <Modal>
      <ul className={classes["cart-items"]}>{cartItemsContent}</ul>
      <div className={classes.total}>
        <span>Total</span>
        <span>$58.00</span>
      </div>
      <div className={classes.actions}>
        <button type="button" className={classes["button--alt"]}>
          Close
        </button>
        <button type="button">Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
