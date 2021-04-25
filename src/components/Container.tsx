import React from "react";
import styled from "styled-components";
import LeftColumn from "./LeftColumn";

const ContainerStyles = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 100%;
`;

export const Container: React.FC = () => {
  return (
    <ContainerStyles>
      <LeftColumn />
    </ContainerStyles>
  );
};