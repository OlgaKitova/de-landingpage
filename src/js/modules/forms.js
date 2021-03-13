const take__send__form = function (form__title, status__title, name, email, text, error, form__total, header__title) {

  const form = document.querySelector(form__title),
      status = document.querySelector(status__title),
      nameForm = document.querySelector(name),
      emailForm = document.querySelector(email),
      textMessage = document.querySelector(text),
      errorForm = document.querySelector(error),
      modal = document.querySelector(form__total),
      header = document.querySelector(header__title);

  let total;

  emailForm.addEventListener('input', () => {
  if(emailForm.validity.valid) {
    errorForm.innerHTML = '';
    errorForm.className = 'error';
    total = true;
    return total;
  } else {
    errorForm.innerHTML = 'Please enter correct email';
    total = false
    return total;
  }
});

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
      if(total && nameForm.value != '' && textMessage.value != '') {
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
            status.style.display = 'none';
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
      } else {
        e.preventDefault();
        status.style.display = 'block';
        status.textContent = "Not all fields are filled";
        setTimeout(() => {
          status.style.display = 'none';
          status.textContent = '';
        }, 1500);
      }

    });
  };
export default take__send__form;
