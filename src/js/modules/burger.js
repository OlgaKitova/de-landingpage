function burgerMenu (burger__title, menu__title) {
 const burger = document.querySelector(burger__title),
        menu = document.querySelector(menu__title);

  burger.addEventListener('click', (e) => {
    e.preventDefault();
    burger.classList.toggle('active');
    menu.classList.toggle('active');
  })
}
export default burgerMenu;
