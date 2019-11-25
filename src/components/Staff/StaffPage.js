import React from "react";
import { Header } from "semantic-ui-react";
import { Route } from "react-router-dom";

import MastersCards from "./MastersCards";
import AddMaster from "./AddMaster";


function StaffPage() {
  return (
    <>
      <Header as="h1" textAlign="center">
        Staff
      </Header>
      <Route exact path="/staff/">
        <MastersCards />
      </Route>
      <Route path="/staff/add">
        <AddMaster />
      </Route>
    </>
  );
}
export default StaffPage;
