'use strict';

let cardButton = document.querySelector('.header-button-cart');
let modalCard = document.querySelector('.modal-card');
let modalButtonClose = document.querySelector('.modal-button-close');

function modal(){
    modalCard.classList.toggle('modal-card-active');
}

cardButton.addEventListener('click', modal);
modalButtonClose.addEventListener('click', modal);

new WOW().init();