var ctx = document.getElementById('residentChart').getContext('2d');
let songpa = ['27561', '27870', '36332', '42590','68764'];
let seongnam = ['42793', '43601', '43702', '42833', '46876'];
let hanam = ['17877', '18073', '25320', '28920', '46873'];
var residentChart = new Chart(ctx, {
	type: 'line',
	data: {
		labels: ['2020', '2021', '2022', '2023', '2024'],
		datasets: [
			{ 
				label : '송파구 위례',
				data : songpa,
				backgroundColor : '#1187CF',
				type : 'bar'
			},
			{
				label : '성남시 위례',
				data : seongnam,
				backgroundColor : '#B8E5E0',
				type : 'bar'
			},
			{
				label : '하남시 위례',
				data : hanam,
				backgroundColor : '#FFCD4A',
				type : 'bar'
			}

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
	residentChart.resize();
}

window.addEventListener('resize', resizeChart);


