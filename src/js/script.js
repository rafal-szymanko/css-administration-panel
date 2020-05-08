/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const sideBarHandler = document.querySelector('.fa-bars');
const mobileBarHandler = document.querySelector('.logo__icon--mobile');
const navigation = document.querySelector('.menu');
const navigationMobile = document.querySelector('.menu__list--mobile');
const linkNames = document.querySelectorAll('.menu__text');
const mainSide = document.querySelector('main');
const menuimages = document.querySelectorAll('.menu__image--white');
const messengerName = document.querySelector('.menu__title');
const logoName = document.querySelector('.logo__name');
const messenger = document.querySelector('.menu__messenger');
const modal = document.querySelector('.menu__link--modal');

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

mobileBarHandler.addEventListener('click', function() {
  navigationMobile.classList.toggle('menu__list--show');
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

const datepickers = document.querySelectorAll('.calendar__datepicker');

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
    maintainAspectRatio: false,
    responsive: true,
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

const tableDetail = document.querySelector('.table__detail');

const tableDetailData = [
  {id:1, name:'aff/sam_test', date:'17/08/02 (12:58)', visits:'232', unique:'112', signups:'12', ftd:'6', depositors:'3', deposits:'34,425.00', payout:'234.00', tournover:'421,342.00', deal:'cpl(200)'},
  {id:2, name:'aff/leo_test', date:'15/08/02 (12:58)', visits:'232', unique:'112', signups:'12', ftd:'6', depositors:'3', deposits:'29,436.00', payout:'941.00', tournover:'784,435.00', deal:'cpl(200)'},
  {id:3, name:'aff/sam_test', date:'17/08/02 (12:58)', visits:'232', unique:'112', signups:'12', ftd:'6', depositors:'3', deposits:'34,425.00', payout:'234.00', tournover:'421,342.00', deal:'cpl(200)'},
  {id:4, name:'aff/leo_test', date:'15/08/02 (12:58)', visits:'232', unique:'112', signups:'12', ftd:'6', depositors:'3', deposits:'29,436.00', payout:'941.00', tournover:'784,435.00', deal:'cpl(200)'},
  {id:5, name:'aff/sam_test', date:'17/08/02 (12:58)', visits:'232', unique:'112', signups:'12', ftd:'6', depositors:'3', deposits:'34,425.00', payout:'234.00', tournover:'421,342.00', deal:'cpl(200)'},
  {id:6, name:'aff/leo_test', date:'15/08/02 (12:58)', visits:'232', unique:'112', signups:'12', ftd:'6', depositors:'3', deposits:'29,436.00', payout:'941.00', tournover:'784,435.00', deal:'cpl(200)'},
  {id:7, name:'aff/sam_test', date:'17/08/02 (12:58)', visits:'232', unique:'112', signups:'12', ftd:'6', depositors:'3', deposits:'34,425.00', payout:'234.00', tournover:'421,342.00', deal:'cpl(200)'},
  {id:8, name:'aff/leo_test', date:'15/08/02 (12:58)', visits:'232', unique:'112', signups:'12', ftd:'6', depositors:'3', deposits:'29,436.00', payout:'941.00', tournover:'784,435.00', deal:'cpl(200)'},
  {id:9, name:'aff/sam_test', date:'17/08/02 (12:58)', visits:'232', unique:'112', signups:'12', ftd:'6', depositors:'3', deposits:'34,425.00', payout:'234.00', tournover:'421,342.00', deal:'cpl(200)'},
  {id:10, name:'aff/leo_test', date:'15/08/02 (12:58)', visits:'232', unique:'112', signups:'12', ftd:'6', depositors:'3', deposits:'29,436.00', payout:'941.00', tournover:'784,435.00', deal:'cpl(200)'},
];

const tableDetailDOM = new Tabulator(tableDetail, {
  data:tableDetailData, 
  responsiveLayout:'collapse',
  layout:'fitColumns',
  columns:[ 
    {title:'Tracker Name', field:'name', hozAlign:'left'},
    {title:'Initiated data', field:'date', hozAlign:'left'},
    {title:'Visits', field:'visits', hozAlign:'left'},
    {title:'Unique', field:'unique', hozAlign:'left'},
    {title:'Signups', field:'signups', hozAlign:'left'},
    {title:'FTD', field:'ftd', hozAlign:'left'},
    {title:'Depositors', field:'depositors', hozAlign:'left'},
    {title:'Deposits ($)', field:'deposits', hozAlign:'left'},
    {title:'Payout', field:'payout', hozAlign:'left'},
    {title:'Tournover', field:'tournover', hozAlign:'left'},
    {title:'Deal', field:'deal', hozAlign:'left'},
  ],
});

const tablePayout = document.querySelector('.table__payout');

const tablePayoutData = [
  {id:1, date:'17/08/02 (12:58)', amount:'34,425.00', deal:'cpl(200)', account:'bank'},
  {id:2, date:'15/08/02 (12:58)', amount:'29,436.00', deal:'cpl(200)', account:'bank'},
  {id:3, date:'17/08/02 (12:58)', amount:'34,425.00', deal:'cpl(200)', account:'bank'},
  {id:4, date:'15/08/02 (12:58)', amount:'29,436.00', deal:'cpl(200)', account:'bank'},
  {id:5, date:'17/08/02 (12:58)', amount:'34,425.00', deal:'cpl(200)', account:'bank'},
  {id:6, date:'15/08/02 (12:58)', amount:'29,436.00', deal:'cpl(200)', account:'bank'},
  {id:7, date:'17/08/02 (12:58)', amount:'34,425.00', deal:'cpl(200)', account:'bank'},
  {id:8, date:'15/08/02 (12:58)', amount:'29,436.00', deal:'cpl(200)', account:'bank'},
  {id:9, date:'17/08/02 (12:58)', amount:'34,425.00', deal:'cpl(200)', account:'bank'},
  {id:10, date:'15/08/02 (12:58)', amount:'29,436.00', deal:'cpl(200)', account:'bank'},
];

const tablePayoutDOM = new Tabulator(tablePayout, {

  data:tablePayoutData, 
  responsiveLayout:'collapse',
  layout:'fitColumns',
  columns:[
    {title:'Date', field:'date', hozAlign:'left'},
    {title:'Amount ($)', field:'amount', hozAlign:'left'},
    {title:'Deal', field:'deal', hozAlign:'left'},
    {title:'Account', field:'account', hozAlign:'left'},
  ],
});

// Display section 

function linkClickHandler(event) {
  event.preventDefault();
  const clickedElement = this;

  const activeLinks = document.querySelectorAll('.menu__link--active');

  for (let activeLink of activeLinks) {
    activeLink.classList.remove('menu__link--active');
    navigationMobile.classList.remove('menu__list--show');
  }

  clickedElement.classList.add('menu__link--active');

  const sectionSelector = clickedElement.getAttribute('href').slice(1);

  const activeSections = document.querySelectorAll('.section--active');

  for (let activeSection of activeSections) {
    activeSection.classList.remove('section--active');
  }

  const targetSection = document.querySelector(`.section--${sectionSelector}`);
  if (targetSection == null) {
    let modalSelector = clickedElement.getAttribute('href').slice(1);
    let modalClassSelector = `.overlay__modal--${modalSelector}`;
    openModal(modalClassSelector);

  } else {
    targetSection.classList.add('section--active');

  }
}

const menuLinks = document.querySelectorAll('.menu__link');

for (let menuLink of menuLinks) {
  menuLink.addEventListener('click', linkClickHandler);
}




//Display modal

function closeModal() {
  document.querySelector('.overlay').classList.remove('overlay--show');
}

document.querySelectorAll('.button__overlay--close').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    closeModal();
  });
});

document.querySelector('.overlay').addEventListener('click', function(e) {
  if(e.target === this) {
    closeModal();
  }
});

document.addEventListener('keyup', function(e) {
  if(e.keyCode === 27) {
    closeModal();
  }
});

function openModal(modal) {
  document.querySelectorAll('.overlay > *').forEach(function(modal) {
    modal.classList.remove('overlay__modal--show');
  });
  document.querySelector('.overlay').classList.add('overlay--show');
  document.querySelector(modal).classList.add('overlay__modal--show');
}
