import React, { useState, useEffect } from "react";
import { Button, Row } from "react-bootstrap";
import Item from "./Item";
import NewTodo from "./NewTodo";

const data = [
  {
    id: 1,
    completed: false,
    description: "Go to gym",
    title: "Workout",
  },
  {
    id: 2,
    completed: false,
    description: "Cook and eat dinner",
    title: "Eat dinner",
  },
  {
    id: 3,
    completed: true,
    description: "Study",
    title: "Study maths",
  },
  {
    id: 4,
    completed: false,
    description: "Yoga",
    title: "Yoga",
  },
];

function TodoList() {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newTodo, setNewTodo] = useState(false);
  const [todos, setTodos] = useState(data);

  if (loading) {
    return <p>Loading...</p>;
  }

  console.log(newTodo);

  return (
    <div>
      <Button variant="success" onClick={() => setNewTodo(true)}>
        Add TODO
      </Button>
      <br />
      <br />
      <div>
        {newTodo ? (
          <NewTodo
            newTodo={newTodo}
            setTodos={setTodos}
            setNewTodo={setNewTodo}
          />
        ) : (
          ""
        )}
      </div>
      <Row>
        {todos.map((element) => {
          return (
            <Item
              key={element.id}
              data={element}
              todos={todos}
              setTodos={setTodos}
            />
          );
        })}
      </Row>
    </div>
  );
}

export default TodoList;
