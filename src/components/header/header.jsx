import React from 'react';
import Logo from '../logo/logo';
import { ReactComponent as IconLocation } from '../../img/location.svg';
import { getGuitarBasket } from '../../store/selectors';
import { ReactComponent as IconSearch } from '../../img/search.svg';
import { ReactComponent as IconCart } from '../../img/cart.svg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../../img/logo.svg';

const Header = () => {
  const gutarBasket = useSelector(getGuitarBasket);
  const countGutarsBasket = gutarBasket.length;

  return (
    <header className="header">
      <nav className="header__nav main-nav wrapper">
        <Logo logo={logo} className="main-nav__logo" />
        <ul className="main-nav__list">
          <li className="main-nav__item">
            <Link className="main-nav__link" to="/">
              Каталог
            </Link>
          </li>
          <li className="main-nav__item">
            <Link className="main-nav__link" to="#">
              Где купить?
            </Link>
          </li>
          <li className="main-nav__item">
            <Link className="main-nav__link" to="#">
              О компании
            </Link>
          </li>
          <li className="main-nav__item">
            <Link className="main-nav__link" to="#">
              Cервис-центры
            </Link>
          </li>
        </ul>

        <ul className="main-nav__list main-nav__list--user-list">
          <li className="main-nav__item">
            <Link className="main-nav__link" to="#" aria-label="карта">
              <IconLocation />
            </Link>
          </li>
          <li className="main-nav__item">
            <Link className="main-nav__link" to="#" aria-label="поиск">
              <IconSearch />
            </Link>
          </li>
          <li className="main-nav__item main-nav__item--cart">
            <Link to="/basket" className="main-nav__link" aria-label="корзина">
              <IconCart />
            </Link>
            <span className="main-nav__cart-quantity">
              {countGutarsBasket > 0 && countGutarsBasket}
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
