import * as React from "react";
import styled from "styled-components";
import { UserContext } from "../contexts/UserContext";
import { upperCase } from "../helpers";

const PokemonCardStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  margin: 0 auto;

  height: 100%;
  width: 100%;
`;

const NoPokemonIcon = styled.div`
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.3);
  border: none;

  width: 100px;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 36px;
`;

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  const { state, dispatch } = React.useContext(UserContext);

  return (
    <PokemonCardStyles>
      {/* TODO: Determine better way to replace items in array so we don't need to do this typecheck */}
      {!(typeof pokemon === "number") && (
        <div>
          <p>{upperCase(pokemon.name)}</p>
          <img src={pokemon.sprites["front_default"]} alt="" />
          {pokemon.types.map((type: { type: { name: string } }) => {
            return (
              <p key={type.type.name} className="type">
                {upperCase(type.type.name)}
              </p>
            );
          })}
        </div>
      )}
      {typeof pokemon === "number" && (
        <NoPokemonIcon>
          <p>?</p>
        </NoPokemonIcon>
      )}
    </PokemonCardStyles>
  );
}

type PokemonCardProps = {
  pokemon: Pokemon;
};

interface Pokemon {
  name: string;
  types: object[];
  sprites: [];
}
