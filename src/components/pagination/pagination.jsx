import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '../../store/actions';
import { GUITARS_PER_PAGE } from '../../const';
import { getCurrentGuitars, getCurrentPage } from '../../store/selectors';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchPageNumbers, PAGE_DOTS } from '../../utils/pagination';

const Pagination = ({ className }) => {
  const dispatch = useDispatch();
  const guitars = useSelector(getCurrentGuitars);
  const totalPages = Math.ceil(guitars.length / GUITARS_PER_PAGE);
  const currentPage = useSelector(getCurrentPage);
  const pages = fetchPageNumbers(totalPages, currentPage);

  const handlPageChange = (page) => {
    dispatch(changePage(page));
  };

  const handlNexPageClick = (evt) => {
    evt.preventDefault();
    if (currentPage !== totalPages) {
      dispatch(changePage(currentPage + 1));
    }
  };

  if (pages.length === 1) {
    return null;
  }

  return (
    <ul className={`${className} pagination`}>
      {pages.map((page, index) => {
        return page === PAGE_DOTS ? (
          <li key={index} className="pagination__item ">
            <Link to="#" className="pagination__link pagination__link--dots">
              ...
            </Link>
          </li>
        ) : (
          <li
            key={index}
            className="pagination__item"
            onClick={() => handlPageChange(page)}
          >
            <Link
              to="#"
              className={`pagination__link ${
                page === currentPage ? `pagination__link--active` : ``
              }`}
            >
              {page}
            </Link>
          </li>
        );
      })}

      <li className="pagination__item" onClick={handlNexPageClick}>
        <Link
          to="#"
          className={`pagination__link pagination__link--next-page ${
            currentPage === totalPages ? `pagination__link--disabled` : ``
          }`}
        >
          Далее
        </Link>
      </li>
    </ul>
  );
};

Pagination.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Pagination;
