import { useState } from "react";

const useBasicInput = (validateInput) => {
  const [inputForm, setInputForm] = useState("");
  const [inputIsTouched, setInputIsTouched] = useState(false);

  const inputIsValid = validateInput(inputForm);
  const inputIsInvalid = !inputIsValid && inputIsTouched;

  const inputFormHandler = (event) => {
    setInputForm(event.target.value);
  };

  const inputBlurHandler = () => {
    setInputIsTouched(true);
  };

  const resetInput = () => {
    setInputForm("");
    setInputIsTouched(false);
  };

  return {
    inputForm,
    inputIsTouched,
    inputIsValid,
    inputIsInvalid,
    inputFormHandler,
    inputBlurHandler,
    resetInput,
  };
};

export default useBasicInput;
