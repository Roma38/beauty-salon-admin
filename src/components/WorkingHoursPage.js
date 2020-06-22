import React, { useState } from "react";
import { Header, Label, Form, Button } from "semantic-ui-react";

function WorkingHoursPage() {
  const [workDaysSchedule, setWorkDaysSchedule] = useState(["10:00", "19:00"]);
  const [saturdaySchedule, setSaturdaySchedule] = useState(["10:00", "18:00"]);
  const [sundaySchedule, setSundaySchedule] = useState(["10:00", "17:00"]);
  const [isSaturdayDayOff, setIsSaturdayDayOff] = useState(false);
  const [isSundayDayOff, setIsSundayDayOff] = useState(false);

  return (
    <Form>
      <Header as="h1" textAlign="center" content="Working hours" />

      <Header as="h2" content="Monday - Friday:" />
      <Form.Group >
        <Form.Input
          value={workDaysSchedule[0]}
          onChange={e => setWorkDaysSchedule([e.target.value, workDaysSchedule[1]])}
          labelPosition='right'
          type='time'
          step={30 * 60}
          max={workDaysSchedule[1]}
        >
          <Label basic>From:</Label>
          <input />
          <Label>h:min</Label>
        </Form.Input>
        <Form.Input
          value={workDaysSchedule[1]}
          onChange={e => setWorkDaysSchedule([workDaysSchedule[0], e.target.value])}
          labelPosition='right'
          type='time'
          step={30 * 60}
          min={workDaysSchedule[0]}
        >
          <Label basic>To:</Label>
          <input />
          <Label>h:min</Label>
        </Form.Input>
      </Form.Group>

      <Header as="h2" content="Saturday:" />
      <Form.Checkbox
        label="Day off"
        checked={isSaturdayDayOff}
        onChange={() => setIsSaturdayDayOff(!isSaturdayDayOff)}
      />
      <Form.Group>
        <Form.Input
          value={saturdaySchedule[0]}
          onChange={e => setSaturdaySchedule([e.target.value, saturdaySchedule[1]])}
          labelPosition='right'
          type='time'
          step={30 * 60}
          max={saturdaySchedule[1]}
          disabled={isSaturdayDayOff}
        >
          <Label basic>From:</Label>
          <input />
          <Label>h:min</Label>
        </Form.Input>
        <Form.Input
          value={saturdaySchedule[1]}
          onChange={e => setSaturdaySchedule([saturdaySchedule[0], e.target.value])}
          labelPosition='right'
          type='time'
          step={30 * 60}
          min={saturdaySchedule[0]}
          disabled={isSaturdayDayOff}
        >
          <Label basic>To:</Label>
          <input />
          <Label>h:min</Label>
        </Form.Input>
      </Form.Group>

      <Header as="h2" content="Sunday:" />
      <Form.Checkbox
        label="Day off"
        checked={isSundayDayOff}
        onChange={() => setIsSundayDayOff(!isSundayDayOff)}
      />
      <Form.Group>
        <Form.Input
          value={sundaySchedule[0]}
          onChange={e => setSundaySchedule([e.target.value, sundaySchedule[1]])}
          labelPosition='right'
          type='time'
          step={30 * 60}
          max={sundaySchedule[1]}
          disabled={isSundayDayOff}
        >
          <Label basic>From:</Label>
          <input />
          <Label>h:min</Label>
        </Form.Input>
        <Form.Input
          value={sundaySchedule[1]}
          onChange={e => setSundaySchedule([sundaySchedule[0], e.target.value])}
          labelPosition='right'
          type='time'
          step={30 * 60}
          min={sundaySchedule[0]}
          disabled={isSundayDayOff}
        >
          <Label basic>To:</Label>
          <input />
          <Label>h:min</Label>
        </Form.Input>
      </Form.Group>

      <div className="align-center">
        <Button content="Save" positive />
      </div>
    </Form>
  );
}
export default WorkingHoursPage;
