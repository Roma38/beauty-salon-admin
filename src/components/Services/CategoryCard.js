import React from "react";
import { Card, List } from "semantic-ui-react";
import { Link } from "react-router-dom";
//import { useDispatch } from "react-redux";

function CategoryCard({ category, services }) {
  //const dispatch = useDispatch();

  return (
    <Card>
      <Card.Content>
        <Card.Header textAlign="center">{category}</Card.Header>
        <List as="ul">
          {services.map(({ _id, name }) => (
            <List.Item as={Link} key={_id} to={`/services/edit/${_id}`}>
              {name}
            </List.Item>
          ))}
          <List.Item as={Link} key={"add"} to={`/services/add/${category}`}>
            Add service
          </List.Item>
        </List>
      </Card.Content>
    </Card>
  );
}

export default CategoryCard;
