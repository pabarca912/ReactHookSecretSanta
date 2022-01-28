import { v1 as uuid } from "uuid";

const personReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PERSON":
      return [
        ...state,
        {
          fullname: action.person.fullname,
          email: action.person.email,
          id: uuid(),
        },
      ];
    case "REMOVE_PERSON":
      return state.filter((person) => person.id !== action.id);
    default:
      return state;
  }
};

export default personReducer;
