import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Container } from "./components/Container";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Header>Pokémon Team Builder</Header>
        <Container />
      </div>
    </UserProvider>
  );
}

export default App;
