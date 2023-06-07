const initState = {
  filters: {},
  todoList: [
    { id: 1, name: "Learn Yoga", completed: false, priority: "Medium" },
    { id: 2, name: "Learn React", completed: false, priority: "High" },
    { id: 3, name: "Learn JS", completed: false, priority: "High" },
    { id: 4, name: "Learn Data", completed: false, priority: "Low" },
  ],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    default:
      return state;
  }
};

export default rootReducer;
