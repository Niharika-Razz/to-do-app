import React, { useState } from "react";
import { Form, Col, Row, Container } from "react-bootstrap";
import { TASK_STATUS } from "../../Constants";

const TaskForm = () => {
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name of the Task</Form.Label>
          <Form.Control type="text" name="taskName" placeholder="text" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Row>
            <Col>
              <Form.Label>Start Date</Form.Label>
              <Form.Control type="date" name="startDate" />
            </Col>
            <Col>
              <Form.Label>Deadline</Form.Label>
              <Form.Control type="date" name="deadLine" />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label column sm={2}>
            Status
          </Form.Label>
          <Form.Select name="status">
            {Object.values(TASK_STATUS).map((status) => (
              <option value={status}>{status}</option>
            ))}
          </Form.Select>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default TaskForm;
