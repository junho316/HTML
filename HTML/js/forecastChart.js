var ctx = document.getElementById('forecastChart').getContext('2d');

var forecastChart = new Chart(ctx, {
	type: 'line',
	data: {
		labels: ['Label 1', 'Label 2', 'Label 3'], // X축 레이블
		datasets: [{
			label: '은평구',
			data: [10, 20, 30], // 첫 번째 라인의 데이터
			borderColor: 'blue', // 첫 번째 라인의 색상
			borderWidth: 1
		}, {
			label: '서대문구',
			data: [20, 30, 45], // 두 번째 라인의 데이터
			borderColor: 'red', // 두 번째 라인의 색상
			borderWidth: 1
		}, {
			label: '마포구',
			data: [15, 25, 35], // 두 번째 라인의 데이터
			borderColor: 'black', // 두 번째 라인의 색상
			borderWidth: 1
		},
		]
	},
	options: {
		plugins: {
			legend: {
				labels: {
					font: {
						size: 20,
						family: 'Noto Sans KR'
					}
				}
			}
		}
	}
});


function resizeChart() {
	forecastChart.resize();
}

window.addEventListener('resize', resizeChart);

