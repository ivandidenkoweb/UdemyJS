let secondMenuItem = document.querySelectorAll('.menu-item')[2],
     menu = document.querySelector('.menu'),
     thirdMenuItem = document.querySelectorAll('.menu-item')[1],
     fifthMenuItem = document.createElement('li'),
     body = document.querySelector('body'),
     title = document.querySelector('#title'),
     adv = document.querySelector('.adv'),
     feedback = prompt('Какое Ваше отношение к технике apple?'),
     promptElement = document.querySelector('#prompt');


menu.insertBefore(secondMenuItem, thirdMenuItem);
fifthMenuItem.classList.add('menu-item');
fifthMenuItem.textContent = 'Пятый пункт';
menu.appendChild(fifthMenuItem);
body.style.background = 'url(img/apple_true.jpg)';
title.textContent = 'Мы продаем только подлинную технику Apple"';
adv.remove();
promptElement.textContent = feedback;

