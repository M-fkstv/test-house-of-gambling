const burger = document.querySelector('.header__buttons-burger');
const mobileMenu = document.querySelector('.mobile__menu');
const switchLanguage = document.querySelector('.eng');
const language = document.getElementById('lang');

burger.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  burger.classList.toggle('open');
});

switchLanguage.addEventListener('click', () => {
  language.textContent === 'EN'
    ? (language.textContent = 'RU')
    : (language.textContent = 'EN');
});
