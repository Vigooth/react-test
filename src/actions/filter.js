import { JEDI_FILTER } from "./types";
import { filterByName }  from "../components/jedi/jediFilter/criteria/filterByName";

const filterJedi = filter => {
  return  (dispatch) => {
    dispatch({
      type: JEDI_FILTER,
      filter
    });
  }
};

const filters = ({filter, jedi}) => {
  const filterNames = Object.keys(filter);
  let jediFiltered = [];
  filterNames.forEach(filterName => {
    switch (filterName) {
      case 'search': jediFiltered = filterByName(filter, jedi); break;
      default: break;
    }
  });
  return jediFiltered
};
export { filterJedi, filters }
