import { createStore } from "redux";

let initialState = {
  count: 100,
  name: "jiaxin",
};

function reducer(state, action) {
  state = state || initialState;
  switch (action.type) {
    case "add":
      return {
        ...state,
        count: state.count + action.num,
      };
    case "minus":
      return {
        ...state,
        count: state.count - action.num
      };
    default:
      return {
        ...state,
      };
  }
}

let store = createStore(reducer);
console.log(store);

export default store;
