import React from "react";
import { Card, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { deleteStaff } from "../../redux/actions/staff";
import { API_HOST } from "../../config";

function MastersCards({
  master: { _id, name, description, services, pictureURL }
}) {
  const dispatch = useDispatch();

  return (
    <Card>
      <Image
        src={`${API_HOST}/images/${pictureURL || "image.png"}`}
        wrapped
        ui={false}
      />
      <Card.Content textAlign="center">
        <Card.Header>{name}</Card.Header>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra textAlign="center">
        <Button as={Link} to={`staff/edit/${_id}`} positive content="Edit" />
        <Button
          negative
          content="Delete"
          onClick={() => dispatch(deleteStaff(_id))}
        />
      </Card.Content>
    </Card>
  );
}

export default MastersCards;
