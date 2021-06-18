import { createSelector } from 'reselect';
import { getSortedGuitars } from '../utils/sort';
import {
  filteringByPrice,
  filteringByTypes,
  filteringBySrings,
} from '../utils/fiters';

export const getGuitars = ({ catalog }) => catalog.guitars;
export const getSortType = ({ catalog }) => catalog.sortType;
export const getSortOrder = ({ catalog }) => catalog.sortOrder;
export const getFilterPriceMin = ({ catalog }) => catalog.filterPriceMin;
export const getFilterPriceMax = ({ catalog }) => catalog.filterPriceMax;
export const getPriceGuitars = ({ catalog }) => catalog.priceGuitars;
export const getGuitarTypes = ({ catalog }) => catalog.guitarTypes;
export const getCountStrings = ({ catalog }) => catalog.countStrings;
export const getCurrentPage = ({ catalog }) => catalog.currentPage;
export const getPopupFlag = ({ catalog }) => catalog.isPopupOpen;
export const getGuitarBasket = ({ basket }) => basket.guitars;
export const getIsGuitarAdded = ({ catalog }) => catalog.isGuitarAdded;
export const getCurrentGuitarCatalog = ({ catalog }) => catalog.currentGuitar;
export const getCurrentGuitarBasket = ({ basket }) => basket.currentGuitar;
export const getCheckedGuitarTypes = ({ catalog }) => catalog.guitarTypes;
export const getCheckedCountStrings = ({ catalog }) => catalog.countStrings;

export const getCurrentGuitars = createSelector(
  getGuitars,
  getFilterPriceMin,
  getFilterPriceMax,
  getGuitarTypes,
  getCountStrings,
  getSortType,
  getSortOrder,
  (guitars, priceMin, priceMax, guitarTypes, strings, sortType, sortOrder) => {
    let currentGuitars = guitars;

    currentGuitars = filteringByPrice(guitars, priceMin, priceMax);

    if (guitarTypes.length) {
      currentGuitars = filteringByTypes(currentGuitars, guitarTypes);
    }

    if (strings.length) {
      currentGuitars = filteringBySrings(currentGuitars, strings);
    }

    if (sortType || sortOrder) {
      currentGuitars = getSortedGuitars(currentGuitars, sortOrder, sortType);
    }

    return currentGuitars;
  }
);
