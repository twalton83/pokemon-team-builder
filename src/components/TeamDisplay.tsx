import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../contexts/UserContext";

const PokemonDisplay = styled.div`
  height: 100%;
  width: 100%;
`;

const TeamDisplayStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: 50% 50%;
`;
const TeamDisplay: React.FC = () => {
  const { state, dispatch } = useContext(UserContext);
  console.log(state);
  return (
    <TeamDisplayStyles>
      <h1>Pokemon Team</h1>
    </TeamDisplayStyles>
  );
};

export default TeamDisplay;
