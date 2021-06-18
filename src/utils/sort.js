import { SortType, SortOrder } from '../const';

export const getSortedGuitars = (guitars, sortOrder, sortType) => {
  switch (sortOrder) {
    case SortOrder.TO_HIGHT:
      return guitars
        .slice()
        .sort((a, b) =>
          sortType === SortType.PRICE
            ? a.price - b.price
            : a.popularity - b.popularity
        );
    case SortOrder.TO_LOW:
      return guitars
        .slice()
        .sort((a, b) =>
          sortType === SortType.PRICE
            ? b.price - a.price
            : b.popularity - a.popularity
        );
    default:
      return guitars;
  }
};
