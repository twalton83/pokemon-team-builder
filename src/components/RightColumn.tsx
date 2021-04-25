import React, { useState } from "react";
import styled from "styled-components";
import TeamDisplay from "./TeamDisplay";
import { UserContext } from "../contexts/UserContext";

const RightColumnStyles = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: center;
  font-size: 1.5rem;
`;

export default function RightColumn() {
  const { state, dispatch } = React.useContext(UserContext);

  return (
    <RightColumnStyles>
      <h1>Pokémon</h1>
    </RightColumnStyles>
  );
}
