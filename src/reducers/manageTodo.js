export default function manageTodo(state = {
  todos: [],
}, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return { todos: state.todos.concat(action.payload) };
    case "DELETE_TODO":
      return {todos: state.todos.filter(todo => todo.id !== action.payload)}
    default:
      return state;
  }
}
