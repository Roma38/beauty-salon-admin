import React from "react";
import { Header } from "semantic-ui-react";
import { Route } from "react-router-dom";

import MastersCards from "./MastersCards";
import AddMaster from "./AddMaster";

function StaffPage() {
  return (
    <>
      <Route exact path="/staff/">
        <Header as="h1" textAlign="center" content="Staff" />
        <MastersCards />
      </Route>
      <Route path="/staff/add">
        <Header as="h1" textAlign="center" content="New master" />
        <AddMaster />
      </Route>
    </>
  );
}
export default StaffPage;
