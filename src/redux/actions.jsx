// export const addTodoAction = {
//   type: "todoList/addTodo",
//   payload: {},
// };


// action creator => function 

export const addTodo = (data) => { 
    return { 
        type: 'todoList/addTodo',
        payload: data
    }
}