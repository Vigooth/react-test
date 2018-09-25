import axios from 'axios';
import { ADD_JEDI, DELETE_JEDI, FETCH_JEDI, URL_FETCH_JEDI } from "./types";
import { getNewJediId } from "../utils/jedi";

const fetchJedi = () => {
  return async (dispatch) => {
    const fetchJedi = await axios.get(URL_FETCH_JEDI);
    dispatch({
      type: FETCH_JEDI,
      payload: fetchJedi.data,
    });
  }
};

const addJedi = name => {
  return  async (dispatch, getState) => {
    const
      jediList = getState().jedi,
      id = getNewJediId(jediList),
      response = await axios.post(URL_FETCH_JEDI, {id, name});

    dispatch({
      type: ADD_JEDI,
      payload: response.data,
    });
  }
};

const deleteJedi = id => {
  return  (dispatch) => {
    axios.delete(`${URL_FETCH_JEDI}/${id}`);
    dispatch({
      type: DELETE_JEDI,
      id
    });
  }
};

export { addJedi, fetchJedi, deleteJedi }
