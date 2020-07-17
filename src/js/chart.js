google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('date', 'Birth');
    data.addColumn('number', 'Born in April 2018');
    data.addColumn('number', 'Born in May 2018');
    data.addColumn('number', 'Born in Jun 2018');
    data.addColumn('number', 'Born in July 2018');
    data.addColumn('number', 'Born in August 2018');

    data.addRows([
        [new Date(2018, 3), 0, 0, 0, 0, 0],
        [new Date(2018, 4), 100, 0, 0, 0, 0],
        [new Date(2018, 5), 100, 100, 0, 0, 0],
        [new Date(2018, 6), 100, 100, 100, 0, 0],
        [new Date(2018, 7), 100, 100, 100, 100, 0],
        [new Date(2018, 8), 100, 100, 100, 100, 100],
        [new Date(2018, 9), 100, 100, 100, 100, 100],
    ]);

    var options = {
        chart: {
            title: '생년월 코호트별 접종률',
            subtitle: '어린이 대상 백신'
        },
        curveType: 'function',
        animation:{
            duration: 7000,
            easing: 'out',
        },
        height: "100%",
        chartArea: {
            width: '96%',
            height: '73%'
        }
    };

    var chart = new google.charts.Line(document.getElementById('linechart_material'));

    chart.draw(data, google.charts.Line.convertOptions(options));
}