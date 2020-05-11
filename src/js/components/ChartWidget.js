/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
class ChartWidget {
  constructor(wrapperElement) {
    const thisChartWidget = this;
    thisChartWidget.wrapper = wrapperElement;
    thisChartWidget.render();
  }
  render() {
    const thisChartWidget = this;
    thisChartWidget.data = {
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
  
    const myBarChart = new Chart(thisChartWidget.wrapper, {
      type: 'bar',
      data: thisChartWidget.data,
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
  }
}
  
export default ChartWidget;
  