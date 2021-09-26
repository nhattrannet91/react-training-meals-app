import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const { name, description, price } = props;
  return (
    <div className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <p className={classes.description}>{description}</p>
        <span className={classes.price}>${price.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default MealItem;
