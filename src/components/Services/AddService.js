import React, { useState } from "react";
import { Form, Input, Button } from "semantic-ui-react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { postService } from "../../redux/actions/services";

function AddService() {
  const { category } = useParams();
  const categories = useSelector(state => state.services.categories);
  const [serviceName, setServiceName] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [serviceCategory, setServiceCategory] = useState(
    "other" ? "" : category
  );
  const [servicePicture, setServicePicture] = useState(null);
  const [durationHours, setDurationHours] = useState(0);
  const [durationMinutes, setDurationMinutes] = useState(30);
  const [servicePrice, setServicePrice] = useState("");
  const [isPriceVaries, setIsPriceVaries] = useState(true);
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
    data.append("name", serviceName);
    data.append("description", serviceDescription);
    data.append("category", serviceCategory);
    data.append("duration", JSON.stringify([durationHours, durationMinutes]));
    data.append("price", isPriceVaries ? servicePrice : "");
    data.append("servicePicture", servicePicture);

    dispatch(postService(data));

    setServiceName("");
    setServiceDescription("");
    setServiceCategory(category);
    setServicePicture(null);
    setDurationHours(0);
    setDurationMinutes(30);
    setServicePrice("");
    setIsPriceVaries(true);
  };

  return (
    <Form className="add-edit-form" onSubmit={submitHandler}>
      <Form.Input
        id="new-service-name"
        control={Input}
        label="Service:"
        placeholder="Title"
        value={serviceName}
        onChange={(e, data) => setServiceName(data.value)}
        required
      />
      <Form.TextArea
        id="new-service-info"
        label="Service Description:"
        placeholder="Describe service..."
        value={serviceDescription}
        onChange={(e, data) => setServiceDescription(data.value)}
      />
      <Form.Dropdown
        id="new-service-category"
        label="Category:"
        selection
        options={dropdownOptions}
        value={serviceCategory}
        onChange={(e, data) => setServiceCategory(data.value)}
      />
      <Form.Group widths="3" inline unstackable>
        <label>Duration:</label>
        <Form.Input
          className="number-input"
          fluid
          type="number"
          label="Hours:"
          value={durationHours}
          onChange={(e, data) => setDurationHours(data.value)}
          min="0"
          max="7"
          required
        />
        <Form.Input
          className="number-input"
          fluid
          type="number"
          label="Minutes:"
          value={durationMinutes}
          onChange={(e, data) => setDurationMinutes(data.value)}
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
          label="hrn"
          labelPosition="right"
          value={isPriceVaries ? "" : servicePrice}
          onChange={(e, data) => {
            setIsPriceVaries(false);
            setServicePrice(data.value);
          }}
          min="0"
        />
        <Form.Checkbox
          className="price-checkbox"
          label="Varies"
          checked={isPriceVaries}
          onChange={() => setIsPriceVaries(!isPriceVaries)}
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
        <Button type="submit" positive>
          Save
        </Button>
        <Button as={Link} to={"/services"} negative>
          Cancel
        </Button>
      </div>
    </Form>
  );
}
export default AddService;
