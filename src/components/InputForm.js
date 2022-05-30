import React, { Fragment } from "react";

const InputForm = (props) => {
  return (
    <Fragment>
      <label htmlFor={props.name}>{props.children}</label>
      <input
        type={props.type}
        id={props.name}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
      />
    </Fragment>
  );
};

export default InputForm;
