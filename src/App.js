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
      return updatedUsers;
    });
  };

  const onDeleteHandler = (userKey) => {
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

      {/* <WarningModal /> */}
    </div>
  );
}

export default App;
