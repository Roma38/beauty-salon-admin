import React from "react";
import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";


import Header from "./components/Header";
import StaffPage from "./components/Staff/StaffPage"
import "./App.css";

function App() {
  return (
    <Container>
      <Header />
      <Route path="/staff" >
        <StaffPage />
      </Route>
    </Container>
  );
}

export default App;
