import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const NewTodo = ({ newTodo, setNewTodo, setTodos }) => {
  const [inputs, setInputs] = useState({});
  const [id, setId] = useState(4);

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    if (name == "completed")
      if (value == "1") value = true;
      else value = false;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setId(id + 1);
    setInputs((values) => ({ ...values, id: id }));
    console.log(inputs);
    setNewTodo(false);
    setTodos((values) => [...values, inputs]);
  };

  return (
    <Modal
      show={newTodo}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Todo Item
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="todoTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              required
              name="title"
              type="text"
              placeholder="Enter title"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="todoDesc">
            <Form.Label>Description</Form.Label>
            <Form.Control
              required
              name="description"
              type="text"
              placeholder="Description"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Select
            required
            aria-label="Completed"
            name="completed"
            onChange={handleChange}
          >
            <option>Completed</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </Form.Select>
          <br />
          <Button variant="primary" type="submit">
            Add
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => setNewTodo(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewTodo;
