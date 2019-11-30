import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { Link, useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { putStaff } from "../../redux/actions/staff";

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

function EditMaster() {
  const { id } = useParams();//TODO: Нельзя ли придумать что-нибудь получше?
  const history = useHistory();
  const master = useSelector(
    ({ staff }) =>
      staff.items.find(({ _id }) => _id === id) || history.push("/staff")
  );
  const [masterName, setMasterName] = useState(master ? master.name : "");
  const [masterInfo, setMasterInfo] = useState(master ? master.description : "");
  const [services, setServices] = useState(master ? master.services : []);
  const [masterPicture, setMasterPicture] = useState(null);
  const dispatch = useDispatch();

  const submitHandler = () => {
    const data = new FormData();

    data.append("_id", id);
    data.append("name", masterName);
    data.append("description", masterInfo);
    data.append("services", JSON.stringify(services));
    masterPicture
      ? data.append("masterPicture", masterPicture)
      : data.append("pictureURL", master.pictureURL);

    dispatch(putStaff(data));
  };

  return (
    <Form className="add-edit-form" onSubmit={submitHandler}>
      <Form.Input
        id="new-mater-name"
        label="Master Name:"
        placeholder="Name"
        value={masterName}
        onChange={(e, data) => setMasterName(data.value)}
        required
      />
      <Form.TextArea
        id="new-mater-info"
        label="About Master:"
        placeholder="Few words about master"
        value={masterInfo}
        onChange={(e, data) => setMasterInfo(data.value)}
      />
      <Form.Dropdown
        id="new-mater-services"
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
export default EditMaster;
