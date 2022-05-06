import axios from 'axios';

export const actionTypes = {
  POST_TODO: 'POST_TODO',
  GET_TODOS: 'GET_TODOS',
  GET_TODO: 'GET_TODO'
};

export const getTodos = todos => {
  return {
    type: actionTypes.GET_TODOS,
    payload: todos
  };
};

export const postTodo = () => {
  return {
    type: actionTypes.POST_TODO
  };
};



export const fetchTodos = () => async dispatch => {
  const { data } = await axios('http://localhost:8080/todos');
  dispatch(getTodos(data));
};

export const submitTodo = todo => async dispatch => {
  await axios.post('http://localhost:8080/todos', todo);
  dispatch(postTodo());
}; 