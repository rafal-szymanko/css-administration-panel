import TableWidget from './components/TableWidget.js';
import ChartWidget from './components/ChartWidget.js';
import Section from './components/Section.js';
import Modal from './components/Modal.js';
import Menu from './components/Menu.js';
import Calendar from './components/Calendar.js';


const app = {

  initSection: function() {
    const thisApp = this;
    thisApp.section = new Section;
  },

  initMenu: function()  {
    const thisApp = this;
    thisApp.menu = new Menu;
  },

  initModal: function() {
    const thisApp = this;
    thisApp.modal = new Modal;
  },

  initWidget: function(){
    const thisApp = this;

    const chartElem = document.querySelector('.section__chart');
    const calendarsElem = document.querySelectorAll('.calendar__datepicker');

    const tableDetailElem = document.querySelector('.table__detail');
    const tablePayoutElem = document.querySelector('.table__payout');
    
    thisApp.table = new TableWidget(tableDetailElem, tablePayoutElem);
    thisApp.chart = new ChartWidget(chartElem);
    thisApp.calendar = new Calendar(calendarsElem);
  },


  init: function(){
    const thisApp = this;
    thisApp.initSection();
    thisApp.initMenu();
    thisApp.initWidget();
    thisApp.initModal();
  },
};
app.init();