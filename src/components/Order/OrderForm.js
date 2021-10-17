import useInput from "../../hooks/use-input";
import Modal from "../UI/Modal";
import classes from "./OrderForm.module.css";

const validateInputIsNotEmpty = (value) => {
  return value.trim() !== "";
};

const OrderForm = (props) => {
  const {
    value: enteredName,
    isInvalid: nameIsInvalid,
    inputBlurHandler: nameBlurHandler,
    inputChangeHandler: nameChangeHandler,
  } = useInput(validateInputIsNotEmpty);

  const {
    value: enteredAddress,
    isInvalid: addressIsInvalid,
    inputBlurHandler: addressBlurHandler,
    inputChangeHandler: addressChangeHandler,
  } = useInput(validateInputIsNotEmpty);

  const formIsValid = !nameIsInvalid && !addressIsInvalid;

  const closeOrderFormHandler = () => {
    props.onClose();
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    
    if (!formIsValid) {
      return;
    }

    console.log("Form submit");
    props.onClose();
  };

  const nameControlClasses = `${classes.control} ${
    nameIsInvalid ? classes.invalid : ""
  }`;

  const addressControlClasses = `${classes.control} ${
    addressIsInvalid ? classes.invalid : ""
  }`;

  return (
    <Modal onClose={closeOrderFormHandler}>
      <form onSubmit={formSubmissionHandler}>
        <div className={nameControlClasses}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={enteredName}
            onBlur={nameBlurHandler}
            onChange={nameChangeHandler}
          />
        </div>

        <div className={addressControlClasses}>
          <label htmlFor="address">Address</label>
          <input
            id="address"
            type="text"
            value={enteredAddress}
            onBlur={addressBlurHandler}
            onChange={addressChangeHandler}
          />
        </div>

        <div className={classes.actions}>
          <button
            type="button"
            className={classes["button--alt"]}
            onClick={closeOrderFormHandler}
          >
            Close
          </button>
          <button type="submit" className={classes.submit} disabled={!formIsValid}>Submit</button>
        </div>
      </form>
    </Modal>
  );
};

export default OrderForm;
