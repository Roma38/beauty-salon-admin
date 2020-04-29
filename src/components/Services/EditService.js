import React, { useState } from "react";
import { Form, Input, Button } from "semantic-ui-react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { postService } from "../../redux/actions/services";

function EditService() {
  const { state: { service } } = useLocation();
  const history = useHistory();
  const categories = useSelector(state => state.services.categories);
  //TODO: 1) сетить значения после того как они загрузятся
  // 2) Один стейт для сервиса вместо кучи
  // 3) Duration - одним значением (минуты)
  const [serviceName, setServiceName] = useState(service.name);
  const [serviceDescription, setServiceDescription] = useState(service.description);
  const [serviceCategory, setServiceCategory] = useState(service.category);
  const [servicePicture, setServicePicture] = useState(service.pictureURL);
  const [durationHours, setDurationHours] = useState(service.duration[0]);
  const [durationMinutes, setDurationMinutes] = useState(service.duration[1]);
  const [servicePrice, setServicePrice] = useState(service.price);
  const [isPriceVaries, setIsPriceVaries] = useState(!service.price);
  const dispatch = useDispatch();

  const dropdownOptions = [
    ...categories.map(category => ({
      key: category,
      text: category,
      value: category
    })),
    { key: "other", text: "other", value: "" }
  ];
//TODO: подумать нужна ли "other" категория
  const submitHandler = () => {
    const data = new FormData();
    data.append("name", serviceName);
    data.append("description", serviceDescription);
    data.append("category", serviceCategory);
    data.append("duration", JSON.stringify([durationHours, durationMinutes]));
    data.append("price", isPriceVaries ? "" : servicePrice);
    data.append("servicePicture", servicePicture);

    dispatch(postService(data));
    history.push("/services");
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
export default EditService;
