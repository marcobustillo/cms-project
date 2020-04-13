import React, { createContext, useReducer } from "react";

const initialState = { loading: false, data: {}, isAuthenticated: false };
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "auth":
        return { ...state, isAuthenticated: true };
      case "signOut":
        return { ...state, isAuthenticated: false };
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
