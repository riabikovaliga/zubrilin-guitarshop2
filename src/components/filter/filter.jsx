import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCheckedGuitarTypes,
  getCheckedCountStrings,
} from '../../store/selectors';
import CheckboxList from '../checkbox-list/checkbox-list';
import FormFieldset from '../form-fieldset/form-fieldset';
import PriceField from '../price-field/price-field';
import { changeGuitarTypes, changeStringsCounts } from '../../store/actions';
import { FiterType, CountStringsByType } from '../../const';

const Filter = () => {
  const dispatch = useDispatch();
  const checkedGuitarTypes = useSelector(getCheckedGuitarTypes);
  const checkedCountStrings = useSelector(getCheckedCountStrings);

  const getAvailableStrings = () => {
    let strings = [];
    checkedGuitarTypes.forEach((item) =>
      strings.push(...CountStringsByType[item])
    );
    return strings.filter((e, index, items) => items.indexOf(e) === index);
  };

  const getAvailableTypes = () => {
    return Object.keys(CountStringsByType).filter((key) =>
      CountStringsByType[key].some((item) =>
        checkedCountStrings.includes(String(item))
      )
    );
  };

  const handlGuitarTypeChange = (evt) => {
    const value = evt.target.value;
    dispatch(changeGuitarTypes(value));
  };

  const handlStringsCountChange = (evt) => {
    const value = evt.target.value;
    dispatch(changeStringsCounts(value));
  };

  return (
    <section className="filter">
      <form className="filter__form form">
        <h3 className="form__title">Фильтр</h3>
        <FormFieldset title="Цена, ₽">
          <PriceField />
        </FormFieldset>
        <FormFieldset title="Тип гитар">
          <CheckboxList
            type={FiterType.TYPE}
            onChange={handlGuitarTypeChange}
            checkedItems={checkedGuitarTypes}
            avalibleItems={getAvailableTypes()}
          />
        </FormFieldset>
        <FormFieldset title="Количество струн">
          <CheckboxList
            type={FiterType.STRINGS}
            onChange={handlStringsCountChange}
            checkedItems={checkedCountStrings}
            avalibleItems={getAvailableStrings()}
          />
        </FormFieldset>
      </form>
    </section>
  );
};

export default Filter;
