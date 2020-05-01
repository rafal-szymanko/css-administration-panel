const sideBarHandler = document.querySelector('.fa-bars');
const navigation = document.querySelector('.menu');
const linkNames = document.querySelectorAll('.menu__text');
const mainSide = document.querySelector('main');
const menuimages = document.querySelectorAll('.menu__image--white');
const messengerName = document.querySelector('.menu__title');
const logoName = document.querySelector('.logo__name');
const messenger = document.querySelector('.menu__messenger');

sideBarHandler.addEventListener('click', function(){
  navigation.classList.toggle('menu--show');
  mainSide.classList.toggle('main--show');
  messengerName.classList.toggle('menu__title--show');
  logoName.classList.toggle('logo__name--show');
  messenger.classList.toggle('menu__messenger--show');



  for (let linkName of linkNames) {
    linkName.classList.toggle('menu__text--show');
  }

  for (let menuimage of menuimages) {
    menuimage.classList.toggle('menu__image--active');
  }

});


//Input dates

let date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

if (month < 10) {
  month = '0' + month;
}
if (day < 10) {
  day = '0' + day;
}

let today = year + '-' + month + '-' + day;    

const datepickers = document.querySelectorAll('.section__datepicker');

for (let datepicker of datepickers) {
  datepicker.value = today;
}

//Visible menu

// function toggleMenu(visible) {
//   document.querySelector('.menu').classList.toggle('menu--show', visible);
//   console.log('object');
// }

// document.querySelector('.fa-bars').addEventListener('click', function(e) {
//   e.preventDefault();
//   toggleMenu();
// });