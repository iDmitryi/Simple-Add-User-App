import { useState, useCallback } from "react";

import Form from "./Form";
import Input from "./Input";

import { Button } from "antd";

import "./InputForm.css";

const InputForm = () => {
  const [inputUsername, setInputUsername] = useState("");
  const [inputAge, setInputAge] = useState("");

  const onChangeUsernameInput = (enteredText) => {
    setInputUsername(enteredText);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("submitted", inputUsername);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <Input
        label="Username"
        type="text"
        onChangeUsernameInput={onChangeUsernameInput}
      />
      {/* <Input label="Age" type="number" onChangeAgeInput={onChangeAgeInput} /> */}
      <Button type="primary" htmlType="submit" size="large">
        Add User
      </Button>
    </form>
  );
};
export default InputForm;
