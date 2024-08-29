import axios from "axios";

const BASE_URL = "https://243cb750359beb3a.mokky.dev/todos";

export const getTodoRequest = async () => {
  try {
    const { data } = await axios.get(BASE_URL);
    return data;
  } catch (error) {
    throw new Error("Error!!!", error);
  }
};

export const postTodoRequest = async (item) => {
  try {
    const { data } = await axios.post(BASE_URL, item);
    return data;
  } catch (error) {
    throw new Error("Error!!!", error);
  }
};
export const deleteTodoRequest = async (id) => {
  try {
    await axios.delete(BASE_URL + `/${id}`);
  } catch (error) {
    throw new Error("Error!!!", error);
  }
};
export const updateTodoRequest = async (id, item) => {
  try {
    await axios.patch(`${BASE_URL}/${id}`, item);
  } catch (error) {
    throw new Error("Error!!!", error);
  }
};
