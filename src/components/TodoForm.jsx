import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import styled from "styled-components";

export const TodoForm = () => {
  const [todoValue, setTodoValue] = useState("");

  const { addNewTodo } = useContext(TodoContext);
  const handleChange = (event) => {
    setTodoValue(event.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    addNewTodo(todoValue);
    setTodoValue("");
  };
  return (
    <StyledTodoForm onSubmit={submitHandler}>
      <input
        type="text"
        value={todoValue}
        onChange={handleChange}
        placeholder="todoshkaa.."
      />
      <button type="submit">ADD TODO</button>
    </StyledTodoForm>
  );
};


const StyledTodoForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 20px;
  button {
    border-radius: 6px;
    background-color: #9b3107;
    &:hover {
      background: #7e2a0a;
      color: #fff;
    }

    &:active {
      background: #993108;
    }
    &:disabled {
      background: #cac6c4;
    }
  }
`;

