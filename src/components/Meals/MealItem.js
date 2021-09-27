import { useContext } from "react";

import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import CartContext from "../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const { id, name, description, price } = props;

  const onSubmitHandler = (amount) => {
    cartCtx.addItem({
      id,
      name,
      price,
      amount
    })
  };

  return (
    <div className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <p className={classes.description}>{description}</p>
        <span className={classes.price}>${price.toFixed(2)}</span>
      </div>
      <MealItemForm onSubmit={onSubmitHandler}/>
    </div>
  );
};

export default MealItem;
