import axios from 'axios';
import { JEDI_ADD, JEDI_UPDATE, JEDI_DELETE, JEDI_FETCH, URL_FETCH_JEDI } from "./types";
import { getNewJediId } from "../utils/jedi";

const fetchJedi = () => {
  return async (dispatch) => {
    const fetchJedi = await axios.get(URL_FETCH_JEDI);
    dispatch({
      type: JEDI_FETCH,
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
      type: JEDI_ADD,
      payload: response.data,
    });
  }
};

const deleteJedi = id => {
  return  (dispatch) => {
    axios.delete(`${URL_FETCH_JEDI}/${id}`);
    dispatch({
      type: JEDI_DELETE,
      id
    });
  }
};
const updateJedi = (jedi, name) => {
  return  async (dispatch) => {
    const response = await axios.put(`${URL_FETCH_JEDI}/${jedi.id}`, {...jedi, name});
    dispatch({
      type: JEDI_UPDATE,
      payload: response.data
    });
  }
};


export {
  addJedi,
  updateJedi,
  fetchJedi,
  deleteJedi
}
