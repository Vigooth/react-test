import { TEMPLATE_CHANGE } from "./types";

const changeTemplate = (template) => {
  localStorage.setItem("template", template);
  return  (dispatch) => {
    dispatch({
      type: TEMPLATE_CHANGE,
      template
    });
    location.reload();

  }
};
export { changeTemplate }
