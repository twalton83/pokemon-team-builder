import React, { createContext, useReducer, useEffect } from "react";

export const UserContext = createContext(null);

interface Context {
  state: any;
  dispatch: any;
}

interface State {
  team: Team;
}

type Team = any[];

const initialState = {
  team: [],
};

function add(state: State, payload: object) {
  return {
    ...state,
  };
}

function reducer(state: State, action: ACTIONTYPE): State {
  const { type, payload } = action;
  switch (type) {
    case "ADD":
      return add(state, payload);
    default:
      return state;
  }
}

type ACTIONTYPE = { type: "ADD"; payload: Payload };

interface Payload {}

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
