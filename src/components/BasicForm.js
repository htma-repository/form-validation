import React from "react";

import useBasicInput from "../hooks/use-BasicInput";

const nameValidate = (value) => value.trim() !== "";
const emailValidate = (value) => value.trim() !== "" && value.includes("@");

const BasicForm = (props) => {
  const {
    inputForm: firstNameInput,
    inputIsValid: firstNameIsValid,
    inputIsInvalid: firstNameIsInvalid,
    inputFormHandler: firstNameInputHandler,
    inputBlurHandler: firstNameBlurHandler,
    resetInput: firstNameReset,
  } = useBasicInput(nameValidate);

  const {
    inputForm: lastNameInput,
    inputIsValid: lastNameIsValid,
    inputIsInvalid: lastNameIsInvalid,
    inputFormHandler: lastNameInputHandler,
    inputBlurHandler: lastNameBlurHandler,
    resetInput: lastNameReset,
  } = useBasicInput(nameValidate);

  const {
    inputForm: emailInput,
    inputIsValid: emailIsValid,
    inputIsInvalid: emailIsInvalid,
    inputFormHandler: emailInputHandler,
    inputBlurHandler: emailBlurHandler,
    resetInput: emailReset,
  } = useBasicInput(emailValidate);

  let allInputIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    allInputIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!firstNameInput && !lastNameInput && !emailInput) {
      return;
    }

    alert(`Name : ${firstNameInput} ${lastNameInput} \nEmail: ${emailInput}`);

    firstNameReset();
    lastNameReset();
    emailReset();
  };

  const formClass = (invalidInput) => {
    return invalidInput ? "form-control invalid" : "form-control";
  };

  const invalidErrorText = (invalid, errorText) => {
    return invalid && <p className="error-text">{errorText}</p>;
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={formClass(firstNameIsInvalid)}>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            onChange={firstNameInputHandler}
            onBlur={firstNameBlurHandler}
            value={firstNameInput}
          />
          {invalidErrorText(
            firstNameIsInvalid,
            "First name must not be empty!"
          )}
        </div>
        <div className={formClass(lastNameIsInvalid)}>
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            onChange={lastNameInputHandler}
            onBlur={lastNameBlurHandler}
            value={lastNameInput}
          />
          {invalidErrorText(lastNameIsInvalid, "Last name must not be empty!")}
        </div>
      </div>
      <div className={formClass(emailIsInvalid)}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailInputHandler}
          onBlur={emailBlurHandler}
          value={emailInput}
        />
        {invalidErrorText(emailIsInvalid, "Enter valid email!")}
      </div>
      <div className="form-actions">
        <button disabled={!allInputIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
