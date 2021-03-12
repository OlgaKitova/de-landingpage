window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const burger = document.querySelector('.header__burger'),
        menu = document.querySelector('.header__menu');

  burger.addEventListener('click', (e) => {
    e.preventDefault();
    burger.classList.toggle('active');
    menu.classList.toggle('active');
  })

  //Modals
  const modal = document.querySelector('.popup__form'),
        modalClose = document.querySelector('.popup__content .popup__close'),
        btnModal = document.querySelector('.footer__btn'),
        header = document.querySelector('.header');

  btnModal.addEventListener('click', () => {
      modal.classList.add('show');
      header.style.display = 'none';
    });

  modalClose.addEventListener('click', () => {
    modal.classList.remove('show');
    header.style.display = 'block';

  });
  modal.addEventListener('click', (e) => {
    if (e.target == modal) {
      modal.classList.remove('show');
      header.style.display = 'block';
    }
  });

})
