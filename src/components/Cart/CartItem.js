import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const { name, price, amount } = props;
  return (
    <div className={classes["cart-item"]}>
      <h2>{name}</h2>
      <div className={classes.summary}>
        <span className={classes.price}>${price}</span>
        <span className={classes.amount}>x{amount}</span>
      </div>
      <div className={classes.actions}>
        <button>-</button>
        <button>+</button>
      </div>
    </div>
  );
};

export default CartItem;
