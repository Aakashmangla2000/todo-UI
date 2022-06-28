import React from "react";
import { Card, Button, Col, Badge } from "react-bootstrap";

const Item = ({ data, setTodos, todos }) => {
  const deleteTodo = () => {
    setTodos(todos.filter((todo) => todo.id != data.id));
  };

  const editTodo = () => {};

  return (
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>{data.description}</Card.Text>
          <Card.Text>
            {data.completed ? (
              <Badge bg="success">Completed</Badge>
            ) : (
              <Badge bg="warning" text="dark">
                Pending
              </Badge>
            )}
          </Card.Text>
          <Button variant="primary" onClick={editTodo}>
            Edit
          </Button>
          <Button variant="danger" onClick={deleteTodo}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Item;
