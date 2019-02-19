import { combineReducers } from "redux";

const userDataReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOAD_ACTION":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  userData: userDataReducer
});
