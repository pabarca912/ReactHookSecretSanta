import React, { useContext } from "react";
import { PeopleContext } from "./../contexts/PeopleContext";

const PersonDetails = ({ person }) => {
  const { dispatch } = useContext(PeopleContext);
  return (
    <li onClick={() => dispatch({ type: "REMOVE_PERSON", id: person.id })}>
      <div className="full-name">{person.fullname}</div>
      <div className="email">{person.email}</div>
    </li>
  );
};

export default PersonDetails;
