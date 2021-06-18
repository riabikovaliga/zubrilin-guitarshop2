import React from 'react';
import GuitarsList from '../guitars-list/guitars-list';
import Pagination from '../pagination/pagination';
import Sorting from '../sorting/sorting';

const Catalog = () => {
  return (
    <section className="catalog">
      <Sorting className="catalog__sort" />
      <GuitarsList className="catalog__cards" />
      <Pagination className="catalog__pagination" />
    </section>
  );
};

export default Catalog;
