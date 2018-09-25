import { JEDI_FILTER } from "../actions/types";

const initialState = {search: ""};

export default function (state = initialState, action){
  switch (action.type) {
    case JEDI_FILTER:
      return action.filter;
    default:
      return state;
  }
}
