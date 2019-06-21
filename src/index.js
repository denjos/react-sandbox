import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import { Count, ShoppingList } from "./reducerlab";
import "./styles.css";
const UserContext = React.createContext();
function App() {
  const [firstnane, setFirstname] = useState("oscar");
  const [lastname, setLastname] = useState("herrera");
  function handleFirstname(e) {
    setFirstname(e.target.value);
  }
  function handleLastname(e) {
    setLastname(e.target.value);
  }
  return (
    <UserContext.Provider value={{ firstnane, lastname }}>
      <input onChange={handleFirstname} value={firstnane} />
      <input onChange={handleLastname} value={lastname} />
      <Main />
      <Count />
      <ShoppingList />
    </UserContext.Provider>
  );
}
function Main() {
  const { firstnane, lastname } = useContext(UserContext);
  return (
    <div>
      <div>Firstname: {firstnane}</div>
      <div>Lastname: {lastname}</div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
