import React, { useEffect } from "react";
import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Header from "./components/Header";
import StaffPage from "./components/Staff/StaffPage";
import { getStaff } from "./redux/actions/staff";

import "./App.scss";

const useFetching = actionCreator => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionCreator());
  }, []);
};

function App() {
  useFetching(getStaff);

  return (
    <Container>
      <Header />
      <Route path="/staff">
        <StaffPage />
      </Route>
    </Container>
  );
}

export default App;
