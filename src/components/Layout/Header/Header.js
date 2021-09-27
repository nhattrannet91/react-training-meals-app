import { Fragment } from "react";

import mealsImage from "../../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onCartButtonClick} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="This is a picture of meals" />
      </div>
    </Fragment>
  );
};

export default Header;
