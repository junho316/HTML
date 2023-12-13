var barChartData = {
	labels: ["2020", "2021", "2022", "2023"],
	datasets: [{
		label: '개업',
		backgroundColor: "#1E90FF",
		data: [
			1,
			2,
			2,
			3
		]
	}, {
		label: '폐업',
		backgroundColor: "#F7464A",
		data: [
			4,
			3,
			2,
			2
		]
	}]
};
window.onload = function () {
	var ctx = document.getElementById('openCloseHosChart').getContext('2d');
	openCloseHosChart = new Chart(ctx, {
		type: 'bar',
		data: barChartData,
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
}

function resizeChart() {
	openCloseHosChart.resize();
}
window.addEventListener('resize', resizeChart);