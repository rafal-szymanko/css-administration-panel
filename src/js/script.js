const sideBarHandler = document.querySelector('.fa-bars');
const navigation = document.querySelector('.menu');
const mainSide = document.querySelector('main');
// const messenger = document.querySelector('.manager');

sideBarHandler.addEventListener('click', function(){
  navigation.classList.toggle('menu--show');
  mainSide.classList.toggle('main--show');
//   messenger.classList.toggle('active');


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