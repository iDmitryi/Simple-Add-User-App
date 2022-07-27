import { useState, useCallback } from "react";

import Form from "./Form";
import Input from "./Input";

import { Button } from "antd";

import "./InputForm.css";

const InputForm = (props) => {
  const [inputUsername, setInputUsername] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [isValid, setIsValid] = useState(true);

  // const [inputAge, setInputAge] = useState("");

  const onChangeUsernameInput = (enteredText) => {
    if (enteredText.trim().length > 0) {
      setIsValid(true);
    }
    setInputUsername(enteredText);
  };

  const onChangeAgeInput = (enteredText) => {
    if (enteredText.trim().length > 0) {
      setIsValid(true);
    }
    setInputAge(enteredText);
  };

  // TODO: check validations
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (inputUsername.trim().length === 0) {
      setIsValid(false);
      return;
    }

    // TODO: pass props for AGE INPUT to the parent
    props.onAddUser(inputUsername);
    setInputUsername("");
    setIsValid(false);
    e.target.reset();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <Input
        label="Username"
        type="text"
        onChangeUsernameInput={onChangeUsernameInput}
      />
      <Input
        label="Age"
        type="number"
        onChangeUsernameInput={onChangeAgeInput}
      />
      <Button type="primary" htmlType="submit" disabled={!isValid} size="large">
        Add User
      </Button>
    </form>
  );
};
export default InputForm;
