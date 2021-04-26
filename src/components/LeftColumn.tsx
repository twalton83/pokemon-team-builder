import React, { useState } from "react";
import styled from "styled-components";
import TeamDisplay from "./TeamDisplay";
import { UserContext } from "../contexts/UserContext";

const LeftColumnStyles = styled.div`
  display: grid;
  grid-template-rows: 75% 25%;
  height: 100%;
  text-align: center;
  font-size: 1.5rem;
`;

const InputStyles = styled.input`
  height: 40px;
  border: 1px solid lightgray;
  border-radius: 5px 0px 0px 5px;
  width: 15vw;
`;

const SubmitButton = styled.button`
  height: 40px;
  background-color: #3b4cca;
  color: white;

  border: 1px solid #3b4cca;
  border-radius: 0px 5px 5px 0px;
`;

export default function LeftColumn() {
  const { state, dispatch } = React.useContext(UserContext);
  const [searchValue, setSearchValue] = useState("");

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();

    await fetch(`https://pokeapi.co/api/v2/pokemon/${searchValue}/`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "SET_CURRENT_POKEMON",
          payload: data,
        });
      });
  };

  return (
    <LeftColumnStyles>
      <TeamDisplay />
      <form>
        <InputStyles
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <SubmitButton onClick={handleClick}>Submit</SubmitButton>
      </form>
    </LeftColumnStyles>
  );
}
