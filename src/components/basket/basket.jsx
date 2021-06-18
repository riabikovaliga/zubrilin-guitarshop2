import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getGuitarBasket } from '../../store/selectors';
import BasketCards from '../basket-cards/basket-cards';
import BasketOrdering from '../basket-ordering/basket-ordering';

const Basket = ({ className }) => {
  const guitars = useSelector(getGuitarBasket);
  return (
    <section className={`${className} basket`}>
      <form className="basket__form">
        {guitars.length !== 0 && <BasketCards />}
        <BasketOrdering />
      </form>
    </section>
  );
};

Basket.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Basket;
