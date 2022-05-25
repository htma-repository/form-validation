import React from "react";

import useInput from "../hooks/use-Input";
import InputForm from "./InputForm";

const SimpleInput = (props) => {
  const {
    formInput: nameInput,
    inputIsValid: nameInputIsValid,
    inputIsInvalid: nameInputInvalid,
    formInputHandler: nameInputHandler,
    formBlurHandler: nameBlurHandler,
    formReset: nameReset,
  } = useInput((valid) => valid.trim() !== "");

  const {
    formInput: emailInput,
    inputIsValid: emailInputIsValid,
    inputIsInvalid: emailInputInvalid,
    formInputHandler: emailInputHandler,
    formBlurHandler: emailBlurHandler,
    formReset: emailReset,
  } = useInput((valid) => valid.trim() !== "" && valid.includes("@"));

  let formIsvalid = false;

  if (nameInputIsValid && emailInputIsValid) {
    formIsvalid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!nameInput && !emailInput) {
      return;
    }

    alert(`Name : ${nameInput}\nEmail : ${emailInput}`);

    nameReset();
    emailReset();
  };

  const inputClass = (inputInvalid) => {
    return inputInvalid ? "form-control invalid" : "form-control";
  };

  const invalidOutput = (invalid, textInvalid) => {
    return invalid && <p className="error-text">{textInvalid}</p>;
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={inputClass(nameInputInvalid)}>
        <InputForm
          children={"Name"}
          name={"name"}
          type={"text"}
          onChange={nameInputHandler}
          onBlur={nameBlurHandler}
          value={nameInput}
        />
        {invalidOutput(nameInputInvalid, "Name must not be empty!")}
      </div>
      <div className={inputClass(emailInputInvalid)}>
        <InputForm
          children={"Email"}
          name={"email"}
          type={"email"}
          onChange={emailInputHandler}
          onBlur={emailBlurHandler}
          value={emailInput}
        />
        {invalidOutput(emailInputInvalid, "Enter valid email!")}
      </div>
      <div className="form-actions">
        <button disabled={!formIsvalid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
