import React, { useContext } from "react";
import { PeopleContext } from "../contexts/PeopleContext";

const Navbar = () => {
  const { people } = useContext(PeopleContext);
  return (
    <div className="navbar">
      <h1>Participants</h1>
      <p>Currently there are {people.length} Secret Santa participants</p>
    </div>
  );
};
export default Navbar;
