import React from "react";
import styled from "styled-components";
import TeamDisplay from "./TeamDisplay";

const LeftColumnStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  text-align: center;
  font-size: 1.5rem;
`;

const InputStyles = styled.input`
  height: 40px;
  border: 1px solid lightgray;
  border-radius: 5px 0px 0px 5px;
`;

const SubmitButton = styled.button`
  height: 40px;
  background-color: #3b4cca;
  color: white;

  border: 1px solid #3b4cca;
  border-radius: 0px 5px 5px 0px;
`;

export default function LeftColumn() {
  return (
    <LeftColumnStyles>
      <TeamDisplay />
      <form>
        <InputStyles type="text" placeholder="Search..." />
        <SubmitButton>Submit</SubmitButton>
      </form>
    </LeftColumnStyles>
  );
}
