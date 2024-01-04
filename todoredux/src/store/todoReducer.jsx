const initialState = {
  todoList:[{id:new Date().getTime(), text:"Add todo to do", completed: false}],
}

export const ADD = 'ADD'
export const DEL = 'DEL'
export const CLR = 'CLR'
export const TGL = 'TGL'
export const EDT = 'EDT';

export const addTodo = (payload) => ({type:ADD, payload})   
export const clearTodo = () => ({type:CLR})
export const deleteTodo = (payload) => ({type:DEL, payload})
export const toggleTodo = (payload) => ({type:TGL, payload})
export const editTodo = (payload) => ({ type: EDT, payload });




export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD:
      return {
        todoList: [
          ...state.todoList,
          { id: new Date().getTime(), text: payload, completed: false },
        ],
      };

    case DEL:
      return {
        todoList: state.todoList.filter((todo) => todo.id !== payload),
      };

    case TGL:
      return {
        todoList: state.todoList.map((todo) =>
          todo.id === payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case CLR:
      return initialState;

    case EDT:
      return {
        todoList: state.todoList.map((todo) =>
          todo.id === payload.id
            ? { ...todo, text: payload.text }
            : todo
        ),
      };

    default:
      return state;
  }
};



