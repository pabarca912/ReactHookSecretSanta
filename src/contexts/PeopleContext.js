import React, { createContext, useReducer, useEffect } from "react";
import personReducer from "./../components/personReducer";

export const PeopleContext = createContext();

const PeopleContextProvider = (props) => {
  const [people, dispatch] = useReducer(personReducer, [], () => {
    const localData = localStorage.getItem("people");
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem("people", JSON.stringify(people));
  }, [people]);

  return (
    <PeopleContext.Provider value={{ people, dispatch }}>
      {props.children}
    </PeopleContext.Provider>
  );
};
export default PeopleContextProvider;
