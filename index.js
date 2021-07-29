'use strict';

let offset = 0;
const sliderLine = document.querySelector('.slider__line');

document.querySelector('.slider__buttons-next').addEventListener('click', function(){
    offset = offset + 345;
    if (offset > 1380) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider__buttons-prev').addEventListener('click', function () {
    offset = offset - 345;
    if (offset < 0) {
        offset = 1380;
    }
    sliderLine.style.left = -offset + 'px';
});


const hamburger = document.querySelector('.nav__hamburger');
const burgerMenu = document.querySelector('.menu');
const burgerLink = document.querySelectorAll('.menu__link');
const socialLink = document.querySelectorAll('.menu__social-link');
const closer = document.querySelectorAll('.menu__hamburger');

hamburger.addEventListener('click', () => {
  burgerMenu.classList.toggle('menu--active');
  hamburger.classList.toggle('nav__hamburger--active');
});

for (const value of burgerLink) {
  value.addEventListener('click', () => {
    burgerMenu.classList.toggle('menu--active');
  });
}

for (const value of closer) {
  value.addEventListener('click', () => {
    burgerMenu.classList.toggle('menu--active');
  });
}

for (const value of socialLink) {
  value.addEventListener('click', () => {
    burgerMenu.classList.toggle('menu--active');
    menuHamburger.classList.toggle('menu__hamburger--active');
  });
}

const form = document.querySelector('.subscribe__form');
const inputs
  = document.querySelectorAll('.subscribe__form-input');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  for (const input of inputs) {
    input.value = '';
  }
});
