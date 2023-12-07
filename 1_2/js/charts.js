google.charts.load('current', { 'packages': ['bar'] });
google.charts.load('current', { 'packages': ['line'] });
google.charts.setOnLoadCallback(drawChart1);
google.charts.setOnLoadCallback(drawChart2);
google.charts.setOnLoadCallback(drawChart3);
google.charts.setOnLoadCallback(drawChart4);

function drawChart1() {
    var data = google.visualization.arrayToDataTable([
        ['Year', '개업', '폐업'],
        ['2020년', 3, 1],
        ['2021년', 5, 7],
        ['2022년', 2, 4],
        ['2023년', 5, 1]
    ]);

    var options = {
        chart: {
            // title: '위례시 치과 개·폐업 현황',
            // subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        },

    };
    var chart = new google.charts.Bar(document.getElementById('hospitalStatusDashboard'));
    chart.draw(data, google.charts.Bar.convertOptions(options));
}

function drawChart2() {
    var data = google.visualization.arrayToDataTable([
        ['Year', '송파구 위례동', '성남시 위례동', '하남시 위례동'],
        ['2019년', 27000, 42000, 17000],
        ['2020년', 28000, 43000, 18000],
        ['2021년', 36000, 43000, 25000],
        ['2022년', 42000, 42000, 29000]
    ]);

    var options = {
        chart: {
            // title: '위례시 치과 개·폐업 현황',
            // subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        },

    };
    var chart = new google.charts.Bar(document.getElementById('residentDashboard'));
    chart.draw(data, google.charts.Bar.convertOptions(options));
}


function drawChart3() {

    var data = new google.visualization.DataTable();
    data.addColumn('string', '분기');
    data.addColumn('number', '송파구 위례동');
    data.addColumn('number', '성남시 위례동');
    data.addColumn('number', '하남시 위례동');

    data.addRows([
        ['2021년 3분기', 3300000, 4000000, 3500000],
        ['2021년 4분기', 3400000, 4100000, 4000000],
        ['2022년 1분기', 3600000, 4300000, 4100000],
        ['2022년 2분기', 3500000, 4200000, 3900000],
        ['2022년 3분기', 3400000, 4500000, 4000000],
        ['2022년 4분기', 3400000, 3900000, 4100000],
        ['2023년 1분기', 3400000, 4200000, 4000000],
        ['2023년 2분기', 3500000, 4100000, 3800000]
    ]);

    var options = {
        chart: {
            // title: 'Box Office Earnings in First Two Weeks of Opening',
            // subtitle: 'in millions of dollars (USD)'
        }
        // height: 500
    };

    var chart = new google.charts.Line(document.getElementById('floatingDashboard'));

    chart.draw(data, google.charts.Line.convertOptions(options));
}

function drawChart4() {

    var data = new google.visualization.DataTable();
    data.addColumn('string', '분기');
    data.addColumn('number', '송파구 위례동');
    data.addColumn('number', '성남시 위례동');
    data.addColumn('number', '하남시 위례동');

    data.addRows([
        ['2019년', 27000, 42000, 17000],
        ['2020년', 28000, 43000, 18000],
        ['2021년', 36000, 43000, 25000],
        ['2022년', 42000, 42000, 29000],
        ['2023년', 34000, 39000, 41000],
        ['2024년', 34000, 42000, 40000],
        ['2025년', 42222, 41000, 43000]
    ]);

    var options = {
        chart: {
            // title: 'Box Office Earnings in First Two Weeks of Opening',
            // subtitle: 'in millions of dollars (USD)'

        }
				      // height: 500

    };

    var chart = new google.charts.Line(document.getElementById('forecastDashboard'));

    chart.draw(data, google.charts.Line.convertOptions(options));
}