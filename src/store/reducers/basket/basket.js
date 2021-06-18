import { extend } from '../../../utils/utils';
import { ActionType } from '../../actions';
import { addGuitarToBasket, deleteGuitar } from '../../../utils/utils';

const initialState = {
  guitars: [],
  currentGuitar: null,
};

const basket = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_GUITAR_TO_BASKET:
      const newGuitars = addGuitarToBasket(state.guitars, action.payload);
      return extend(state, {
        guitars: newGuitars,
      });
    case ActionType.CHANGE_CURRENT_GUITAR_BASKET:
      return extend(state, {
        currentGuitar: action.payload,
      });
    case ActionType.DELETE_GUITAR:
      return extend(state, {
        guitars: deleteGuitar(state.guitars, action.payload),
        currentGuitar: null,
      });
    case ActionType.CHANGE_GUITAR_COUNT:
      return extend(state, {
        guitars: action.payload,
      });
    default:
      return state;
  }
};

export { basket };
