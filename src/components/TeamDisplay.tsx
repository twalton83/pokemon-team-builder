import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../contexts/UserContext";
import PokemonCard from "./PokemonDisplay";
const TeamDisplayStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: 50% 50%;
  grid-gap: 16px;

  height: 90%;
  width: 100%;
`;
const TeamDisplay: React.FC = () => {
  const { state, dispatch } = useContext(UserContext);

  const { team } = state;

  return (
    <TeamDisplayStyles>
      {team.map((pokemon) => (
        <PokemonCard key={pokemon.name || pokemon} pokemon={pokemon} />
      ))}
    </TeamDisplayStyles>
  );
};

export default TeamDisplay;
