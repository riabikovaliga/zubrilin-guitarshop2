import React from 'react';
import BreadcrumbNav from '../breadcrumb-nav/breadcrumb-nav';
import Catalog from '../catalog/catalog';
import Filter from '../filter/filter';
import { AppRoute } from '../../const';

const MainContent = () => {
  return (
    <main className="content">
      <div className="content__wrapper wrapper">
        <h2 className="content__header">Каталог гитар</h2>
        <BreadcrumbNav
          className="content__breadcrumbs"
          items={[AppRoute.ROOT]}
        />
        <div className="content__catalog">
          <Filter />
          <Catalog />
        </div>
      </div>
    </main>
  );
};

export default MainContent;
