/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
class Calendar{
  constructor(datepickers) {
    const thisCalendar = this;
    thisCalendar.datepickers = datepickers;
    thisCalendar.renderValue();
  
  }
  
  renderValue() {
    const thisCalendar = this;
      
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

    for (let datepicker of thisCalendar.datepickers) {
      datepicker.value = today;
    }
  }

}
        
export default Calendar;