function createChart(comicCount, storyCount, characterCount) {
	var canvas = document.getElementById("marvelChart");
	var ctx = canvas.getContext('2d');
	
	Chart.defaults.global.defaultFontColor = 'black';
	Chart.defaults.global.defaultFontSize = 16;
	var data = {
			labels: characterCount,
			datasets: [{
				label: "Comic Count",
				fill: false,
				lineTension: 0.1,
				borderColor: "red",
				borderCapStyle: 'square',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: "black",
				pointBackgroundColor: "white",
				pointBorderWidth: 1,
				pointHoverRadius: 8,
				pointHoverBackgroundColor: "yellow",
				pointHoverBorderColor: "brown",
				pointHoverBorderWidth: 2,
				pointRadius: 4,
				pointHitRadius: 10,
				data: comicCount,
				spanGaps: true,
			}, {
				label: "Story Count",
				fill: false,
				lineTension: 0.1,
				borderColor: "blue",
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: "white",
				pointBackgroundColor: "black",
				pointBorderWidth: 1,
				pointHoverRadius: 2,
				pointHoverBackgroundColor: "brown",
				pointHoverBorderColor: "yellow",
				pointHoverBorderWidth: 2,
				pointRadius: 4,
				pointHitRadius: 10,
				data: storyCount,
				spanGaps: false,
			}
	
			]
	};
	
	var options = {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero:true
					},
					scaleLabel: {
						display: true,
						labelString: 'STORY COUNT',
						fontSize: 20 
					}
				}],
				xAxes: [{
					ticks: {
						beginAtZero:true
					},
					scaleLabel: {
						display: true,
						labelString: 'COMIC COUNT',
						fontSize: 20 
					}					
				}]
			}  
	};
	
	var myBarChart = new Chart(ctx, {
		type: 'line',
		data: data,
		options: options
	});
}