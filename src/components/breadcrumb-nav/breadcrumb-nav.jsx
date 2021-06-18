import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

const BreadcrumbNav = ({ className, items }) => {
  const { pathname } = useLocation();

  return (
    <ul className={`${className} breadcrumbs`}>
      <li className="breadcrumbs__item">
        <Link to="#main" className="breadcrumbs__link">
          Главная
        </Link>
      </li>

      {items.map((item) => {
        if (item.url === pathname) {
          return (
            <li key={item.title} className="breadcrumbs__item">
              <span className="breadcrumbs__text">{item.title}</span>
            </li>
          );
        }
        return (
          <li key={item.title} className="breadcrumbs__item">
            <Link to={item.url} className="breadcrumbs__link">
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

BreadcrumbNav.propTypes = {
  className: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BreadcrumbNav;
