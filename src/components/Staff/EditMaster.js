import React, { useState, useEffect } from "react";
import { Form, Button, Dimmer, Loader, Message } from "semantic-ui-react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { putStaff } from "../../redux/actions/staff";

function EditMaster() {
  const { id } = useParams();
  const { items: masters, staffLoadingState, error } = useSelector(state => state.staff);
  const services = useSelector(state => state.services.items);
  const [master, setMaster] = useState({ name: "", description: "", services: [] });
  const [masterPicture, setMasterPicture] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (staffLoadingState === "succeed") {
      setMaster(masters.find(({ _id }) => _id === id));
    }
  }, [masters, staffLoadingState, id]);

  const submitHandler = () => {
    const data = new FormData();

    data.append("master", JSON.stringify(master));
    if (masterPicture) {
      data.append("masterPicture", masterPicture);
    }

    dispatch(putStaff(data));
  };

  return (
    <>
      {staffLoadingState === "loading" &&
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>}
      {staffLoadingState === "failed" &&
        <Message negative>
          <Message.Header>Looks like, something went wrong</Message.Header>
          <p>{error.message}</p>
        </Message>}
      {staffLoadingState === "succeed" &&
        <Form className="add-edit-form" onSubmit={submitHandler}>
          <Form.Input
            id="new-mater-name"
            label="Master Name:"
            placeholder="Name"
            value={master.name}
            onChange={(e, data) => setMaster({ ...master, name: data.value })}
            required
          />
          <Form.TextArea
            id="new-mater-info"
            label="About Master:"
            placeholder="Few words about master"
            value={master.description}
            onChange={(e, data) => setMaster({ ...master, description: data.value })}
          />
          <Form.Dropdown
            id="new-mater-services"
            label="Services:"
            placeholder="Skills"
            multiple
            selection
            options={services.map(({ _id, name }) => ({ key: _id, text: name, value: _id }))}
            value={master.services}
            onChange={(e, data) => setMaster({ ...master, services: data.value })}
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
        </Form>}
    </>
  );
}
export default EditMaster;
