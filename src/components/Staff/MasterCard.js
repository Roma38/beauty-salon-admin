import React from "react";
import { Card, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

import { API_HOST } from "../../config";

function MastersCards({
  master: { name, description, services, pictureURL = "image.png" }
}) {
  return (
    <Card>
      <Image src={`${API_HOST}/images/${pictureURL}`} wrapped ui={false} />
      <Card.Content textAlign="center">
        <Card.Header>{name}</Card.Header>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra textAlign="center">
        <Button positive content="Edit" />
        <Button negative content="Delete" />
      </Card.Content>
    </Card>
  );
}

export default MastersCards;
