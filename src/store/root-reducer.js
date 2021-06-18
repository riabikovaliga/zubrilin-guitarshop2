import { combineReducers } from 'redux';
import { basket } from './reducers/basket/basket';
import { catalog } from './reducers/catalog/catalog';

export const NameSpace = {
  CATALOG: `catalog`,
  BASKET: `basket`,
};

export default combineReducers({
  [NameSpace.CATALOG]: catalog,
  [NameSpace.BASKET]: basket,
});
