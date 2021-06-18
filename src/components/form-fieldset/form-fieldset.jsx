import React from 'react';
import PropTypes from 'prop-types';

const FormFieldset = ({ children, title }) => {
  return (
    <fieldset className="form__fieldset">
      <h3 className="form__title-item">{title}</h3>
      {children}
    </fieldset>
  );
};

FormFieldset.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default FormFieldset;
