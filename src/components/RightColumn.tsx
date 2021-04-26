import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { UserContext } from "../contexts/UserContext";
import { upperCase } from "../utils/helpers";
// import { useWeaknesses } from "../utils/hooks";

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
  const [weaknesses, setWeaknesses] = useState(null);

  useEffect(() => {
    gatherWeaknesses();
  }, [currentPokemon]);

  async function gatherWeaknesses() {
    if (currentPokemon === undefined) {
      return ["No Pokémon Selected"];
    }

    const promises = currentPokemon.types.map(async (type) => {
      let data = await fetch(
        `https://pokeapi.co/api/v2/type/${type.type.name}/`
      );
      const weakness = await data.json();
      return weakness;
    });
    const weaknesses = await Promise.all(promises);
    setWeaknesses(weaknesses);

    return weaknesses;
  }

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
            return (
              <p className="type" key={type.type.name}>
                {upperCase(type.type.name)}
              </p>
            );
          })}
          <p>Weaknesses: </p>
          {weaknesses.map((weakness) =>
            weakness["damage_relations"]["double_damage_from"].map((damage) => (
              <p> {upperCase(damage.name)} </p>
            ))
          )}
          {/* TODO: Change to remove from team if pokemon is from team */}
          <button onClick={handleClick}>ADD TO TEAM</button>
        </div>
      )}
      {}
    </RightColumnStyles>
  );
}
