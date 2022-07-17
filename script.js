'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const section1 = document.querySelector('#section--1');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// creatin Inserting deleting element
const header = document.querySelector('.header');
const message = document.createElement('div');

message.classList.add('cookie-message');

// message.textContent = `We use cookied for improved functionality and analytics`;

message.innerHTML = `We use cookied for improved functionality and analytics. <button class ="btn btn--close-cookie">Got it!</button> `;

// header.prepend(message)
header.append(message);
/* to see the element into multiple place  */
// header.append(message.cloneNode(true))
// header.before(message)
// header.after(message)

// Delete elements

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

/* Styles */

message.style.backgroundColor = '#37383d';
message.style.width = '120%';

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

const btnScrollTo = document.querySelector('.btn--scroll-to');

btnScrollTo.addEventListener('click', function (e) {
  /* Old way */
  // const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);

  // console.log(e.target.getBoundingClientRect());

  // console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  // console.log(
  //   'height/width viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );
  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  /* New Away */

  section1.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////////
// Page navigation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     //console.log('Link', e.currentTarget);
//     const id = this.getAttribute('href');
//     console.log(id)

//     document.querySelector(id).scrollIntoView({behavior: 'smooth'})
//   });
// });

// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  // console.log(e.target);

  e.preventDefault();

  // Matching strategy

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    //console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

/* Tabbed Component  */

const tabs = document.querySelectorAll('.operations__tab');

const tabsContainer = document.querySelector('.operations__tab-container');

const tabsContent = document.querySelectorAll('.operations__content');
// console.log(tabsContent);

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  // console.log(clicked)

  //Guard clause
  if (!clicked) return;
/* 
  Acrive Tab */
  
  /* Remove all active tab */
  tabs.forEach(t => t.classList.remove('operations__tab--active'));

  /* Add active Tab */
  clicked.classList.add('operations__tab--active');

  // Active content area
  //console.log(clicked.dataset.tab);

  /* Remove all active content area */
  tabsContent.forEach(t => t.classList.remove('operations__content--active'));

  /* Add activ content area */
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

///////////////////////////////////////

// rgb(255,255,255)

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = (min, max) =>
//   `rgb(${randomInt(min, max)},${randomInt(min, max)}, ${randomInt(min, max)})`;

// // console.log(randomColor(0, 255));

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor(0,255)
//   console.log('LINK', e.target, e.currentTarget);
//   console.log(this)
//   console.log(e.currentTarget===this)
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {

//   this.style.backgroundColor = randomColor(0, 255);
//   console.log('CONTAINER', e.target, e.currentTarget);
//   console.log(this);
//   console.log(e.currentTarget === this);
// });

// document.querySelector('.nav').addEventListener('click', function (e) {

//   this.style.backgroundColor = randomColor(0, 255);
//   console.log('NAV', e.target, e.currentTarget);
//   console.log(this);
//   console.log(e.currentTarget === this);
// });

/* DOM Traversing */

// const h1 = document.querySelector('h1');

/* Going dowanrds: child */

// console.log(h1.querySelectorAll('.highlight'));

//console.log(h1.childNodes)
// console.log(h1.children);

// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered'

/* Going upwards: parents */

// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';
