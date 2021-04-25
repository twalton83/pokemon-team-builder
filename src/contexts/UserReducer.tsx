function add(state: State, payload: object) {
  return {
    ...state,
  };
}

function setCurrentPokemon(state: State, payload: object) {
  return {
    ...state,
  };
}

export function reducer(state: State, action: ACTIONTYPE): State {
  const { type, payload } = action;
  switch (type) {
    case "ADD":
      return add(state, payload);
    default:
      return state;
  }
}

type ACTIONTYPE =
  | { type: "ADD"; payload: Payload }
  | { type: "SET_CURRENT_POKEMON"; payload: Payload };

interface Payload {}

interface State {
  team: Team;
}

type Team = any[];