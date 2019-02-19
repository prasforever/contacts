import { combineReducers } from "redux";

const userDataReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOAD_ACTION":
      let obj = {};
      action.payload.forEach((element, index) => {
        obj[index] = element;
      });
      return obj;
    default:
      return state;
  }
};

const userSelectedReducer = (state = {}, action) => {
  switch (action.type) {
    case "SELECTED_ACTION":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  userData: userDataReducer,
  userSelected: userSelectedReducer
});
