import { JEDI_ADD, JEDI_DELETE, JEDI_FETCH } from "../actions/types";

export default function (state = [], action){
  switch (action.type) {
    case JEDI_FETCH:
      return [
        ...action.payload,
        ...state,
      ];
    case JEDI_ADD:
      return [
        ...state,action.payload
      ];
    case JEDI_DELETE:
        state.forEach((jedi,i) => {
          if (jedi.id === action.id) {
            state.splice(i, 1)}});
      return [...state];
    default:
      return state;
  }
}
