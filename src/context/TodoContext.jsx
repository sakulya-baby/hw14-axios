import { createContext, useEffect, useReducer } from "react";
import {
  deleteTodoRequest,
  getTodoRequest,
  postTodoRequest,
  updateTodoRequest,
} from "../api/todoRequests";
export const TodoContext = createContext({});

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "getTodo": {
      return {
        ...state,
        todos: payload,
      };
    }
    default: {
      return state;
    }
  }
};

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { todos: [] });

  const getTodos = async () => {
    const data = await getTodoRequest();

    dispatch({ type: "getTodo", payload: data });
  };

  useEffect(() => {
    getTodos();
  }, []);

  const addNewTodo = async (title) => {
    const newTodo = {
      title,
      id: Date.now().toString(),
    };

    await postTodoRequest(newTodo);
    getTodos();
  };
  const deleteTodoHandler = async (id) => {
    await deleteTodoRequest(id);
    getTodos();
  };
  const updateHandler = async (id, title) => {
    await updateTodoRequest(id, { title });
    getTodos();
  };

  const contextValue = {
    addNewTodo,
    array: state.todos,
    deleteTodoHandler,
    updateHandler,
  };
  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};
