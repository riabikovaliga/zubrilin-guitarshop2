import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { getNumberWithSpaces } from '../../utils/utils';

const InputNumber = ({ name, value, onChange, onBlur }) => {
  const [isFocus, setIsFocus] = useState(false);
  const [typeInput, setTypeInput] = useState('text');

  return (
    <Fragment>
      <label htmlFor={name} className="visually-hidden" />
      <input
        className="form__input"
        name={name}
        id={name}
        type={typeInput}
        onChange={onChange}
        onBlur={() => {
          onBlur();
          setIsFocus(false);
          setTypeInput('text');
        }}
        onFocus={() => {
          setTypeInput('number');
          setIsFocus(true);
        }}
        value={isFocus ? value : getNumberWithSpaces(value)}
      />
    </Fragment>
  );
};

InputNumber.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

export default InputNumber;
