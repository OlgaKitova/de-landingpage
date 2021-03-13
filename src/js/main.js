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

 const take__send__form = function (form__title, status__title) {

  const form = document.querySelector(form__title),
      status = document.querySelector(status__title);

    const message = {
      loading: 'Loading...',
      success: 'Your message successfully sent',
      failure: 'Error! Reload the page'
    };
    const postData = async (url, data) => {
      status.style.display = 'block';
      status.textContent = message.loading;
      document.body.style.overflow = 'hidden';
      let res = await fetch(url, {
        method: "POST",
        body: data
      });
      return await res.text();
    };

    form.addEventListener('submit', (e) => {
       e.preventDefault();
       
      const formData = new FormData(form);
      postData('sender/sender.php', formData)
        .then(res => {
          status.textContent = message.success;
        })
        .catch((e) => {
          status.textContent = message.failure;
        })
        .finally(() => {
          form.reset();
          setTimeout(() => {
            status.textContent = '';
          }, 2000);
          try {
            if(form.classList == 'footer__formTotal') {
              setTimeout(() => {
                modal.classList.remove('show');
                header.style.display = 'block';
              }, 4000);
            }
          }
          catch {
          }
        });

    });
  }


  take__send__form('.footer__formTotal', '.statusTitle');
  take__send__form('.contacts__formTotal', '.statusAbout');

});
