import React from "react";
import styled from "styled-components";

type AppProps = {
  children: React.ReactNode;
};

const HeaderStyles = styled.div`
  height: 50px;
  background-color: #cc0000;
  color: white;
  text-align: center;
  font-size: 1.5rem;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.4);

  margin-bottom: 5px;
`;

export const Header: React.FC<AppProps> = ({ children }) => {
  return <HeaderStyles>{children}</HeaderStyles>;
};
