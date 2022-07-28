import { useState } from "react";
import Input from "./Input";
import ButtonWrapper from "../Button/ButtonWrapper";
import { Modal } from "antd";

import "./InputForm.css";

const InputForm = (props) => {
  const [inputUsername, setInputUsername] = useState("");
  const [inputAge, setInputAge] = useState("");

  const warningAge = () => {
    Modal.warning({
      title: "Can't add user",
      content: "Please input your Age",
    });
  };

  const warningUsername = () => {
    Modal.warning({
      title: "Can't add user",
      content: "Please input your Username",
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    // validations
    if (inputUsername.trim().length === 0) {
      warningUsername();
      return;
    } else if (inputAge.length === 0) {
      warningAge();
      return;
    }

    // pass props to parent
    props.onAddUser(inputUsername, inputAge);

    // reset states and input values
    setInputUsername("");
    setInputAge("");
    e.target.reset();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <Input
        label="Username"
        type="text"
        onChangeInput={(inputValue) => setInputUsername(inputValue)}
      />
      <Input
        label="Age"
        type="number"
        min={0}
        max={100}
        onChangeInput={(inputValue) => setInputAge(inputValue)}
      />
      <ButtonWrapper type="primary" htmlType="submit" size="large">
        Add User
      </ButtonWrapper>
    </form>
  );
};
export default InputForm;
