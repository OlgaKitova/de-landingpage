window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const burger = document.querySelector('.header__burger'),
        menu = document.querySelector('.header__menu');

  burger.addEventListener('click', (e) => {
    e.preventDefault();
    burger.classList.toggle('active');
    menu.classList.toggle('active');
  })
})
