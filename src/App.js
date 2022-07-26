import { useState } from "react";

import InputForm from "./components/InputForm/InputForm";
import WarningModal from "./components/WarningModal/WarningModal";

import "./App.css";
import UserList from "./components/UserList/UserList";

function App() {
  const [inputUsernames, setInputUsernames] = useState([]);

  const isVisible = inputUsernames.length === 0 ? false : true;

  const onSubmitHandler = (e) => {
    setInputUsernames((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({
        key: (Math.random() * 1000).toString(16),
        username: e,
        age: 24,
      });
      console.log(updatedUsers);
      return updatedUsers;
    });
  };

  const onDeleteHandler = (userKey, event) => {
    // event.preventDefault();
    // console.log(userKey, event);
    console.log("ss", userKey.record);
    setInputUsernames((prevUsers) => {
      const updatedUsers = prevUsers.filter((user) => user.key !== userKey);

      console.log("DeleteHandler entered", updatedUsers.userKey);
      console.log("userKey", userKey);
      return updatedUsers;
    });
  };

  return (
    <div className="App">
      <h1>Add User App</h1>
      <InputForm onAddUser={onSubmitHandler} />
      <br />
      {isVisible && (
        <UserList newUser={inputUsernames} deleteUser={onDeleteHandler} />
      )}

      {/* <WarningModal /> */}
    </div>
  );
}

export default App;
