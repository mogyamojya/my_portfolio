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
	        labels: ['HTML', 'CSS', 'Sass', 'jQuery', 'JavaScript', 'Gulp', 'Webpack', 'EJS', 'pug', 'PhotoShop', 'Illustrator', 'XD', 'Dreamweaver','VSCode', 'Subversion', 'Git', 'Word', 'Excel', 'PowerPoint', 'Teams', 'Backlog','Redmine', 'Mac', 'Windows'],
	        datasets: [{
	            // label: '',
	            data: [80, 80, 80, 40, 20, 40, 10, 70, 40, 70, 30, 40, 40, 60, 60, 30, 30, 40, 30, 80, 70, 40, 70, 40],
	            backgroundColor: [
	                'rgba(255, 20, 147, 0.2)',
	                'rgba(255, 20, 147, 0.2)',
	                'rgba(255, 20, 147, 0.2)',
	                'rgba(255, 20, 147, 0.2)',
	                'rgba(255, 20, 147, 0.2)',
	                'rgba(255, 20, 147, 0.2)',
	                'rgba(255, 20, 147, 0.2)',
	                'rgba(255, 20, 147, 0.2)',
	                'rgba(255, 20, 147, 0.2)',
	                'rgba(255, 20, 147, 0.2)',
	                'rgba(255, 20, 147, 0.2)',
	                'rgba(255, 20, 147, 0.2)',
	                'rgba(255, 20, 147, 0.2)',
	                'rgba(255, 20, 147, 0.2)',
                  'rgba(255, 20, 147, 0.2)',
                  'rgba(255, 20, 147, 0.2)',
                  'rgba(255, 20, 147, 0.2)',
                  'rgba(255, 20, 147, 0.2)',
                  'rgba(255, 20, 147, 0.2)',
                  'rgba(255, 20, 147, 0.2)',
                  'rgba(255, 20, 147, 0.2)',
                  'rgba(255, 20, 147, 0.2)',
                  'rgba(255, 20, 147, 0.2)',
                  'rgba(255, 20, 147, 0.2)'
	            ],
	            borderColor: [
	                'rgba(255, 99, 132, 1)',
	                'rgba(255, 99, 132, 1)',
	                'rgba(255, 99, 132, 1)',
	                'rgba(255, 99, 132, 1)',
	                'rgba(255, 99, 132, 1)',
	                'rgba(255, 99, 132, 1)',
	                'rgba(255, 99, 132, 1)',
	                'rgba(255, 99, 132, 1)',
	                'rgba(255, 99, 132, 1)',
	                'rgba(255, 99, 132, 1)',
	                'rgba(255, 99, 132, 1)',
	                'rgba(255, 99, 132, 1)',
	                'rgba(255, 99, 132, 1)',
	                'rgba(255, 99, 132, 1)',
                  'rgba(255, 99, 132, 1)',
                  'rgba(255, 99, 132, 1)',
                  'rgba(255, 99, 132, 1)',
                  'rgba(255, 99, 132, 1)',
                  'rgba(255, 99, 132, 1)',
                  'rgba(255, 99, 132, 1)',
                  'rgba(255, 99, 132, 1)',
                  'rgba(255, 99, 132, 1)',
                  'rgba(255, 99, 132, 1)',
                  'rgba(255, 99, 132, 1)'
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
          title: {
              display: false,
              fontSize: 18,
              text: '使用経験のある言語、ツール、OSなど'
          },
          legend: {
          // true or faise で切り替え
          display: false,
          },
	        scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero: true,
                      min: 0,
                      max: 100
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