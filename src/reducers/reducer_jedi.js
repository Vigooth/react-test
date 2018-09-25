import { ADD_JEDI, DELETE_JEDI, FETCH_JEDI } from "../actions/types";

export default function (state = [], action){
  switch (action.type) {
    case FETCH_JEDI:
      return [
        ...action.payload,
        ...state,
      ];
    case ADD_JEDI:
      return [
        ...state,action.payload
      ];
    case DELETE_JEDI:
        state.forEach((jedi,i) => {
          if (jedi.id === action.id) {
            state.splice(i, 1)}});
      return [...state];
    default:
      return state;
  }
}
