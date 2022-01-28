import React from "react";
import PeopleContextProvider from "./contexts/PeopleContext";
import Navbar from "./components/navbar";
import Form from "./components/form";
import PeopleList from "./components/PeopleList";

function App() {
  return (
    <div className="App">
      <PeopleContextProvider>
        <Navbar />
        <Form />
        <PeopleList />
      </PeopleContextProvider>
    </div>
  );
}
export default App;
