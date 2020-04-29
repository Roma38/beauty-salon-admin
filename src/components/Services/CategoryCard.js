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
          {services.map((service) => (
            <List.Item as={Link} key={service._id} to={{ pathname: `/services/edit/${service.name}`, state: { service } }}>
              {service.name}
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

// to = {{
//   pathname: "/courses",
//     search: "?sort=name",
//       hash: "#the-hash",
//         state: { fromDashboard: true }
// }}

export default CategoryCard;
