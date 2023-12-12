var data = {
	labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
	datasets: [{
		label: 'BigData Analysis',
		data: [65, 59, 80, 81, 56, 55, 40],
		backgroundColor: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'],
	}]
};
var ctx = document.getElementById('openCloseHosChart').getContext('2d');
var openCloseHosChart = new Chart(ctx, {
	type: 'bar',
	data: data,
	options: {}
});

function resizeChart() {
	openCloseHosChart.resize();
}

window.addEventListener('resize', resizeChart);