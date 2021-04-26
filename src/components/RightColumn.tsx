import React, { useState } from "react";
import styled, { css } from "styled-components";
import { UserContext } from "../contexts/UserContext";
import { upperCase } from "../utils/helpers";

const RightColumnStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  font-size: 1.5rem;

  .data-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  img {
    height: 300px;
    width: auto;
  }

  button {
    background-color: #34b528;
    border-radius: 5px;
    border: none;
    height: 36px;
    width: 124px;
  }
`;

export default function RightColumn() {
  const { state, dispatch } = React.useContext(UserContext);

  const { currentPokemon } = state;

  const handleClick = (e: React.MouseEvent) => {
    dispatch({ type: "ADD", payload: currentPokemon });
  };
  return (
    <RightColumnStyles>
      {currentPokemon && (
        <div className="data-container">
          <h1>
            #{currentPokemon.id} - {upperCase(currentPokemon.name)}
          </h1>
          <img
            src={currentPokemon.sprites["front_default"]}
            alt={currentPokemon.name}
          />

          {currentPokemon.types.map((type: { type: { name: string } }) => {
            return <p className="type">{upperCase(type.type.name)}</p>;
          })}
          {/* TODO: Change to remove from team if pokemon is from team */}
          <button onClick={handleClick}>ADD TO TEAM</button>
        </div>
      )}
    </RightColumnStyles>
  );
}
