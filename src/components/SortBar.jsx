import React from "react";
import { Form } from "react-bootstrap";

function SortBar({ onSortChange }) {
  return (
    <Form className="mb-4 d-flex justify-content-center">
      <Form.Group controlId="sortSelect">
        <Form.Label className="me-2">Sort Bots By:</Form.Label>
        <Form.Select onChange={(e) => onSortChange(e.target.value)}>
          <option value="">-- Select --</option>
          <option value="health">Health</option>
          <option value="damage">Damage</option>
          <option value="armor">Armor</option>
        </Form.Select>
      </Form.Group>
    </Form>
  );
}

export default SortBar;
