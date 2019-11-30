import React from "react";
import { Header, Card } from "semantic-ui-react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";

import CategoryCard from "./CategoryCard";
import AddService from "./AddService";

function ServicesPage() {
  const { items: services, categories } = useSelector(state => state.services);

  return (
    <>
      <Route exact path="/services">
        <Header as="h1" textAlign="center" content="Services" />
        <Card.Group centered>
          {categories.map(category => (
            <CategoryCard
              category={category}
              services={services.filter(
                service => service.category === category
              )}
              key={category}
            />
          ))}
          <CategoryCard
            category={"other"}
            services={services.filter(
              service => !categories.includes(service.category)
            )}
            key={"other"}
          />
        </Card.Group>
      </Route>
      <Route path="/services/add/:category">
        <Header as="h1" textAlign="center" content="Add Service" />
        <AddService />
      </Route>
      {/* <Route path="/staff/edit/:id">
        <Header as="h1" textAlign="center" content="Edit master info" />
        <EditMaster />
      </Route> */}
    </>
  );
}
export default ServicesPage;
