function add(state: State, payload: object) {
  if (!state.team.includes(payload)) {
    let added: boolean;

    const newTeam = state.team.map((item) => {
      // this typecheck also prevents adding more than 6
      if (typeof item === "number" && !added) {
        added = true;
        return payload;
      }
      return item;
    });

    return {
      ...state,
      team: newTeam,
    };
  }
  return {
    ...state,
  };
}

function setCurrentPokemon(state: State, payload: object) {
  return {
    ...state,
    currentPokemon: payload,
  };
}

export function reducer(state: State, action: ACTIONTYPE): State {
  const { type, payload } = action;
  switch (type) {
    case "ADD":
      return add(state, payload);
    case "SET_CURRENT_POKEMON":
      return setCurrentPokemon(state, payload);
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
