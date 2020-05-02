/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
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

// Chart

const ctx = document.querySelector('.section__chart');

const data = {
  labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
  datasets: [
    {
      label: 'Signups',
      backgroundColor: '#80BFCA',
      data: [8, 414, 500, 303, 159, 164, 335, 310, 584, 580]
    },
    {
      label: 'FTD',
      backgroundColor: '#FFA200',
      data: [101, 197, 553, 188, 178, 402, 381, 568, 256, 222]
    },
    {
      label: 'Earned',
      backgroundColor: '#59B66D',
      data: [388, 150, 495, 16, 155, 432, 395, 259, 82, 237]
    }
  ]
};

const myBarChart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: {
    barValueSpacing: 20,
    scales: {
      yAxes: [{
        ticks: {
          min: 0,
        }
      }]
    },
    
    legend: {
      display: true,
      labels: {
        fontColor: '#333',
        usePointStyle:true,
      }
    }
  }
});