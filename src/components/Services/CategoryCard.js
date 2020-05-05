import React from "react";
import { Card, List, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { deleteService } from "../../redux/actions/services"

function CategoryCard({ category, services }) {
  const dispatch = useDispatch();

  return (
    <Card>
      <Card.Content>
        <Card.Header textAlign="center">{category}</Card.Header>
        <List as="ul">
          {services.map((service) => (
            <List.Item key={service._id}>
              <Link to={`/services/edit/${service._id}`}>{service.name}</Link>
              <Icon name='trash' className="delete-icon" onClick={() => dispatch(deleteService(service._id))} />
            </List.Item>
          ))}
        </List>
      </Card.Content>
      <Card.Content extra>
        <Link to={`/services/add/${category}`}>Add service</Link>
      </Card.Content>
    </Card>
  );
}

export default CategoryCard;
