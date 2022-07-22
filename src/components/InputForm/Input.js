import { useState, useCallback } from "react";

import "./Input.css";

const Input = (props) => {
  let onChangeInput = (e) => {
    props.onChangeUsernameInput(e.target.value);
  };

  return (
    <div className="form-item-input">
      <label htmlFor={props.label}>{props.label}</label>
      <input type={props.type} name={props.label} onChange={onChangeInput} />
      <br />
    </div>
  );
};

export default Input;
