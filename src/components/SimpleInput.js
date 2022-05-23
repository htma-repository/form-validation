import React, { useState } from "react";

const SimpleInput = (props) => {
  // Form Input Using useState
  const [formInput, setFormInput] = useState("");
  const [isFormTouched, setIsFormTouched] = useState(false);

  const isFormValid = formInput.trim() !== "";
  const nameFormIsInvalid = !isFormValid && isFormTouched;

  const formInputHandler = (event) => {
    setFormInput(event.target.value);
  };

  const formBlurHandler = () => {
    setIsFormTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setIsFormTouched(true);

    if (!isFormValid) {
      return;
    }
    // formInputRef.current.value = ""; // NOT IDEAL FOR REACT
    setFormInput("");
    setIsFormTouched(false);
  };

  const formValid = nameFormIsInvalid ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={formValid}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={formInputHandler}
          onBlur={formBlurHandler}
          value={formInput}
        />
        {nameFormIsInvalid && <p className="error-text">Please Input Name!</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
