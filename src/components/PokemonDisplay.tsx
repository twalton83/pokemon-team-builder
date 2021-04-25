import * as React from "react";
import styled from "styled-components";
import { UserContext } from "../contexts/UserContext";

const PokemonCardStyles = styled.div``;

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  const { state, dispatch } = React.useContext(UserContext);

  return (
    <PokemonCardStyles>
      <p>{pokemon.name || "No pokemon here!"}</p>
    </PokemonCardStyles>
  );
}

type PokemonCardProps = {
  pokemon: Pokemon;
};

interface Pokemon {
  name: string;
}
