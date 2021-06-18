import React from 'react';
import PropTypes from 'prop-types';

const PopUpButtonCatalog = ({ onButtonAddClick }) => {
  return (
    <div className="pop-up__buttons">
      <button
        className="pop-up__button pop-up__button--add button button--orange"
        onClick={onButtonAddClick}
      >
        Добавить в корзину
      </button>
    </div>
  );
};

const PopUpButtonSuccess = ({ onButtonContinueClick, onButtonBasketClick }) => {
  return (
    <div className="pop-up__buttons pop-up__buttons--sucess">
      <button
        className="pop-up__button pop-up__button--to-basket button button--orange"
        onClick={onButtonBasketClick}
      >
        Перейти в корзину
      </button>
      <button
        className="pop-up__button pop-up__button--continue button button--white"
        onClick={onButtonContinueClick}
      >
        Продолжить покупки
      </button>
    </div>
  );
};

const PopUpButtonBasket = ({ onButtonDeleteClick, onButtonContinueClick }) => {
  return (
    <div className="pop-up__buttons">
      <button
        className="pop-up__button pop-up__button--delete pop-up__button button button--orange"
        onClick={onButtonDeleteClick}
      >
        Удалить товар
      </button>
      <button
        className="pop-up__button pop-up__button--continue button button--white"
        onClick={onButtonContinueClick}
      >
        Продолжить покупки
      </button>
    </div>
  );
};

PopUpButtonCatalog.propTypes = {
  onButtonAddClick: PropTypes.func.isRequired,
};

PopUpButtonSuccess.propTypes = {
  onButtonContinueClick: PropTypes.func.isRequired,
  onButtonBasketClick: PropTypes.func.isRequired,
};

PopUpButtonBasket.propTypes = {
  onButtonDeleteClick: PropTypes.func.isRequired,
  onButtonContinueClick: PropTypes.func.isRequired,
};

export { PopUpButtonCatalog, PopUpButtonSuccess, PopUpButtonBasket };
