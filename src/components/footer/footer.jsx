import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo/logo';
import { ReactComponent as IconFacebook } from '../../img/facebook.svg';
import { ReactComponent as IconInstagram } from '../../img/instagram.svg';
import { ReactComponent as IconTwitter } from '../../img/twitter.svg';
import logoFooter from '../../img/logo-footer.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper wrapper">
        <div className="footer__social">
          <Logo className="footer__logo" logo={logoFooter} />
          <ul className="social-links">
            <li>
              <Link
                className="social-links__link"
                to="#"
                aria-label="Faceebook"
              >
                <IconFacebook />
              </Link>
            </li>
            <li>
              <Link
                className="social-links__link"
                to="#"
                aria-label="Instagram"
              >
                <IconInstagram />
              </Link>
            </li>
            <li>
              <Link className="social-links__link" to="#" aria-label="Twitter">
                <IconTwitter />
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__block-group">
          <div className="footer__item footer__item--about-us">
            <h3 className="footer__header">О нас</h3>
            <p className="footer__text">
              Магазин гитар, музыкальных&nbsp;инструментов и&nbsp;гитарная
              мастерская&nbsp;в Санкт-Петербурге.
            </p>
            <p className="footer__text">
              Все инструменты проверены,&nbsp;отстроены&nbsp;и доведены до
              идеала!
            </p>
          </div>
          <div className="footer__item footer__item--catalog">
            <h3 className="footer__header">Каталог</h3>
            <ul className="footer__list">
              <li className="footer__list-item">
                <Link className="footer__link" to="#">
                  Акустические гитары
                </Link>
              </li>
              <li className="footer__list-item">
                <Link className="footer__link" to="#">
                  Классические гитары
                </Link>
              </li>
              <li className="footer__list-item">
                <Link className="footer__link" to="#">
                  Электрогитары
                </Link>
              </li>
              <li className="footer__list-item">
                <Link className="footer__link" to="#">
                  Бас-гитары
                </Link>
              </li>
              <li className="footer__list-item">
                <Link className="footer__link" to="#">
                  Укулеле
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__item footer__item--info">
            <h3 className="footer__header">Информация</h3>
            <ul className="footer__list">
              <li className="footer__list-item">
                <Link className="footer__link" to="#">
                  Где купить?
                </Link>
              </li>
              <li className="footer__list-item">
                <Link className="footer__link" to="#">
                  Блог
                </Link>
              </li>
              <li className="footer__list-item">
                <Link className="footer__link" to="#">
                  Вопрос - ответ
                </Link>
              </li>
              <li className="footer__list-item">
                <Link className="footer__link" to="#">
                  Возврат
                </Link>
              </li>
              <li className="footer__list-item">
                <Link className="footer__link" to="#">
                  Сервис-центры
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__item footer__item--contacts">
          <h3 className="footer__header">Контакты</h3>
          <address className="footer__address">
            г. Санкт-Петербург,&nbsp; м.&nbsp;Невский проспект,&nbsp;
            ул.&nbsp;Казанская 6.
          </address>
          <a href="tel:88125005050" className="footer__mobile">
            8-812-500-50-50
          </a>
          <p className="footer__text">
            Режим работы:
            <span className="footer__clock">
              с&nbsp;11:00&nbsp;до&nbsp;20:00,
            </span>
            без&nbsp;выходных.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
