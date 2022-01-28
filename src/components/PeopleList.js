import React, { useContext } from "react";
import { PeopleContext } from "./../contexts/PeopleContext";
import PersonDetails from "./PersonDetails";

const PeopleList = () => {
  const { people } = useContext(PeopleContext);
  return people.length ? (
    <div className="people-list">
      <ul>
        {people.map((person) => {
          return (
            <PersonDetails person={person} key={person.id}></PersonDetails>
          );
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">Nobody is in the Secret Santa list!</div>
  );
};

export default PeopleList;
