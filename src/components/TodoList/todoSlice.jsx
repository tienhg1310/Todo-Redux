const initState = [
  { name: "name 1", completed: false, priority: "Medium", id: "1" },
  { name: "name 2", completed: true, priority: "High", id: "2" },
  { name: "name 3", completed: true, priority: "High", id: "3" },
  { name: "name 4", completed: false, priority: "High", id: "4" },
  { name: "name 5", completed: false, priority: "Low", id: "5" },
  { name: "name 6", completed: false, priority: "Low", id: "6" },
  { name: "name 7", completed: false, priority: "Low", id: "7" },
  { name: "name 8", completed: false, priority: "Low", id: "8" },
  { name: "name 9", completed: false, priority: "Low", id: "9" },
];

const todoListReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];
    case "todoList/toggleTodoStatus":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
};

export default todoListReducer;
``;
