import React, { useState } from "react";
import { Form, Col, Row, Container } from "react-bootstrap";
import { TASK_STATUS } from "../../Constants";

const TaskForm = () => {
  return (
    <Container>
      <Form onSubmit={() => {}}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            Name of the Task
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" name="taskName" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            Start Date
          </Form.Label>
          <Col sm={4}>
            <Form.Control type="date" name="startDate" />
          </Col>
          <Form.Label column sm={2}>
            Deadline
          </Form.Label>
          <Col sm={4}>
            <Form.Control type="date" name="deadLine" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            Status
          </Form.Label>
          <Col sm={10}>
            <Form.Select name="status">
              {Object.values(TASK_STATUS).map((status) => (
                <option value={status}>{status}</option>
              ))}
            </Form.Select>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default TaskForm;
