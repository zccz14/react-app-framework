// todo module

// action types
const LOAD = 'todo/load';
const CREATE = 'todo/insert';
const UPDATE = 'todo/update';
const REMOVE = 'todo/remove';


// action creator
export function todoFind(todoList) {
  return {type: LOAD, todoList};
}
export function todoInsert(todoInstance) {
  return {type: CREATE, todoInstance};
}
export function todoUpdate(index, todoInstance) {
  return {type: UPDATE, index, todoInstance};
}
export function todoDelete(index) {
  return {type: REMOVE, index};
}

// reducer
export default function reducer(state = {todoList: []}, action) {
  switch (action.type) {
    case LOAD:
      return Object.assign({}, state, {todoList: action.todoList});
    case CREATE:
      return Object.assign(
          {}, state, {todoList: [...state.todoList, action.todoInstance]});
    case UPDATE:
      return Object.assign({}, state, {
        todoList: [
          ...state.todoList.slice(0, action.index),
          action.todoInstance,
          ...state.todoList.slice(action.index + 1)
        ]
      });
    case REMOVE:
      return Object.assign({}, state, {
        todoList: [
          ...state.todoList.slice(0, action.index),
          ...state.todoList.slice(action.index + 1)
        ]
      });
    default:
      return state;
  }
}