import React, { useState } from "react";

const SimpleInput = (props) => {
  // Form Input Using useState
  const [nameInput, setNameInput] = useState("");
  const [nameInputTouched, setNameInputTouched] = useState(false);

  const [emailInput, setEmailInput] = useState("");
  const [emailInputTouched, setEmailInputTouched] = useState(false);

  const nameInputIsValid = nameInput.trim() !== "";
  const nameInputInvalid = !nameInputIsValid && nameInputTouched;

  const emailInputIsValid =
    emailInput.trim() !== "" && emailInput.includes("@");
  const emailInputInvalid = !emailInputIsValid && emailInputTouched;

  let formIsvalid = false;

  if (nameInputIsValid && emailInputIsValid) {
    formIsvalid = true;
  }

  const nameInputHandler = (event) => {
    setNameInput(event.target.value);
  };

  const emailInputHandler = (event) => {
    setEmailInput(event.target.value);
  };

  const nameBlurHandler = () => {
    setNameInputTouched(true);
  };

  const emailBlurHandler = () => {
    setEmailInputTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setNameInputTouched(true);
    setEmailInputTouched(true);

    if (!nameInput && !emailInput) {
      return;
    }

    setNameInput("");
    setNameInputTouched(false);
    setEmailInput("");
    setEmailInputTouched(false);
  };

  const inputClass = (inputInvalid) => {
    return inputInvalid ? "form-control invalid" : "form-control";
  };
  // const nameInputClass = nameInputInvalid
  //   ? "form-control invalid"
  //   : "form-control";

  // const emailInputClass = emailInputInvalid
  //   ? "form-control invalid"
  //   : "form-control";

  const invalidOutput = (invalid, textInvalid) => {
    return invalid && <p className="error-text">{textInvalid}</p>;
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={inputClass(nameInputInvalid)}>
        <label htmlFor="name">Your Name</label>
        <input
          placeholder="name"
          type="text"
          id="name"
          onChange={nameInputHandler}
          onBlur={nameBlurHandler}
          value={nameInput}
        />
        {invalidOutput(nameInputInvalid, "Name must not be empty!")}
      </div>
      <div className={inputClass(emailInputInvalid)}>
        <label htmlFor="email">Email</label>
        <input
          placeholder="email"
          type="email"
          id="email"
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
