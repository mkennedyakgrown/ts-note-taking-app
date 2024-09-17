import { useState } from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Container className="my-4">
      <Outlet />
    </Container>
  );
}

export default App;
