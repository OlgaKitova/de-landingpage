import burgerMenu from './modules/burger';
import modals from './modules/modals';
import take__send__form from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';
burgerMenu('.header__burger', '.header__menu');
modals('.popup__form','.popup__content .popup__close', '.footer__btn', '.header');
take__send__form('.footer__formTotal', '.statusTitle', '#username', '#mail', '#message', '.footer__formTotal .error', '.popup__form', '.header');
take__send__form('.contacts__formTotal', '.statusAbout', '#name', '#email', '#text', '.contacts__formTotal .error', '.popup__form', '.header');

});
