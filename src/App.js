import { useState } from "react";
import InputForm from "./components/InputForm/InputForm";
import UserList from "./components/UserList/UserList";

import "./App.css";

function App() {
  const [inputUsernames, setInputUsernames] = useState([]);

  const isVisible = inputUsernames.length === 0 ? false : true;

  const onSubmitHandler = (username, age) => {
    setInputUsernames((prevUsers) => {
      const updatedUsers = [...prevUsers];
      // return an updated array with last added user at the beginning
      updatedUsers.unshift({
        key: (Math.random() * 1000).toString(16),
        username: username,
        age: age,
      });
      return updatedUsers;
    });
  };

  const onDeleteHandler = (userKey) => {
    // return an updated array without user which have (userKey) key
    setInputUsernames((prevUsers) => {
      const updatedUsers = prevUsers.filter(
        (user) => user.key !== userKey.record
      );
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
    </div>
  );
}

export default App;
