let navigationButton = document.querySelector('.navigation__button');
let navigationList = document.querySelector('.navigation__list');

navigationButton.addEventListener('click', function(e) {
  e.preventDefault();

  navigationButton.classList.toggle('navigation__button--close');
  navigationList.classList.toggle('navigation__list--opened');
});
