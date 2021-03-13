function modals (form__title, form__content, button, header__title) {
   const modal = document.querySelector(form__title),
        modalClose = document.querySelector(form__content),
        btnModal = document.querySelector(button),
        header = document.querySelector(header__title);

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

}
export default modals;
