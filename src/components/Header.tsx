import React from "react";
import styled from "styled-components";

type AppProps = {
  children: React.ReactNode;
};

const HeaderStyles = styled.div`
  height: 50px;
  background-color: #cc0000;
  text-align: center;
  font-size: 1.5rem;
`;

export const Header: React.FC<AppProps> = ({ children }) => {
  return <HeaderStyles>{children}</HeaderStyles>;
};
