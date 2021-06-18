import {
  extend,
  getPriceGuitars,
  getCheckedValues,
} from '../../../utils/utils';
import { ActionType } from '../../actions';

const initialState = {
  guitars: [],
  priceGuitars: { min: 1, max: 1 },
  sortType: null,
  sortOrder: null,
  filterPriceMin: 1,
  filterPriceMax: 1,
  guitarTypes: [],
  countStrings: [],
  currentPage: 1,
  currentGuitar: null,
  isPopupOpen: false,
  isGuitarAdded: false,
};

const catalog = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_DATA:
      const price = getPriceGuitars(action.payload);
      return extend(state, {
        guitars: action.payload,
        priceGuitars: price,
        filterPriceMin: price.min,
        filterPriceMax: price.max,
      });
    case ActionType.CHANGE_SORT_TYPE:
      return extend(state, {
        sortType: action.payload,
      });
    case ActionType.CHANGE_SORT_ORDER:
      return extend(state, {
        sortOrder: action.payload,
      });
    case ActionType.CHANGE_PRICE_MIN:
      return extend(state, {
        filterPriceMin: action.payload,
      });
    case ActionType.CHANGE_PRICE_MAX:
      return extend(state, {
        filterPriceMax: action.payload,
      });
    case ActionType.CHANGE_GUITAR_TYPES:
      const checkedTypes = getCheckedValues(state.guitarTypes, action.payload);

      return extend(state, {
        guitarTypes: checkedTypes,
      });

    case ActionType.CHANGE_STRINGS_COUNT:
      const checkedStrings = getCheckedValues(
        state.countStrings,
        action.payload
      );

      return extend(state, {
        countStrings: checkedStrings,
      });

    case ActionType.CHANGE_CURRENT_GUITAR:
      return extend(state, {
        currentGuitar: action.payload,
      });

    case ActionType.CHANGE_PAGE:
      return extend(state, {
        currentPage: action.payload,
      });

    case ActionType.CHANGE_POPUP_FLAG:
      return extend(state, {
        isPopupOpen: action.payload,
      });
    case ActionType.CHANGE_GUITAR_ADDED_FLAG:
      return extend(state, {
        isGuitarAdded: action.payload,
      });

    default:
      return state;
  }
};

export { catalog };
