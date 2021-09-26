import { Fragment } from "react/cjs/react.production.min";
import mealsImage from "../../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="This is a picture of meals" />
      </div>
    </Fragment>
  );
};

export default Header;
