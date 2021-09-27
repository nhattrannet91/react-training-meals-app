import { useRef } from "react";

import Input from "../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const inputRef = useRef();

  const submitFormHandler = (e) => {
    e.preventDefault();
    props.onSubmit(+inputRef.current.value)
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <Input
        label="Amount"
        input={{
          id: `amount_${Math.random()}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
        ref={inputRef}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
