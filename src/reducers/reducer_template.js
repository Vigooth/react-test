import { TEMPLATE_CHANGE } from "../actions/types";

export default function (state = "", action) {
  switch (action.type) {
    case TEMPLATE_CHANGE:
      return action.template;
    default:
      return state;
  }
}
