import React from "react";
import { Container } from "@mui/material";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

export default function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <NavBar />
        <Route>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
        </Route>
      </Container>
    </BrowserRouter>
  );
}
