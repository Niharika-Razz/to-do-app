import React from "react";
import { Col, Row } from "react-bootstrap";

const STATUS = {
  TO_DO: "To Do",
  IN_PROGRSS: "In Progress",
  IN_REVIEW: "In-Review",
  COMPLETED: "Completed",
};

const StatusTabs = () => {
  return (
    <>
      <Row>
        <Col md={3}> {STATUS.TO_DO}</Col>
        <Col md={3}> {STATUS.IN_PROGRSS}</Col>
        <Col md={3}> {STATUS.IN_REVIEW}</Col>
        <Col md={3}> {STATUS.COMPLETED}</Col>
      </Row>
    </>
  );
};

export default StatusTabs;
