google.charts.load('current', {'packages': ['corechart', 'line']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('date', 'Date');
    data.addColumn('number', '2018년 4월생');
    data.addColumn('number', '2018년 5월생');
    data.addColumn('number', '2018년 6월생');
    data.addColumn('number', '2018년 7월생');
    data.addColumn('number', '2018년 8월생');
    data.addColumn('number', '2018년 9월생');
    data.addColumn('number', '2018년 10월생');
    data.addColumn('number', '2018년 11월생');
    data.addColumn('number', '2018년 12월생');

    data.addRows([
        [new Date(2018, 3), 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [new Date(2018, 3), 80, 0, 0, 0, 0, 0, 0, 0, 0],
        [new Date(2018, 4), 100, 0, 0, 0, 0, 0, 0, 0, 0],
        [new Date(2018, 4), 100, 80, 0, 0, 0, 0, 0, 0, 0],
        [new Date(2018, 5), 100, 100, 0, 0, 0, 0, 0, 0, 0],
        [new Date(2018, 5), 100, 100, 80, 0, 0, 0, 0, 0, 0],
        [new Date(2018, 6), 100, 100, 100, 0, 0, 0, 0, 0, 0],
        [new Date(2018, 6), 100, 100, 100, 80, 0, 0, 0, 0, 0],
        [new Date(2018, 7), 100, 100, 100, 100, 0, 0, 0, 0, 0],
        [new Date(2018, 7), 100, 100, 100, 100, 80, 0, 0, 0, 0],
        [new Date(2018, 8), 100, 100, 100, 100, 100, 0, 0, 0, 0],
        [new Date(2018, 8), 100, 100, 100, 100, 100, 80, 0, 0, 0],
        [new Date(2018, 9), 100, 100, 100, 100, 100, 100, 0, 0, 0],
        [new Date(2018, 9), 100, 100, 100, 100, 100, 100, 80, 0, 0],
        [new Date(2018, 10), 100, 100, 100, 100, 100, 100, 100, 0, 0],
        [new Date(2018, 10), 100, 100, 100, 100, 100, 100, 100, 80, 0],
        [new Date(2018, 11), 100, 100, 100, 100, 100, 100, 100, 100, 0],
        [new Date(2018, 11), 100, 100, 100, 100, 100, 100, 100, 100, 80],
        [new Date(2019, 0), 100, 100, 100, 100, 100, 100, 100, 100, 100],
        [new Date(2019, 0), 100, 100, 100, 100, 100, 100, 100, 100, 100],
    ]);

    var options = {
        title: '생년월 코호트별 접종률',
        subtitle: '어린이 대상 백신',
        width: "100%",
        height: "100%",
        /*curveType: 'function',*/
        vAxis: {
            title: '접종률',
            minValue: 0,
            maxValue: 100
        },
        hAxis: {
            title: '조회기간',
            format: 'yyyy.MM',
            gridlines: {
                count: -1,
                units: {
                    days: {format: ['MMM dd']},
                    hours: {format: ['HH:mm', 'ha']},
                }
            },
            minorGridlines: {
                units: {
                    hours: {format: ['hh:mm:ss a', 'ha']},
                    minutes: {format: ['HH:mm a Z', ':mm']}
                }
            }
        },
        animation: {
            startup: true,
            duration: 1000,
            easing: 'out',
        },
    };

    var chart = new google.visualization.LineChart(document.getElementById('linechart_material'));

    chart.draw(data, options);
}