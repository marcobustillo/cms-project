import React, { createContext, useReducer } from "react";

const initialState = { loading: false, data: {} };
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "fetch":
        return { ...state, loading: true };
      case "getUser":
        return { ...state, loading: false, data: action.payload };
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };