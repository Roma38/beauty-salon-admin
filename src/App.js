import React, { useEffect } from "react";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import Header from "./components/Header";
import StaffPage from "./components/Staff/StaffPage";
import ServicesPage from "./components/Services/ServicesPage";
import WorkingHoursPage from "./components/WorkingHoursPage";
import { getStaff } from "./redux/actions/staff";
import { getServices } from "./redux/actions/services";

import "./App.scss";

const useFetching = actionCreator => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionCreator());
  }, []);
};

function App() {
  useFetching(getStaff);
  useFetching(getServices);

  return (
    <Container>
      <Header />
      <Switch>
        <Route path="/staff">
          <StaffPage />
        </Route>
        <Route path="/services">
          <ServicesPage />
        </Route>
        <Route path="/working-hours">
          <WorkingHoursPage />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
