import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router';
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';

const Logo = ({ className, logo }) => {
  const { pathname } = useLocation();

  const isCatalogPage = AppRoute.ROOT.url === pathname;
  return isCatalogPage ? (
    <div className={`${className} logo`}>
      <img
        className="logo__image"
        src={logo}
        alt="Логотип сайта Guitar Shop"
        width="67"
        height="70"
      />
    </div>
  ) : (
    <div className={`${className} logo`}>
      <Link to={AppRoute.ROOT.url} className="logo__link">
        <img
          className="logo__image"
          src={logo}
          alt="Логотип сайта Guitar Shop"
          width="67"
          height="70"
        />
      </Link>
    </div>
  );
};

Logo.propTypes = {
  className: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};

export default Logo;
