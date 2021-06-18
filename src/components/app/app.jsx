import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import '../../sass/style.scss';
import { getPopupFlag } from '../../store/selectors';
import BasketContent from '../basket-content/basket-content';
import PopUp from '../pop-up/pop-up';
import Footer from '../footer/footer';
import Header from '../header/header';
import MainContent from '../main-content/main-content';
import { AppRoute } from '../../const';

const App = () => {
  const isPopupOpen = useSelector(getPopupFlag);

  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isPopupOpen]);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path={AppRoute.ROOT.url}>
          <MainContent />
        </Route>
        <Route>
          <BasketContent exact path={AppRoute.BASKET.url} />
        </Route>
      </Switch>
      <Footer />
      {isPopupOpen && <PopUp isPopupOpen={isPopupOpen} />}
    </Router>
  );
};

export default App;
