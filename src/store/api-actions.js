import { loadData } from './actions';
import { getAdaptedData } from '../utils/adapter';

export const fetchData = () => (dispatch, _getState, api) => {
  api
    .get()
    .then(({ data }) => {
      dispatch(loadData(getAdaptedData(data.guitars)));
    })
    .catch((err) => {
      throw err;
    });
};
