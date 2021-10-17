import { useReducer } from "react";

const initialState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "BLUR") {
    return { value: state.value, isTouched: true };
  }
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "RESET") {
    return { value: "", isTouched: false };
  }

  return initialState;
};

const useInput = (validate) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initialState);
  const isValid = validate(inputState.value);
  const isInvalid = !isValid && inputState.isTouched;

  const inputBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const inputChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isInvalid,
    inputBlurHandler,
    inputChangeHandler,
    reset,
  };
};

export default useInput;
