// const initState = [
//   { name: "name 1", completed: false, priority: "Medium", id: "1" },
//   { name: "name 2", completed: true, priority: "High", id: "2" },
//   { name: "name 3", completed: true, priority: "High", id: "3" },
//   { name: "name 4", completed: false, priority: "High", id: "4" },
//   { name: "name 5", completed: false, priority: "Low", id: "5" },
//   { name: "name 6", completed: false, priority: "Low", id: "6" },
//   { name: "name 7", completed: false, priority: "Low", id: "7" },
//   { name: "name 8", completed: false, priority: "Low", id: "8" },
//   { name: "name 9", completed: false, priority: "Low", id: "9" },
// ];

// const todoListReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "todoList/addTodo":
//       return [...state, action.payload];
//     case "todoList/toggleTodoStatus":
//       return state.map((todo) =>
//         todo.id === action.payload
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       );
//     default:
//       return state;
//   }
// };

// export default todoListReducer;
// ``;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const todosSlice = createSlice({
  name: "todoList",
  initialState: { status: "idle", todos: [] },
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodoStatus: (state, action) => {
      const currentTodo = state.filter((todo) => todo.id === action.payload);
      currentTodo.completed = !currentTodo.completed;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        console.log({ action });
        state.todos = action.payload;
        state.status = "idle";
      })
      .addCase(addNewTodo.fulfilled, (state, action) => {
        console.log({ action });
        state.todos.push(action.payload);
      });
  },
});

export const fetchTodos = createAsyncThunk("todos/fetchTodo", async () => {
  const response = await axios.get(
    "https://647a1c60a455e257fa6453f5.mockapi.io/todoList"
  );
  const jsonData = response.data;
  return jsonData;
});

export const addNewTodo = createAsyncThunk(
  "todos/addNewTodo",
  async (newTodo) => {
    const res = await axios.post(
      "https://647a1c60a455e257fa6453f5.mockapi.io/todoList",
      newTodo
    );
    return res.data;
  }
);

export default todosSlice;

export function addTodos(todo) {
  return function addTodoThunk(dispatch, getState) {
    dispatch(todosSlice.actions.addTodo(todo));

    console.log(getState());
  };
}
