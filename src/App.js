import InputForm from "./components/InputForm/InputForm";
import WarningModal from "./components/WarningModal/WarningModal";

import "./App.css";
import UserList from "./components/UserList/UserList";

function App() {
  return (
    <div className="App">
      <h1>Add User App</h1>
      <InputForm />
      <br />
      <UserList />
      {/* <WarningModal /> */}
    </div>
  );
}

export default App;
