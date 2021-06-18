export const AppRoute = {
  ROOT: { url: '/', title: 'Каталог' },
  BASKET: { url: '/basket', title: 'Оформляем' },
};

export const GuitarType = {
  AUCUSTIC: `акустическая гитара`,
  ELECTRO: `электрогитара`,
  UKULELE: `укулеле`,
};

export const CountStringsByType = {
  [GuitarType.AUCUSTIC]: [6, 7, 12],
  [GuitarType.ELECTRO]: [4, 6, 7],
  [GuitarType.UKULELE]: [4],
};

export const STARS = [1, 2, 3, 4, 5];

export const ESC_CODE = 27;

export const FiterType = {
  PRICE: `price`,
  TYPE: `type`,
  STRINGS: `strings`,
};

export const SortType = {
  PRICE: `по цене`,
  POPULARITY: `по популярности`,
};

export const PopupTitle = {
  ADD: `Добавить товар в корзину`,
  DELETE: `Удалить этот товар?`,
  SUCESS: `Товар успешно добавлен в корзину`,
};

export const SortOrder = {
  TO_HIGHT: `по возрастанию`,
  TO_LOW: `по убыванию`,
};

export const FilterField = {
  [FiterType.TYPE]: [
    {
      value: GuitarType.AUCUSTIC,
      label: 'Акустические гитары',
      nameField: 'aucustic',
    },
    { value: GuitarType.ELECTRO, label: 'Электрогитары', nameField: 'electro' },
    { value: GuitarType.UKULELE, label: 'Укулеле', nameField: 'ukulele' },
  ],

  [FiterType.STRINGS]: [
    { value: 4, label: 4, nameField: 'strings-4' },
    { value: 6, label: 6, nameField: 'strings-6' },
    { value: 7, label: 7, nameField: 'strings-7' },
    { value: 12, label: 12, nameField: 'strings-12' },
  ],
};

export const CountOperation = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
};

export const GUITARS_PER_PAGE = 9;

export const PromoCode = {
  GITARAHIT: `GITARAHIT`,
  SUPERGITARA: `SUPERGITARA`,
  GITARA2020: `GITARA2020`,
};

export const GITARAHIT_DISCOUNT = 0.1;
export const SUPERGITARA_DISCOUNT = 700;
export const GITARA2020_MAX_DISCOUNT_RUB = 3500;
export const GITARA2020_MAX_DISCOUNT_PERCENT = 0.3;
