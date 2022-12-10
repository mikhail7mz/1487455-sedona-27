let navigationButton = document.querySelector('.navigation__button');
let navigationList = document.querySelector('.navigation__list');

document.querySelector(".navigation--no-js").classList.remove("navigation--no-js");

navigationButton.addEventListener('click', function(e) {
  e.preventDefault();

  navigationButton.classList.toggle('navigation__button--close');
  navigationList.classList.toggle('navigation__list--opened');
});
