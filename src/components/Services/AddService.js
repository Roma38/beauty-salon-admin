import React, { useState } from "react";
import { Form, Input, Button } from "semantic-ui-react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { postService } from "../../redux/actions/services";

function AddService() {
  const { category } = useParams();
  const categories = useSelector(state => state.services.categories);
  const [service, setService] = useState({ name: "", description: "", category, price: "", duration: 30 });
  const [servicePicture, setServicePicture] = useState(null);
  const dispatch = useDispatch();

  const dropdownOptions = [
    ...categories.map(category => ({
      key: category,
      text: category,
      value: category
    })),
    { key: "other", text: "other", value: "" }
  ];

  const submitHandler = () => {
    const data = new FormData();
    data.append("service", JSON.stringify(service));
    if (servicePicture) {
      data.append("servicePicture", servicePicture);
    }
    dispatch(postService(data));
  };

  return (
    <Form className="add-edit-form" onSubmit={submitHandler}>
      <Form.Input
        id="new-service-name"
        control={Input}
        label="Service:"
        placeholder="Title"
        value={service.name}
        onChange={(e, data) => setService({ ...service, name: data.value })}
        required
      />
      <Form.TextArea
        id="new-service-info"
        label="Service Description:"
        placeholder="Describe service..."
        value={service.description}
        onChange={(e, data) => setService({ ...service, description: data.value })}
      />
      <Form.Dropdown
        id="new-service-category"
        label="Category:"
        selection
        options={dropdownOptions}
        value={service.category}
        onChange={(e, data) => setService({ ...service, category: data.value })}
      />
      <Form.Group widths="3" inline unstackable>
        <label>Duration:</label>
        <Form.Input
          className="number-input"
          fluid
          type="number"
          label="Hours:"
          value={Math.floor(service.duration / 60)}
          onChange={(e, data) => setService({ ...service, duration: service.duration % 60 + data.value * 60 })} //TODO: вынести в функцию
          min="0"
          max="7"
          required
        />
        <Form.Input
          className="number-input"
          fluid
          type="number"
          label="Minutes:"
          value={service.duration % 60}
          onChange={(e, data) => setService({ ...service, duration: Math.floor(service.duration / 60) * 60 + Number(data.value) })} //TODO: вынести в функцию
          min="0"
          max="30"
          step="30"
          required
        />
      </Form.Group>
      <Form.Group inline>
        <label>Price:</label>
        <Input
          className="number-input"
          placeholder="Varies"
          type="number"
          label="uah"
          labelPosition="right"
          value={service.price}
          onChange={(e, data) => setService({ ...service, price: +data.value })}
          min="0"
        />
        <Form.Checkbox
          className="price-checkbox"
          label="Varies"
          checked={service.price === ""}
          onChange={(e, data) => setService({ ...service, price: data.checked ? "" : 1 })}
        />
      </Form.Group>
      <div className="buttons-align-wrapper">
        <Form.Field inline>
          <Button
            as="label"
            htmlFor="upload"
            icon="upload"
            content="Upload Picture"
            primary={Boolean(servicePicture)}
          />
        </Form.Field>
        <input
          hidden
          id="upload"
          type="file"
          onChange={e => setServicePicture(e.target.files[0])}
        />
        <Button type="submit" positive>Save</Button>
        <Button as={Link} to={"/services"} negative>Cancel</Button>
      </div>
    </Form>
  );
}
export default AddService;
