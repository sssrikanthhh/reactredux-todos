
const initState = {
  todos: []
};

export const reducer = (store = initState, action) => {
  switch (action.type) {
    case 'GET_TODOS':
      return { ...store, todos: action.payload };
    default:
      return store;
  }
}; 