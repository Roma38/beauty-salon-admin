import React from "react";
import { Card, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";


function MastersCards() {
  return (
    <Card.Group>
      <Card>
        <Image
          src="https://react.semantic-ui.com/images/wireframe/image.png"
          wrapped
          ui={false}
        />
        <Card.Content>
          <Image
            centered
            size="large"
            src="https://react.semantic-ui.com/images/wireframe/centered-paragraph.png"
          />
        </Card.Content>
        <Card.Content extra textAlign="center">
          <Button as={Link} to="/staff/add" content="Add master" />
        </Card.Content>
      </Card>
      <Card>
        <Image
          src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>Elliot Baker</Card.Header>
          <Card.Description>
            Elliot is a sound engineer living in Nashville who enjoys playing
            guitar and hanging with his cat.
          </Card.Description>
        </Card.Content>
        <Card.Content extra textAlign="center">
          <Button positive content="Edit" />
          <Button negative content="Delete" />
        </Card.Content>
      </Card>
      <Card>
        <Image
          src="https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
          wrapped
          ui={false}
          height={290}
        />
        <Card.Content>
          <Card.Header>Matthew</Card.Header>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
        <Card.Content extra textAlign="center">
          <Button positive content="Edit" />
          <Button negative content="Delete" />
        </Card.Content>
      </Card>
    </Card.Group>
  );
}

export default MastersCards;
