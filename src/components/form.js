import React, { useState } from "react";
import { useContext } from "react/cjs/react.development";
import { PeopleContext } from "./../contexts/PeopleContext";

function Form() {
  const { dispatch } = useContext(PeopleContext);
  //const { people } = useContext(PeopleContext);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const handlePersonSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_PERSON",
      person: { fullname, email },
    });
    setFullname("");
    setEmail("");
  };
  function handleRandomize() {
    console.log("Randomize");
  }

  return (
    <form onSubmit={handlePersonSubmit}>
      <input
        type="text"
        value={fullname}
        name="fullname"
        placeholder="Full Name"
        onChange={(e) => setFullname(e.target.value)}
        required
      />
      <input
        type="email"
        value={email}
        name="email"
        placeholder="E-Mail"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input type="Submit" value="Add Person" />
      <button onClick={handleRandomize}>Randomize People</button>
    </form>
  );
}

export default Form;
