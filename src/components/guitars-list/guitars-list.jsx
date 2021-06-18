import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentGuitars, getCurrentPage } from '../../store/selectors';
import { changePopupFlag, changeCurrentGuitar } from '../../store/actions';
import { getNumberWithSpaces } from '../../utils/utils.js';
import { ReactComponent as IconStar } from '../../img/star.svg';
import { STARS, GUITARS_PER_PAGE } from '../../const';

const GuitarsList = ({ className }) => {
  const dispatch = useDispatch();
  const guitars = useSelector(getCurrentGuitars);
  const page = useSelector(getCurrentPage);
  const guitarsPerPage = guitars.slice(
    page * GUITARS_PER_PAGE - GUITARS_PER_PAGE,
    page * GUITARS_PER_PAGE
  );

  const handlBuyButtonClick = (guitar) => {
    dispatch(changeCurrentGuitar(guitar));
    dispatch(changePopupFlag(true));
  };

  return (
    <div className={`${className}`}>
      {guitarsPerPage.map((item, index) => (
        <article key={`${item.article}-${index}`} className="card">
          <img
            className="card__image"
            src={item.image}
            width="68"
            height="190"
            alt={item.name}
          />
          <div className="card__review">
            <ul className="card__stars-list">
              {STARS.map((item) => (
                <li key={item} className="card__stars-item">
                  <IconStar />
                </li>
              ))}
            </ul>
            <span className="card__popularity">{item.popularity}</span>
          </div>
          <div className="card__info">
            <span className="card__name">{item.name}</span>
            <span className="card__price">
              {getNumberWithSpaces(item.price)} ₽
            </span>
          </div>
          <div className="card__buttons">
            <button className="card__button-details button" type="button">
              Подробнее
            </button>
            <button
              className="card__button-buy button button--orange"
              type="button"
              onClick={() => handlBuyButtonClick(item)}
            >
              Купить
            </button>
          </div>
        </article>
      ))}
    </div>
  );
};

GuitarsList.propTypes = {
  className: PropTypes.string.isRequired,
};

export default GuitarsList;
