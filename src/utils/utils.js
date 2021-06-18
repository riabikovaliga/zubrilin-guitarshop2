import {
  CountOperation,
  PromoCode,
  SUPERGITARA_DISCOUNT,
  GITARAHIT_DISCOUNT,
  GITARA2020_MAX_DISCOUNT_PERCENT,
  GITARA2020_MAX_DISCOUNT_RUB,
} from '../const';

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getPriceGuitars = (items) => {
  return { min: getMinPrice(items), max: getMaxPrice(items) };
};

export const getNumberWithSpaces = (num) => {
  return num.toLocaleString('ru-RU');
};

export const getMaxPrice = (items) => {
  if (!items) {
    return 1;
  }
  const values = items.map((item) => item.price);
  return Math.max(...values);
};

export const getMinPrice = (items) => {
  if (!items) {
    return 1;
  }
  const values = items.map((item) => item.price);
  return Math.min(...values);
};

export const getkMinMaxValue = (value, min, max) => {
  return value < min ? min : value > max ? max : value;
};

export const getCheckedValues = (items, value) => {
  let values = [];
  let valueAlreadyExists = [];

  valueAlreadyExists = items.indexOf(value) > -1;
  values = items.slice();

  if (valueAlreadyExists) {
    values = values.filter((item) => item !== value);
  } else {
    values.push(value);
  }
  return values;
};

export const addGuitarToBasket = (guitars, guitar) => {
  const exact = guitars.some((item) => item.id === guitar.id);

  if (!exact) {
    return [...guitars, { ...guitar, count: 1, amountPrice: guitar.price }];
  }

  return changeCount(guitars, guitar, CountOperation.INCREMENT);
};

export const deleteGuitar = (guitars, guitar) => {
  return guitars.filter((item) => item.id !== guitar.id);
};

export const changeCount = (guitars, guitar, operation) => {
  const index = guitars.findIndex((item) => item.id === guitar.id);

  const isIncrement = operation === CountOperation.INCREMENT;

  const count = isIncrement
    ? guitars[index].count + 1
    : guitars[index].count - 1;

  if (count === 0) {
    return;
  }

  const amountPrice = guitar.price * count;

  return [
    ...guitars.slice(0, index),
    {
      ...guitar,
      count,
      amountPrice,
    },
    ...guitars.slice(index + 1),
  ];
};

export const getTotalPrice = (items) =>
  items.reduce((total, item) => total + item.amountPrice, 0);

export const getPromoDiscount = (promoCode, totalPrice) => {
  switch (promoCode) {
    case PromoCode.GITARAHIT: {
      return Math.round(totalPrice - totalPrice * GITARAHIT_DISCOUNT);
    }
    case PromoCode.SUPERGITARA: {
      return totalPrice - SUPERGITARA_DISCOUNT;
    }
    case PromoCode.GITARA2020: {
      return GITARA2020_MAX_DISCOUNT_RUB / totalPrice >
        GITARA2020_MAX_DISCOUNT_PERCENT
        ? Math.round(totalPrice - totalPrice * GITARA2020_MAX_DISCOUNT_PERCENT)
        : totalPrice - GITARA2020_MAX_DISCOUNT_RUB;
    }
    default: {
      return totalPrice;
    }
  }
};
