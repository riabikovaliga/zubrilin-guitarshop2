import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getPopupFlag } from '../../store/selectors';
import { getNumberWithSpaces } from '../../utils/utils';

const GuitarInfo = ({ className, guitar, mod }) => {
  const isPopupOpen = useSelector(getPopupFlag);
  return (
    <div
      className={`${className} guitar-info ${mod ? `guitar-info--${mod}` : ``}`}
    >
      <img
        className="guitar-info__image"
        src={guitar.image}
        width={isPopupOpen ? 55 : 52}
        height={isPopupOpen ? 136 : 132}
        alt={guitar.name}
      />
      <div className="guitar-info__info">
        <h3 className="guitar-info__header">
          {mod ? `Гитара` : guitar.type} {guitar.name}
        </h3>
        <p className="guitar-info__code">Артикул: {guitar.code}</p>
        <p className="guitar-info__description">
          <span className="guitar-info__description-name">{guitar.type}</span>
          ,&nbsp;
          {guitar.strings} струнная
        </p>

        {isPopupOpen && (
          <p className="guitar-info__price">
            Цена: {getNumberWithSpaces(guitar.price)} ₽
          </p>
        )}
      </div>
    </div>
  );
};

GuitarInfo.propTypes = {
  className: PropTypes.string.isRequired,
  mod: PropTypes.string,
  guitar: PropTypes.shape({
    id: PropTypes.number.isRequired,
    code: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    popularity: PropTypes.number.isRequired,
    strings: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    count: PropTypes.number,
    amountPrice: PropTypes.number,
  }),
};

export default GuitarInfo;
