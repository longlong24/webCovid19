var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['08-09', '09-09', '10-09', '11-09', '12-09', '13-09', '14-09'],
        datasets: [{
            label: 'Số ca nhiễm',
            data: [12680, 11000, 13320, 9600, 10400, 8000, 7000],
            backgroundColor: 'grey'
        }]
    },
    options: {
        title: {
            display: true,
            text: 'BIỂU ĐỒ',
            fontSize: 30,
            fontColor: 'grey'
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

new Chart("breath-Chart", {
  type: "line",
  data: {
    labels: ['08-09','10-09','11-09','12-09','13-09','14-09','15-09','16-09','17-09','18-09','19-09'],
    datasets: [{
      fill: false,
      lineTension: 0,
      label:"lần thực hiện",
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: [0,1,2,3,4,5,6,6,7,9,10]
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 6, max:16}}],
    },
  }
});