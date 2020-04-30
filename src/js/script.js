// const sidebar = document.querySelector('.fa-bars');
// const navigation = document.querySelector('.navigation');
// const mainSide = document.querySelector('main');
// const messenger = document.querySelector('.manager');

// sidebar.addEventListener('click', function(){
// //   navigation.classList.toggle('active');
// //   mainSide.classList.toggle('active');
// //   messenger.classList.toggle('active');
//   console.log('object');

// });


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
