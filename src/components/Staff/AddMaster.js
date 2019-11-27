import React, { useState } from "react";
import { Form, Input, TextArea, Button, Dropdown } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";

import { API_HOST } from "../../config";

const options = [
  { key: "angular", text: "Angular", value: "angular" },
  { key: "css", text: "CSS", value: "css" },
  { key: "design", text: "Graphic Design", value: "design" },
  { key: "ember", text: "Ember", value: "ember" },
  { key: "html", text: "HTML", value: "html" },
  { key: "ia", text: "Information Architecture", value: "ia" },
  { key: "javascript", text: "Javascript", value: "javascript" },
  { key: "mech", text: "Mechanical Engineering", value: "mech" },
  { key: "meteor", text: "Meteor", value: "meteor" },
  { key: "node", text: "NodeJS", value: "node" },
  { key: "plumbing", text: "Plumbing", value: "plumbing" },
  { key: "python", text: "Python", value: "python" },
  { key: "rails", text: "Rails", value: "rails" },
  { key: "react", text: "React", value: "react" },
  { key: "repair", text: "Kitchen Repair", value: "repair" },
  { key: "ruby", text: "Ruby", value: "ruby" },
  { key: "ui", text: "UI Design", value: "ui" },
  { key: "ux", text: "User Experience", value: "ux" }
];

function AddMaster() {
  const [masterName, setMasterName] = useState("");
  const [masterInfo, setMasterInfo] = useState("");
  const [services, setServices] = useState([]);
  const [masterPicture, setMasterPicture] = useState(null);

  const submitHandler = () => {
    const data = new FormData();

    data.append("name", masterName);
    data.append("description", masterInfo);
    data.append("services", services);
    data.append("masterPicture", masterPicture);

    axios
      .post(`${API_HOST}/staff/add`, data)
      .then(response => {
        console.log(response);
        setMasterName("");
        setMasterInfo("");
        setServices([]);
        setMasterPicture(null);
      })
      .catch(({ response }) => {
        console.error(
          response.data.error.errmsg || response.data.error.message
        );
        alert("Oops, something went wrong!!!!!");
      });
  };

  return (
    <Form className="staff-form" onSubmit={submitHandler}>
      <Form.Field
        id="new-mater-name"
        control={Input}
        label="Master Name:"
        placeholder="Name"
        value={masterName}
        onChange={(e, data) => setMasterName(data.value)}
        required
      />
      <Form.Field
        id="new-mater-info"
        control={TextArea}
        label="About Master:"
        placeholder="Few words about master"
        value={masterInfo}
        onChange={(e, data) => setMasterInfo(data.value)}
      />
      <Form.Field
        id="new-mater-services"
        control={Dropdown}
        label="Services:"
        placeholder="Skills"
        multiple
        selection
        options={options}
        value={services}
        onChange={(e, data) => setServices(data.value)}
      />
      <div className="buttons-align-wrapper">
        <Form.Field inline>
          <Button
            as="label"
            htmlFor="upload"
            icon="upload"
            content="Upload Picture"
            primary={Boolean(masterPicture)}
          />
        </Form.Field>
        <input
          hidden
          id="upload"
          multiple
          type="file"
          onChange={e => setMasterPicture(e.target.files[0])}
        />
        <Button type="submit" positive>
          Save
        </Button>
        <Button as={Link} to={"/staff"} negative>
          Cancel
        </Button>
      </div>
    </Form>
  );
}
export default AddMaster;
