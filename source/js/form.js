let form = document.querySelector('form');
let formModal = form.querySelector('.form__modal');
let formSubmitButton = form.querySelector('.form__submit');
let buttonClose = form.querySelector('.form__modal-button');
let formOverlay = form.querySelector('.form__modal-overlay');

formSubmitButton.addEventListener('click', (e) => {
  e.preventDefault();

  let title = formModal.querySelector('.form__modal-title');
  let message = formModal.querySelector('.form__modal-message');
  let inputs = document.querySelectorAll('input');
  let info = {
    'error' : {
      'title' : 'Что-то пошло не так!',
      'message' : 'Проверьте поля, выделенные красным, скорее всего вы забыли их заполнить',
      'buttonText' : 'Ок'
    },
    'success' : {
      'title' : 'Ваш отзыв отправлен!',
      'message' : 'Спасибо за ваше участие, ваш отзыв уже поступил к нам. В ближайшее время мы опубликуем его на сайте.',
      'buttonText' : 'Закрыть окно'
    }
  }
  let text = info.success;

  for (field of inputs) {
    if (!field.validity.valid) {
      text = info.error;
      break;
    }
  };

  title.textContent = text.title;
  message.textContent = text.message;
  buttonClose.textContent = text.buttonText;

  if (text == info.success) {
    formModal.classList.add('form__modal--success');
  }

  formOverlay.classList.add('form__modal-overlay--opened');
  formModal.classList.add('form__modal--opened');
});

const modalClose = () => {
  formModal.classList.remove('form__modal--opened');
  formModal.classList.remove('form__modal--success');
  formOverlay.classList.remove('form__modal-overlay--opened');
}

/* закрытие окон */
buttonClose.addEventListener('click', (e) => {
  modalClose();
});

/* закрытие по ESC */
document.body.addEventListener('keydown', (e) => {
  if (e.keyCode == 27) {
    modalClose();
  };
}, false);

/* скрытие окна при клике на подложку */
formOverlay.addEventListener('click', (e) => {
  modalClose();
});
