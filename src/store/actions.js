export const ActionType = {
  LOAD_DATA: `LOAD_DATA`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
  CHANGE_SORT_ORDER: `CHANGE_SORT_ORDER`,
  CHANGE_PRICE_MIN: `CHANGE_PRICE_MIN`,
  CHANGE_PRICE_MAX: `CHANGE_PRICE_MAX`,
  CHANGE_GUITAR_TYPES: `CHANGE_GUITAR_TYPES`,
  CHANGE_STRINGS_COUNT: `CHANGE_STRINGS_COUNT`,
  CHANGE_PAGE: `CHANGE_PAGE`,
  CHANGE_POPUP_FLAG: `CHANGE_POPUP_FLAG`,
  CHANGE_CURRENT_GUITAR: `CHANGE_CURRENT_GUITAR`,
  CHANGE_GUITAR_ADDED_FLAG: `CHANGE_GUITAR_ADDED_FLAG`,

  ADD_GUITAR_TO_BASKET: `ADD_GUITAR_TO_BASKET`,
  DELETE_GUITAR: `DELETE_GUITAR`,
  CHANGE_CURRENT_GUITAR_BASKET: `CHANGE_CURRENT_GUITAR_BASKET`,
  CHANGE_GUITAR_COUNT: `CHANGE_GUITAR_COUNT`,
};

export const loadData = (data) => ({
  type: ActionType.LOAD_DATA,
  payload: data,
});

export const changeSortType = (sortType) => ({
  type: ActionType.CHANGE_SORT_TYPE,
  payload: sortType,
});

export const changeSortOrder = (sortOrder) => ({
  type: ActionType.CHANGE_SORT_ORDER,
  payload: sortOrder,
});

export const changePriceMin = (price) => ({
  type: ActionType.CHANGE_PRICE_MIN,
  payload: price,
});

export const changePriceMax = (price) => ({
  type: ActionType.CHANGE_PRICE_MAX,
  payload: price,
});

export const changeGuitarTypes = (type) => ({
  type: ActionType.CHANGE_GUITAR_TYPES,
  payload: type,
});

export const changeStringsCounts = (type) => ({
  type: ActionType.CHANGE_STRINGS_COUNT,
  payload: type,
});

export const changePage = (page) => ({
  type: ActionType.CHANGE_PAGE,
  payload: page,
});

export const changePopupFlag = (flag) => ({
  type: ActionType.CHANGE_POPUP_FLAG,
  payload: flag,
});

export const changeGuitarAddedFlag = (flag) => ({
  type: ActionType.CHANGE_GUITAR_ADDED_FLAG,
  payload: flag,
});

export const changeCurrentGuitar = (guitar) => ({
  type: ActionType.CHANGE_CURRENT_GUITAR,
  payload: guitar,
});

export const addGuitarToBasket = (guitar) => ({
  type: ActionType.ADD_GUITAR_TO_BASKET,
  payload: guitar,
});

export const changeCurrentGuitarBasket = (guitar) => ({
  type: ActionType.CHANGE_CURRENT_GUITAR_BASKET,
  payload: guitar,
});

export const deleteGuitar = (guitar) => ({
  type: ActionType.DELETE_GUITAR,
  payload: guitar,
});

export const changeGuitarCount = (guitars) => ({
  type: ActionType.CHANGE_GUITAR_COUNT,
  payload: guitars,
});
