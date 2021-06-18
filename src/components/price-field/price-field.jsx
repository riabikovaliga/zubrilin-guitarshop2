import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changePriceMin, changePriceMax } from '../../store/actions';
import {
  getFilterPriceMax,
  getFilterPriceMin,
  getPriceGuitars,
} from '../../store/selectors';
import { getkMinMaxValue } from '../../utils/utils';
import InputNumber from '../input-number/input-number';

const PriceField = () => {
  const dispatch = useDispatch();
  const filterPriceMin = useSelector(getFilterPriceMin);
  const filterPriceMax = useSelector(getFilterPriceMax);
  const priceGuitars = useSelector(getPriceGuitars);

  const handlPriceMinChange = useCallback(
    (evt) => {
      const value = Number(evt.target.value);
      dispatch(changePriceMin(value));
    },
    [dispatch]
  );

  const handlPriceMinValidate = () => {
    dispatch(
      changePriceMin(
        getkMinMaxValue(filterPriceMin, priceGuitars.min, filterPriceMax)
      )
    );
  };

  const handlPriceMaxChange = useCallback(
    (evt) => {
      const value = Number(evt.target.value);
      dispatch(changePriceMax(value));
    },
    [dispatch]
  );

  const handlPriceMaxValidate = () => {
    dispatch(
      changePriceMax(
        getkMinMaxValue(filterPriceMax, filterPriceMin, priceGuitars.max)
      )
    );
  };

  return (
    <div className="form__price">
      <InputNumber
        name="price-min"
        value={filterPriceMin}
        onChange={handlPriceMinChange}
        onBlur={handlPriceMinValidate}
      />

      <InputNumber
        name="price-max"
        value={filterPriceMax}
        onChange={handlPriceMaxChange}
        onBlur={handlPriceMaxValidate}
      />
    </div>
  );
};

export default PriceField;
