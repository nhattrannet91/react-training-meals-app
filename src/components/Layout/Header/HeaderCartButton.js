import { useContext, useEffect, useState } from "react";

import CartContext from "../../../store/cart-context";
import CartIcon from "./CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const {items} = cartCtx;
  const [isBump, setIsBump] = useState(false);

  const btnClasses = `${classes.button} ${isBump ? classes.bump : ''}`;

  useEffect(() => {
    if(items.length === 0){
      return; 
    }

    setIsBump(true);
    const handler = setTimeout(() => setIsBump(false), 300);
    return () => {
      clearTimeout(handler)
    };
  }, [items]);
  
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartCtx.totalAmount}</span>
    </button>
  );
};

export default HeaderCartButton;
