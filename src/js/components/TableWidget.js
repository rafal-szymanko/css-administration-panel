/* eslint-disable no-undef */
class TableWidget{
  constructor(tableDetailWrapper, tablePayoutWrapper) {
    const thisTableWidget = this;
    thisTableWidget.dom ={};
    thisTableWidget.dom.detailWrapper = tableDetailWrapper;
    thisTableWidget.dom.payoutWrapper = tablePayoutWrapper;
  
    thisTableWidget.render();
  }
  
  
  render() {
        
    const thisTableWidget = this;
  
    thisTableWidget.detailData  = [
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
  
    thisTableWidget.payoutData = [
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
  
    thisTableWidget.detailDOM = new Tabulator(thisTableWidget.dom.detailWrapper, {
      data:thisTableWidget.detailData, 
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
  
    thisTableWidget.payoutDOM = new Tabulator(thisTableWidget.dom.payoutWrapper, {
  
      data:thisTableWidget.payoutData, 
      responsiveLayout:'collapse',
      layout:'fitColumns',
      columns:[
        {title:'Date', field:'date', hozAlign:'left'},
        {title:'Amount ($)', field:'amount', hozAlign:'left'},
        {title:'Deal', field:'deal', hozAlign:'left'},
        {title:'Account', field:'account', hozAlign:'left'},
      ],
    });
      
  }
}
  
export default TableWidget;
  