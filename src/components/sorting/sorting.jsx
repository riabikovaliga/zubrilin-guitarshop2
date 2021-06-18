import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { changeSortType, changeSortOrder } from '../../store/actions';
import { getSortType, getSortOrder } from '../../store/selectors';
import { ReactComponent as IconArrow } from '../../img/arrow.svg';
import { SortType, SortOrder } from '../../const.js';
import { Link } from 'react-router-dom';

const Sorting = ({ className }) => {
  const dispatch = useDispatch();
  const sortType = useSelector(getSortType);
  const sortOrder = useSelector(getSortOrder);

  const handleSortTypeChange = useCallback(
    (type) => {
      if (!sortOrder) {
        dispatch(changeSortOrder(SortOrder.TO_HIGHT));
      }
      dispatch(changeSortType(type));
    },
    [sortOrder, dispatch]
  );

  const handleSortOrderChange = useCallback(
    (type) => {
      if (!sortType) {
        dispatch(changeSortType(SortType.PRICE));
      }
      dispatch(changeSortOrder(type));
    },
    [sortType, dispatch]
  );

  return (
    <div className={`${className} sort`}>
      <p className="sort__title">Сортировать:</p>
      <ul className="sort__list sort__list--type">
        {Object.values(SortType).map((type, i) => (
          <li
            key={`${type}-${i}`}
            className="sort__type-item"
            onClick={() => {
              handleSortTypeChange(type);
            }}
          >
            <Link
              to="#"
              className={`sort__type-name ${
                type === sortType ? `sort__type-name--active` : ``
              }`}
            >
              {type}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="sort__list sort__list--arrow">
        {Object.values(SortOrder).map((type, i) => (
          <li
            key={`${type}-${i}`}
            className="sort__type-item"
            onClick={() => {
              handleSortOrderChange(type);
            }}
          >
            <Link
              to="#"
              className={`sort__type-name ${
                type === sortOrder ? `sort__type-name--active` : ``
              }`}
              aria-label={type}
            >
              <IconArrow />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Sorting.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Sorting;
