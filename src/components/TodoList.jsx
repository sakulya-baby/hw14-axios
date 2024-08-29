import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import { TodoItem } from "./TodoItem";
export const TodoList = () => {
  const { array, deleteTodoHandler, updateHandler } = useContext(TodoContext);

  const [editingId, setEditingId] = useState(null);
  const handleDelete = (id) => {
    deleteTodoHandler(id);
  };
  const handleUpdate = (id, item) => {
    updateHandler(id, item);
    setEditingId(null);
  };
  return (
    <ul>
      {array.map((item) => (
        <TodoItem
          key={item.id}
          {...item}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
          isEditingId={editingId === item.id}
          setEditingId={setEditingId}
        />
      ))}
    </ul>
  );
};
