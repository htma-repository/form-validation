import { useState } from "react";

const useInput = (formValidation) => {
  const [formInput, setFormInput] = useState("");
  const [formInputTouched, setFormInputTouched] = useState(false);

  const inputIsValid = formValidation(formInput);
  const inputIsInvalid = !inputIsValid && formInputTouched;

  const formInputHandler = (event) => {
    setFormInput(event.target.value);
  };

  const formBlurHandler = () => {
    setFormInputTouched(true);
  };

  const formReset = () => {
    setFormInput("");
    setFormInputTouched(false);
  };

  return {
    formInput,
    inputIsValid,
    inputIsInvalid,
    formInputHandler,
    formBlurHandler,
    formReset,
  };
};

export default useInput;
