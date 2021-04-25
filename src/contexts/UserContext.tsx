import React, { createContext, useReducer, useEffect } from "react";
import { reducer } from "./UserReducer";

export const UserContext = createContext(null);

const initialState = {
  team: [1, 2, 3, 4, 5, 6],
};

export function UserProvider(props: ProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
}

export interface ProviderProps {
  children: React.ReactNode;
}
