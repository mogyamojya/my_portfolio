import '@babel/polyfill';

import MainPaddingTop from './modules/mainPaddingTop';
import PageTop from './modules/pageTop';
import Chart from 'chart.js';


// new PageTop('#pagetop', '.pagetop');
new MainPaddingTop();
// new PageTop();

$(window).resize(function() {
  new MainPaddingTop();
});

window.onload=function(){
var ctx = document.getElementById('myChart').getContext('2d');
	var myChart = new Chart(ctx, {
	    type: 'horizontalBar',
	    data: {
	        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
	        datasets: [{
	            // label: '',
	            data: [80, 19, 3, 5, 2, 3],
	            backgroundColor: [
	                'rgba(255, 99, 132, 0.2)',
	                'rgba(54, 162, 235, 0.2)',
	                'rgba(255, 206, 86, 0.2)',
	                'rgba(75, 192, 192, 0.2)',
	                'rgba(153, 102, 255, 0.2)',
	                'rgba(255, 159, 64, 0.2)'
	            ],
	            borderColor: [
	                'rgba(255, 99, 132, 1)',
	                'rgba(54, 162, 235, 1)',
	                'rgba(255, 206, 86, 1)',
	                'rgba(75, 192, 192, 1)',
	                'rgba(153, 102, 255, 1)',
	                'rgba(255, 159, 64, 1)'
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
          title: {
              display: true,
              fontSize: 18,
              text: 'タイトル'
          },
          legend: {
          // true or faise で切り替え
          display: false,
          },
	        scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero: true
	                }
	            }]
	        }
	    }
	});
}

//SweetScroll用の記述
// import SweetScroll from "sweet-scroll"
// const sweetScroll = new SweetScroll({
//   trigger: "a[href^='#']"
// });