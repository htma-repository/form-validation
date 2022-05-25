import { useReducer } from "react";

const initialInputForm = {
  value: "",
  isTouched: false,
};
const inputFormReducer = (state, action) => {
  switch (action.type) {
    case "INPUT":
      return {
        value: action.payload,
        isTouched: state.isTouched,
      };
    case "BLUR":
      return {
        value: state.value,
        isTouched: true,
      };
    case "RESET":
      return initialInputForm;
    default:
      return initialInputForm;
  }
};

const useBasicInput = (validateInput) => {
  const [inputFormState, dispatchInputForm] = useReducer(
    inputFormReducer,
    initialInputForm
  );

  const inputIsValid = validateInput(inputFormState.value);
  const inputIsInvalid = !inputIsValid && inputFormState.isTouched;

  const inputFormHandler = (event) => {
    dispatchInputForm({ type: "INPUT", payload: event.target.value });
  };

  const inputBlurHandler = () => {
    dispatchInputForm({ type: "BLUR" });
  };

  const resetInput = () => {
    dispatchInputForm({ type: "RESET" });
  };

  return {
    inputForm: inputFormState.value,
    inputIsTouched: inputFormState.isTouched,
    inputIsValid,
    inputIsInvalid,
    inputFormHandler,
    inputBlurHandler,
    resetInput,
  };
};

export default useBasicInput;
