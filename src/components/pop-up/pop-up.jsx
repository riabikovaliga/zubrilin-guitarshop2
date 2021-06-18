import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { useHistory } from 'react-router-dom';
import GuitarInfo from '../guitar-info/guitar-info';
import {
  getIsGuitarAdded,
  getCurrentGuitarCatalog,
  getCurrentGuitarBasket,
} from '../../store/selectors';
import {
  changePopupFlag,
  addGuitarToBasket,
  changeGuitarAddedFlag,
  deleteGuitar,
} from '../../store/actions';
import { ReactComponent as CloseIcon } from '../../img/close.svg';
import { AppRoute, PopupTitle, ESC_CODE } from '../../const';
import {
  PopUpButtonBasket,
  PopUpButtonCatalog,
  PopUpButtonSuccess,
} from '../popup-buttons/popup-buttons.jsx';

const PopUp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('keydown', onEscButtonPress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { pathname } = useLocation();
  const history = useHistory();
  const guitarCatalog = useSelector(getCurrentGuitarCatalog);
  const guitarBasket = useSelector(getCurrentGuitarBasket);
  const isGuitarAdded = useSelector(getIsGuitarAdded);

  const isBasketPage = pathname === AppRoute.BASKET.url;
  const guitar = isBasketPage ? guitarBasket : guitarCatalog;
  const titlePopup = isBasketPage
    ? PopupTitle.DELETE
    : isGuitarAdded
    ? PopupTitle.SUCESS
    : PopupTitle.ADD;

  const handlPopupClose = () => {
    dispatch(changePopupFlag(false));
    dispatch(changeGuitarAddedFlag(false));
  };

  const handlAddButtonClick = () => {
    dispatch(addGuitarToBasket(guitarCatalog));
    dispatch(changeGuitarAddedFlag(true));
  };

  const handlDeleteButtonClick = () => {
    dispatch(changePopupFlag(false));
    dispatch(deleteGuitar(guitarBasket));
  };

  const handlToBasketButtonClick = () => {
    dispatch(changePopupFlag(false));
    dispatch(changeGuitarAddedFlag(false));
    history.push(AppRoute.BASKET.url);
  };

  const onEscButtonPress = (evt) => {
    if (evt.keyCode === ESC_CODE) {
      evt.preventDefault();
      dispatch(changePopupFlag(false));
      dispatch(changeGuitarAddedFlag(false));
      document.removeEventListener(`keydown`, onEscButtonPress);
    }
  };

  return (
    <section className="pop-up" onClick={handlPopupClose}>
      <div
        className="pop-up__wrapper"
        onClick={(evt) => {
          evt.stopPropagation();
        }}
      >
        <button className="pop-up__button-close" type="button">
          <CloseIcon onClick={handlPopupClose} />
        </button>
        <h2 className="pop-up__title">{titlePopup}</h2>

        {isGuitarAdded ? (
          <PopUpButtonSuccess
            onButtonContinueClick={handlPopupClose}
            onButtonBasketClick={handlToBasketButtonClick}
          />
        ) : (
          <div className="pop-up__inner">
            <GuitarInfo
              className="pop-up__guitar-info"
              guitar={guitar}
              mod={'pop-up'}
            />
            {isBasketPage ? (
              <PopUpButtonBasket
                onButtonDeleteClick={handlDeleteButtonClick}
                onButtonContinueClick={handlPopupClose}
              />
            ) : (
              <PopUpButtonCatalog onButtonAddClick={handlAddButtonClick} />
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default PopUp;
