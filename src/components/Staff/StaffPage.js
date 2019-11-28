import React from "react";
import { Header, Card, Image } from "semantic-ui-react";
import { Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import MasterCard from "./MasterCard";
import AddMaster from "./AddMaster";
import EditMaster from "./EditMaster";
import { API_HOST } from "../../config";

function StaffPage() {
  const staff = useSelector(state => state.staff.items);

  return (
    <>
      <Route exact path="/staff/">
        <Header as="h1" textAlign="center" content="Staff" />
        <Card.Group centered>
          <Card to="/staff/add" as={Link}>
            <Image src={`${API_HOST}/images/image.png`} />
            <Card.Content header="Add Master" textAlign="center" />
          </Card>
          {staff.map(master => (
            <MasterCard master={master} key={master.name} />
          ))}
        </Card.Group>
      </Route>
      <Route path="/staff/add">
        <Header as="h1" textAlign="center" content="New master" />
        <AddMaster />
      </Route>
      <Route path="/staff/edit/:id">
        <Header as="h1" textAlign="center" content="Edit master info" />
        <EditMaster />
      </Route>
    </>
  );
}
export default StaffPage;
